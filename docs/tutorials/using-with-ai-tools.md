# Using ECM with AI Tools

ECM is designed for native integration with AI coding assistants like Claude Code, Cursor, and Codex CLI.

## How It Works

When you install ECM in a project, it creates:

1. **`_ecm/`** - Agent definitions and workflows
2. **`.claude/commands/ecm/`** - Auto-generated commands for AI tools

AI assistants automatically discover these commands and can invoke ECM agents natively.

## Installation

```bash
npx eric-cartman-method install
```

This generates commands in `.claude/commands/ecm/` that AI tools discover automatically.

## Invoking Agents

### Method 1: Workflow Commands

Just say the workflow code:

- **"SP"** - Shape Problem with Maya
- **"WP"** - Write Pitch with Parker
- **"BB"** - Create Breadboard with Wyatt
- **"CP"** - Cycle Planning with Cameron
- **"DS"** - Dev Scope with Alex

### Method 2: Direct Agent Invocation

Ask the AI to load an agent:

```
Load @_ecm/ecm/agents/shaper.agent.yaml and embody Maya
```

The AI will:
1. Read the agent file
2. Adopt the agent's persona
3. Follow the agent's menu and workflows

### Method 3: IDE Command Palette

In Claude Code or Cursor:

1. Open command palette
2. Search for "ecm" or the agent name
3. Select the command

## Available Commands

### Agents

| Command | Agent | Description |
|---------|-------|-------------|
| ecm-ecm-maya | Maya | Problem Shaper |
| ecm-ecm-parker | Parker | Pitch Writer |
| ecm-ecm-wyatt | Wyatt | Technical Shaper |
| ecm-ecm-cameron | Cameron | Cycle Lead |
| ecm-ecm-alex | Alex | Builder |
| ecm-ecm-quinn | Quinn | Quick Flow |

### Workflows

| Command | Code | Description |
|---------|------|-------------|
| ecm-sp | SP | Shape Problem |
| ecm-ss | SS | Shape Solution |
| ecm-bb | BB | Breadboard |
| ecm-dr | DR | De-Risk |
| ecm-wp | WP | Write Pitch |
| ecm-bt | BT | Betting Table |
| ecm-as | AS | Appetite Setting |
| ecm-cp | CP | Cycle Planning |
| ecm-cs | CS | Create Scope |
| ecm-ds | DS | Dev Scope |
| ecm-uh | UH | Update Hill |
| ecm-cr | CR | Code Review |
| ecm-cb | CB | Circuit Breaker |
| ecm-bg | BG | Bug Bash |
| ecm-td | TD | Tech Debt |
| ecm-ex | EX | Exploration |
| ecm-qs | QS | Quick Spec |
| ecm-qd | QD | Quick Dev |

## Agent Personas

Each agent has a distinct personality:

### Maya (Shaper)
- **Role:** Problem Shaper + Research Specialist
- **Style:** Curious, probing, asks "why" repeatedly
- **Use for:** Defining problems, researching context

### Parker (Pitcher)
- **Role:** Pitch Writer + Appetite Setter
- **Style:** Clear, decisive, speaks in terms of appetite
- **Use for:** Writing pitches, running betting table

### Wyatt (Technical Shaper)
- **Role:** Technical Shaper + De-risking Specialist
- **Style:** Technical but accessible, draws boxes and arrows
- **Use for:** Breadboards, de-risking, technical analysis

### Cameron (Cycle Lead)
- **Role:** Cycle Lead + Building Coordinator
- **Style:** Pragmatic, shipping-focused
- **Use for:** Cycle planning, hill charts, circuit breaker

### Alex (Builder)
- **Role:** Builder + Implementation Specialist
- **Style:** Practical, progress-oriented
- **Use for:** Implementing scopes, code review

### Quinn (Quick Flow)
- **Role:** Quick Flow Specialist
- **Style:** Fast and focused
- **Use for:** Small work that doesn't need full shaping

## Example Session

```
User: SP

AI (as Maya): Welcome! I'm Maya, the Problem Shaper. Let's find
the real problem before proposing solutions.

Tell me about the raw idea or request you've received. This could be:
- A feature request from a user
- A complaint or pain point
- A business opportunity
- A technical improvement idea

What are you working on?

User: Users say they can't find anything in our app.

AI (as Maya): Interesting. Let me dig deeper to understand the
real problem...

[Maya proceeds with the Shape Problem workflow]
```

## Tips for AI Tool Usage

1. **Be direct** - Just say the command code (SP, WP, etc.)
2. **Let agents guide** - They know the workflow steps
3. **Reference files** - Use `@_ecm/` paths to point to specific files
4. **Stay in flow** - Agents will prompt you for what's needed

## Troubleshooting

### Commands Not Appearing

1. Ensure ECM is installed (`_ecm/` directory exists)
2. Check `.claude/commands/ecm/` was generated
3. Restart your AI tool to refresh commands

### Agent Not Loading

If the AI doesn't seem to embody the agent:

```
Please load @_ecm/ecm/agents/shaper.agent.yaml and fully
embody Maya's persona as described in the file.
```

### Wrong Workflow

If you need a specific workflow:

```
Run the Write Pitch workflow (@_ecm/ecm/workflows/1-shaping/write-pitch/)
```

## Self-Discovery

AI assistants can explore ECM:

```
Read the _ecm/ directory and tell me what agents and workflows are available.
```

The AI will discover all agents, workflows, and their relationships.
