/**
 * ECM Agent Command Generator
 * Generates .claude/commands/ files for native AI tool integration
 */

const fs = require('fs-extra');
const path = require('node:path');
const yaml = require('js-yaml');

class AgentCommandGenerator {
  constructor(ecmDir, claudeDir) {
    this.ecmDir = ecmDir;
    this.claudeDir = claudeDir;
    this.commandsDir = path.join(claudeDir, 'commands', 'ecm');
  }

  /**
   * Generate command files for all agents
   */
  async generate() {
    const agents = await this.findAgents();
    const generated = [];

    for (const agent of agents) {
      const commandPath = await this.generateAgentCommand(agent);
      generated.push(commandPath);
    }

    return generated;
  }

  /**
   * Find all agent YAML files
   */
  async findAgents() {
    const agents = [];
    const modules = ['core', 'ecm'];

    for (const module of modules) {
      const agentsDir = path.join(this.ecmDir, module, 'agents');
      if (!fs.existsSync(agentsDir)) continue;

      const files = fs.readdirSync(agentsDir).filter((f) => f.endsWith('.agent.yaml'));

      for (const file of files) {
        const filePath = path.join(agentsDir, file);
        const content = fs.readFileSync(filePath, 'utf8');
        const data = yaml.load(content);

        agents.push({
          module,
          file,
          path: `${module}/agents/${file}`,
          data: data.agent,
        });
      }
    }

    return agents;
  }

  /**
   * Generate a command file for an agent
   */
  async generateAgentCommand(agent) {
    const { module, data } = agent;
    const agentSlug = data.metadata.name.toLowerCase();

    // Create command directory
    const commandDir = path.join(this.commandsDir, module, 'agents');
    await fs.ensureDir(commandDir);

    // Generate menu items text
    const menuItems = data.menu
      .map((item) => `- **${item.trigger}**: ${item.description}`)
      .join('\n');

    // Generate command content
    const content = `---
name: 'ecm-${module}-${agentSlug}'
description: '${data.metadata.title} - ${data.persona.role}'
disable-model-invocation: true
---

You must fully embody this agent's persona and follow all activation instructions exactly as specified.

<agent-activation CRITICAL="TRUE">
1. LOAD the FULL agent file from @_ecm/${agent.path}
2. READ its entire contents - this contains the complete agent persona, menu, and instructions
3. Execute ALL activation steps exactly as written in the agent file
4. Follow the agent's persona and menu system precisely
5. Stay in character throughout the session
</agent-activation>

## Agent: ${data.metadata.name}

**${data.metadata.title}**

${data.persona.role}

### Communication Style

${data.persona.communication_style}

### Available Commands

${menuItems}

## Shape Up Context

This agent is part of the Eric Cartman Method (ECM), implementing Basecamp's Shape Up methodology:

- **Fixed time, variable scope** - We commit to time, not features
- **Appetite over estimates** - Time budgets, not completion guesses
- **Ship or kill** - Circuit breaker at cycle end, no extensions
`;

    const commandPath = path.join(commandDir, `${agentSlug}.md`);
    await fs.writeFile(commandPath, content, 'utf8');

    return commandPath;
  }
}

module.exports = { AgentCommandGenerator };
