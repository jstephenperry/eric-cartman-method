# Eric Cartman Method (ECM)

**AI-Driven Shape Up Methodology for Software Development**

The Eric Cartman Method implements Basecamp's Shape Up methodology with AI agents, enabling teams to ship meaningful work in fixed time cycles with variable scope.

## Core Philosophy

> "Fixed time, variable scope" - We commit to time, not to a list of features.

ECM embraces the Shape Up principles:

- **Shape before building** - Make work concrete before betting on it
- **Appetite, not estimates** - Set time budgets, not completion guesses
- **Bet, don't backlog** - Make strategic commitments, not endless lists
- **Circuit breakers** - Ship or kill at cycle end, no extensions
- **Cool-down periods** - Breathing room between cycles

## Shape Up Phases

### 1. Shaping (Pre-cycle)

Shape raw ideas into concrete, bounded pitches:

| Workflow | Description |
|----------|-------------|
| Shape Problem | Define the problem and job-to-be-done |
| Breadboard | Technical flow diagrams (boxes and arrows) |
| De-Risk | Identify and mitigate rabbit holes |
| Write Pitch | Create formal pitch with appetite and boundaries |

### 2. Betting (Cycle Start)

Strategic commitment to shaped work:

| Workflow | Description |
|----------|-------------|
| Betting Table | Review pitches and make bet/no-bet decisions |
| Appetite Setting | Determine Small Batch (2wk) or Big Batch (6wk) |

### 3. Building (6-week cycle or 2-week small batch)

Execute with discovered scopes and hill charts:

| Workflow | Description |
|----------|-------------|
| Cycle Planning | Initialize cycle with bet pitch |
| Create Scope | Document discovered work units |
| Dev Scope | Implement scope work |
| Update Hill Chart | Track progress (0-50 uphill, 50-100 downhill) |
| Circuit Breaker | End-of-cycle ship or kill decision |

### 4. Cool-down (2 weeks between cycles)

Breathing room for maintenance and exploration:

| Workflow | Description |
|----------|-------------|
| Bug Bash | Focused bug fixing |
| Tech Debt | Address technical debt |
| Exploration | Blue-sky prototyping for future pitches |

## ECM Agents

| Agent | Name | Role |
|-------|------|------|
| Shaper | Maya | Problem Shaper + Research Specialist |
| Pitcher | Parker | Pitch Writer + Appetite Setter |
| Technical Shaper | Wyatt | Technical Shaper + De-risking Specialist |
| Cycle Lead | Cameron | Cycle Lead + Building Coordinator |
| Builder | Alex | Builder + Implementation Specialist |

## Installation

### From npm (once published)

```bash
npx eric-cartman-method install
```

### From local development

If testing from a local clone:

```bash
# Option 1: npm link (recommended)
cd /path/to/eric-cartman-method
npm link

# Then in your project:
cd /path/to/your/project
ecm install
```

```bash
# Option 2: Run directly
node /path/to/eric-cartman-method/tools/cli/ecm-cli.js install
```

### What it creates
- `_ecm/` - Agent definitions and workflows
- `_ecm-output/` - Where artifacts are saved
- `.claude/commands/ecm/` - Commands for AI tools

## Usage (via AI Tools)

ECM is designed for native use with AI coding assistants like **Claude Code**, **Cursor**, and **Codex CLI**.

After installation, open your project in an AI tool and invoke workflows:

| Say This | What Happens |
|----------|--------------|
| "SP" | Maya helps shape a problem |
| "WP" | Parker writes a pitch |
| "BT" | Parker runs the betting table |
| "CP" | Cameron plans a cycle |
| "DS" | Alex develops a scope |
| "CB" | Cameron runs the circuit breaker |

Or invoke agents directly:

```
Load @_ecm/ecm/agents/shaper.agent.yaml and embody Maya
```

Commands are auto-discovered by Claude Code and appear in the command palette.

**Note:** ECM is not a CLI tool you run repeatedly. You install it once, then interact through your AI coding assistant.

## Key Concepts

### Appetite vs Estimates

Appetite is how much time we want to spend, not how long we think it will take.

- **Small Batch**: 2 weeks - focused improvements
- **Big Batch**: 6 weeks - significant features

### Hill Charts

Progress tracking that shows both completion AND certainty:

```
     Uphill (Figuring out)    |    Downhill (Executing)
                              |
  0 -------- 25 -------- 50 --|-- 75 -------- 100
                              |
  [Uncertain]                 |              [Certain]
```

- **0-50 (Uphill)**: Still figuring things out, unknowns remain
- **50 (Peak)**: All unknowns resolved, clear path forward
- **50-100 (Downhill)**: Executing on known work, no surprises

### Circuit Breaker

At cycle end, teams must decide:

- **Ship**: Deploy what's done (variable scope achieved)
- **Kill**: Cancel the bet entirely (no extensions)

No extensions. No scope creep. Fixed time, variable scope.

### No Backlog

Important ideas will resurface. We don't maintain an endless backlog. If something matters, it will come up again during shaping.

## Project Structure

```
_ecm/
├── core/                    # Core framework
│   ├── module.yaml
│   └── agents/
│       └── cartman-master.agent.yaml
│
└── ecm/                     # Eric Cartman Method module
    ├── module.yaml
    ├── agents/              # Shape Up agents
    ├── workflows/           # Phase-based workflows
    │   ├── 1-shaping/
    │   ├── 2-betting/
    │   ├── 3-building/
    │   └── 4-cooldown/
    └── data/                # Templates
```

## Documentation

- [Getting Started](docs/tutorials/getting-started.md)
- [Shape Up Philosophy](docs/explanation/shape-up-philosophy.md)
- [Agent Reference](docs/reference/agents.md)
- [Workflow Reference](docs/reference/workflows.md)

## Credits

Based on [Shape Up](https://basecamp.com/shapeup) by Ryan Singer at Basecamp.

## License

MIT
