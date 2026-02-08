# Eric Cartman Method - Project Status

**Last Updated:** 2026-02-07
**Version:** 1.0.0-alpha.1

---

## Overview

The Eric Cartman Method (ECM) is an AI-driven implementation of Basecamp's Shape Up methodology. It provides structured workflows and agent personas to guide teams through fixed-time, variable-scope development cycles.

---

## Implementation Status

### Core Infrastructure - COMPLETE

| Component | Status | Location |
|-----------|--------|----------|
| Package configuration | Done | `package.json`, `.nvmrc`, configs |
| Core module | Done | `src/core/` |
| ECM module | Done | `src/ecm/` |
| CLI tools | Done | `tools/cli/` |
| Documentation | Done | `docs/` |
| Tests | Done | `test/` |
| AI tool integration | Done | `CLAUDE.md`, command generators |

### Agents - COMPLETE

| Agent | Name | File | Status |
|-------|------|------|--------|
| Master Orchestrator | Cartman | `src/core/agents/cartman-master.agent.yaml` | Done |
| Problem Shaper | Maya | `src/ecm/agents/shaper.agent.yaml` | Done |
| Pitch Writer | Parker | `src/ecm/agents/pitcher.agent.yaml` | Done |
| Technical Shaper | Wyatt | `src/ecm/agents/technical-shaper.agent.yaml` | Done |
| Cycle Lead | Cameron | `src/ecm/agents/cycle-lead.agent.yaml` | Done |
| Builder | Alex | `src/ecm/agents/builder.agent.yaml` | Done |
| Quick Flow | Quinn | `src/ecm/agents/quick-flow.agent.yaml` | Done |

### Workflows by Phase - COMPLETE

#### Phase 1: Shaping
- [x] Shape Problem (SP)
- [x] Shape Solution (SS)
- [x] Breadboard (BB)
- [x] De-Risk (DR)
- [x] Write Pitch (WP)

#### Phase 2: Betting
- [x] Betting Table (BT)
- [x] Appetite Setting (AS)

#### Phase 3: Building
- [x] Cycle Planning (CP)
- [x] Create Scope (CS)
- [x] Dev Scope (DS)
- [x] Update Hill (UH)
- [x] Code Review (CR)
- [x] Circuit Breaker (CB)

#### Phase 4: Cool-down
- [x] Bug Bash (BG)
- [x] Tech Debt (TD)
- [x] Exploration (EX)

#### Quick Flow
- [x] Quick Spec (QS)
- [x] Quick Dev (QD)

### Subagent Spawning - COMPLETE

| Command | Agent | Purpose |
|---------|-------|---------|
| SA | Cartman | Spawn any agent type |
| SB | Cameron | Spawn builder for parallel scopes |
| SI | Wyatt | Spawn investigator for parallel de-risking |
| SR | Alex | Spawn reviewer for parallel code review |
| LS | All | List active subagents |

Infrastructure:
- [x] `src/core/workflows/spawn-agent/workflow.yaml`
- [x] `src/core/workflows/spawn-agent/instructions.md`
- [x] `src/core/data/subagent-task-template.yaml`
- [x] `src/core/data/subagent-result-template.yaml`

### CLI Tools - COMPLETE

- [x] `tools/cli/ecm-cli.js` - Main entry point
- [x] `tools/cli/commands/install.js` - Installation with .claude/commands generation
- [x] `tools/cli/commands/status.js` - Status display
- [x] `tools/cli/installers/lib/ide/agent-command-generator.js`
- [x] `tools/cli/installers/lib/ide/workflow-command-generator.js`
- [x] `tools/schema/agent.js` - Zod schema validation

### Documentation - COMPLETE

- [x] `docs/index.md` - Documentation index
- [x] `docs/tutorials/getting-started.md`
- [x] `docs/tutorials/using-with-ai-tools.md`
- [x] `docs/how-to/spawn-subagents.md`
- [x] `docs/explanation/` - Shape Up philosophy docs
- [x] `docs/reference/agents.md`
- [x] `docs/reference/workflows.md`
- [x] `docs/reference/templates.md`

---

## Directory Structure

```
eric-cartman-method/
├── README.md
├── CHANGELOG.md
├── CONTRIBUTING.md
├── CLAUDE.md                      # AI tool discovery
├── LICENSE
├── package.json
├── .nvmrc
├── .gitignore
├── prettier.config.mjs
├── eslint.config.mjs
│
├── src/
│   ├── core/
│   │   ├── module.yaml
│   │   ├── module-help.csv
│   │   ├── agents/
│   │   │   └── cartman-master.agent.yaml
│   │   ├── workflows/
│   │   │   ├── party-mode/
│   │   │   └── spawn-agent/
│   │   ├── data/
│   │   │   ├── subagent-task-template.yaml
│   │   │   └── subagent-result-template.yaml
│   │   └── tasks/
│   │       └── workflow.xml
│   │
│   └── ecm/
│       ├── module.yaml
│       ├── module-help.csv
│       ├── agents/
│       │   ├── shaper.agent.yaml
│       │   ├── pitcher.agent.yaml
│       │   ├── technical-shaper.agent.yaml
│       │   ├── cycle-lead.agent.yaml
│       │   ├── builder.agent.yaml
│       │   └── quick-flow.agent.yaml
│       ├── workflows/
│       │   ├── 1-shaping/
│       │   ├── 2-betting/
│       │   ├── 3-building/
│       │   ├── 4-cooldown/
│       │   └── quick-flow/
│       ├── teams/
│       └── data/
│
├── tools/
│   ├── cli/
│   │   ├── ecm-cli.js
│   │   ├── commands/
│   │   └── installers/
│   ├── schema/
│   └── validate-agent-schema.js
│
├── docs/
│   ├── index.md
│   ├── tutorials/
│   ├── how-to/
│   ├── explanation/
│   └── reference/
│
└── test/
    ├── test-agent-schema.js
    └── fixtures/
```

---

## Installation

### For Users (Published Package)
```bash
npx eric-cartman-method install
```

### For Local Development
```bash
cd ~/Development/eric-cartman-method
npm link
cd /path/to/your/project
ecm install
```

### Direct Node Execution
```bash
node ~/Development/eric-cartman-method/tools/cli/ecm-cli.js install
```

---

## Usage

After installation, use ECM through AI coding assistants (Claude Code, Cursor, etc.):

| Command | Action |
|---------|--------|
| SP | Shape a problem |
| WP | Write a pitch |
| BT | Run betting table |
| CP | Start a cycle |
| DS | Develop a scope |
| CB | Circuit breaker decision |
| SA/SB/SI/SR | Spawn subagents |
| LS | List subagents |

---

## Key Files Modified in Latest Session

1. `src/ecm/agents/technical-shaper.agent.yaml` - Added SI, LS commands
2. `src/ecm/agents/builder.agent.yaml` - Added SR, LS commands
3. `src/core/module-help.csv` - Added SA, LS workflows
4. `src/ecm/module-help.csv` - Added SB, SI, SR workflows
5. `docs/how-to/spawn-subagents.md` - New documentation
6. `docs/index.md` - Updated with spawn commands
7. `docs/reference/workflows.md` - Added subagent section

---

## Next Steps (Optional Enhancements)

- [ ] Add party-mode multi-agent collaboration workflow
- [ ] Create example project using ECM
- [ ] Add visual hill chart rendering
- [ ] Implement subagent registry viewer
- [ ] Add cycle metrics and reporting
- [ ] Create integration tests for workflows

---

## Shape Up Concepts Implemented

| Concept | Implementation |
|---------|----------------|
| Fixed time, variable scope | Cycle planning with circuit breaker |
| Shaping | Shape problem/solution workflows |
| Appetite | Big Batch (6wk) / Small Batch (2wk) |
| Betting Table | Strategic commitment workflow |
| Scopes | Discovered during building, tracked via create-scope |
| Hill Charts | Update-hill workflow, 0-100 positions |
| Circuit Breaker | Ship or kill decision at cycle end |
| Cool-down | Bug bash, tech debt, exploration workflows |
| No Backlog | Important ideas resurface naturally |

---

## References

- [Shape Up Book](https://basecamp.com/shapeup) by Ryan Singer
- [BMAD-METHOD](https://github.com/bmad-method) - Reference implementation pattern
