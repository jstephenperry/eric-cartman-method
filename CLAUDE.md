# ECM - Eric Cartman Method

This project implements the Shape Up methodology with AI agents. When ECM is installed in a project, you can invoke agents and workflows natively.

## Quick Reference

When working in a project with ECM installed (`_ecm/` directory present):

### Invoke an Agent

To work with an ECM agent, load their definition and embody their persona:

```
Load @_ecm/ecm/agents/shaper.agent.yaml and embody Maya the Shaper
```

### Available Agents

| Agent | Trigger | Load Command |
|-------|---------|--------------|
| Maya (Shaper) | SP, shape-problem | `@_ecm/ecm/agents/shaper.agent.yaml` |
| Parker (Pitcher) | WP, write-pitch | `@_ecm/ecm/agents/pitcher.agent.yaml` |
| Wyatt (Technical Shaper) | BB, breadboard | `@_ecm/ecm/agents/technical-shaper.agent.yaml` |
| Cameron (Cycle Lead) | CP, cycle-planning | `@_ecm/ecm/agents/cycle-lead.agent.yaml` |
| Alex (Builder) | DS, dev-scope | `@_ecm/ecm/agents/builder.agent.yaml` |
| Quinn (Quick Flow) | QS, quick-spec | `@_ecm/ecm/agents/quick-flow.agent.yaml` |

### Workflow Shortcuts

| Code | Workflow | Agent |
|------|----------|-------|
| SP | Shape Problem | Maya |
| SS | Shape Solution | Maya |
| BB | Breadboard | Wyatt |
| DR | De-Risk | Wyatt |
| WP | Write Pitch | Parker |
| BT | Betting Table | Parker |
| AS | Appetite Setting | Parker |
| CP | Cycle Planning | Cameron |
| CS | Create Scope | Cameron |
| DS | Dev Scope | Alex |
| UH | Update Hill | Cameron |
| CR | Code Review | Alex |
| CB | Circuit Breaker | Cameron |
| BG | Bug Bash | Alex |
| TD | Tech Debt | Alex |
| EX | Exploration | Maya |
| QS | Quick Spec | Quinn |
| QD | Quick Dev | Quinn |

## Shape Up Phases

1. **Shaping** (Pre-cycle) - Shape problems and solutions
2. **Betting** (Cycle start) - Make strategic commitments
3. **Building** (6wk or 2wk) - Execute with scopes and hill charts
4. **Cool-down** (2wk) - Bugs, tech debt, exploration

## Key Principles

- **Fixed time, variable scope** - Commit to time, cut scope to ship
- **Appetite, not estimates** - Set time budgets, not completion guesses
- **Circuit breaker** - Ship or kill at cycle end, no extensions
- **Hill charts** - Track uncertainty (0-50 uphill, 50-100 downhill)
- **No backlog** - Important ideas resurface naturally

## Project Structure

When ECM is installed:

```
project/
├── _ecm/                    # ECM agents and workflows
│   ├── core/               # Core framework
│   │   └── agents/
│   │       └── cartman-master.agent.yaml
│   └── ecm/                # ECM module
│       ├── agents/         # Shape Up agents
│       ├── workflows/      # Phase-based workflows
│       └── config.yaml     # Project configuration
├── _ecm-output/            # Generated artifacts
│   ├── shaping/           # Pitches, problems, etc.
│   └── building/          # Cycles, scopes, etc.
└── .claude/
    └── commands/ecm/      # Auto-generated commands
```

## For AI Assistants

When a user asks about ECM or invokes an ECM workflow:

1. Check if `_ecm/` exists in the project
2. Load the relevant agent file
3. Embody the agent's persona
4. Execute the workflow following the agent's menu

Example activation:
```
<agent-activation>
1. LOAD @_ecm/ecm/agents/shaper.agent.yaml
2. READ the entire agent file
3. Embody Maya's persona and communication style
4. Follow the menu system and critical actions
5. Stay in character throughout the session
</agent-activation>
```
