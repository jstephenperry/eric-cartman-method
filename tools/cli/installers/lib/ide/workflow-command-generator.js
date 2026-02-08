/**
 * ECM Workflow Command Generator
 * Generates .claude/commands/ files for workflow invocation
 */

const fs = require('fs-extra');
const path = require('node:path');
const yaml = require('js-yaml');
const { parse } = require('csv-parse/sync');

class WorkflowCommandGenerator {
  constructor(ecmDir, claudeDir) {
    this.ecmDir = ecmDir;
    this.claudeDir = claudeDir;
    this.commandsDir = path.join(claudeDir, 'commands', 'ecm');
  }

  /**
   * Generate command files for all workflows
   */
  async generate() {
    const workflows = await this.loadWorkflowRegistry();
    const generated = [];

    for (const workflow of workflows) {
      const commandPath = await this.generateWorkflowCommand(workflow);
      if (commandPath) {
        generated.push(commandPath);
      }
    }

    return generated;
  }

  /**
   * Load workflow registry from module-help.csv
   */
  async loadWorkflowRegistry() {
    const csvPath = path.join(this.ecmDir, 'ecm', 'module-help.csv');
    if (!fs.existsSync(csvPath)) {
      return [];
    }

    const content = fs.readFileSync(csvPath, 'utf8');
    const records = parse(content, {
      columns: true,
      skip_empty_lines: true,
    });

    return records;
  }

  /**
   * Generate a command file for a workflow
   */
  async generateWorkflowCommand(workflow) {
    const { module, phase, name, code, agent, description } = workflow;
    if (!code) return null;

    const workflowSlug = name.toLowerCase().replace(/\s+/g, '-');

    // Create command directory
    const commandDir = path.join(this.commandsDir, module, 'workflows');
    await fs.ensureDir(commandDir);

    // Phase context
    const phaseContext = this.getPhaseContext(phase);

    // Generate command content
    const content = `---
name: 'ecm-${code.toLowerCase()}'
description: '[${code}] ${name}: ${description}'
disable-model-invocation: true
---

Execute this ECM workflow following the Shape Up methodology.

<workflow-activation CRITICAL="TRUE">
1. LOAD the workflow from @_ecm/ecm/workflows/${phase}/${workflowSlug}/workflow.yaml (or .md)
2. LOAD the agent from @_ecm/ecm/agents/${agent}.agent.yaml
3. Embody the agent's persona while executing the workflow
4. Follow the workflow instructions exactly
5. Generate outputs to configured locations
</workflow-activation>

## Workflow: ${name}

**Code:** ${code}
**Phase:** ${phase}
**Agent:** ${agent}

${description}

## Shape Up Context

${phaseContext}

## Quick Start

Say "${code}" or "${workflowSlug}" to invoke this workflow.

The assigned agent (${agent}) will guide you through the process.
`;

    const commandPath = path.join(commandDir, `${code.toLowerCase()}.md`);
    await fs.writeFile(commandPath, content, 'utf8');

    return commandPath;
  }

  /**
   * Get context text for a phase
   */
  getPhaseContext(phase) {
    const contexts = {
      '1-shaping': `**Shaping Phase**

Shape work before betting on it. Make it rough, solved, and bounded.

- Define the problem clearly
- Shape the solution approach
- Identify and de-risk rabbit holes
- Set appetite (not estimates)`,

      '2-betting': `**Betting Phase**

Make strategic commitments at the betting table.

- Review shaped pitches
- Make bet/no-bet decisions
- Assign to cycles
- Respect capacity limits`,

      '3-building': `**Building Phase**

Execute with discovered scopes and hill charts.

- Discover scopes as you build
- Track progress on hill charts
- Cut scope to ship on time
- Ship or kill at circuit breaker`,

      '4-cooldown': `**Cool-down Phase**

Breathing room between cycles.

- Fix bugs
- Address tech debt
- Explore ideas for future pitches`,

      'quick-flow': `**Quick Flow**

Fast-track small, well-understood work.

- No full shaping needed
- Confirm scope before starting
- Escalate if complexity emerges`,
    };

    return contexts[phase] || 'Part of the Shape Up methodology.';
  }
}

module.exports = { WorkflowCommandGenerator };
