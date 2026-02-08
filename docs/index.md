# Eric Cartman Method Documentation

Welcome to the Eric Cartman Method (ECM) documentation. ECM is an AI-driven implementation of Basecamp's Shape Up methodology.

## What is Shape Up?

Shape Up is a product development methodology created by Basecamp that emphasizes:

- **Fixed time, variable scope** - Commit to time, not features
- **Shaping before building** - Make work concrete before betting
- **Appetite over estimates** - Set time budgets, not completion guesses
- **Strategic betting** - Commit explicitly, not through backlogs
- **Circuit breakers** - Ship or kill, no extensions

## Documentation Structure

### [Tutorials](tutorials/getting-started.md)
Learn ECM step by step.
- [Getting Started with ECM](tutorials/getting-started.md)
- [Using ECM with AI Tools](tutorials/using-with-ai-tools.md)

### [How-To Guides](how-to/shape-a-problem.md)
Solve specific problems.
- How to Shape a Problem
- How to Write a Pitch
- How to Run a Betting Table
- How to Track with Hill Charts
- [How to Spawn Subagents](how-to/spawn-subagents.md)

### [Explanation](explanation/shape-up-philosophy.md)
Understand concepts and philosophy.
- Shape Up Philosophy
- Shaping vs Planning
- Betting vs Backlog
- Hill Charts Explained
- The Circuit Breaker

### [Reference](reference/agents.md)
Technical reference material.
- Agent Reference
- Workflow Reference
- Templates Reference

## Quick Start

### 1. Install (one-time)

```bash
npx eric-cartman-method install
```

### 2. Use via AI Tools

Open your project in Claude Code, Cursor, or another AI coding assistant. Then:

- Say **"SP"** to shape a problem
- Say **"WP"** to write a pitch
- Say **"CP"** to start a cycle
- Say **"CB"** to run the circuit breaker

ECM agents guide you through each workflow.

## Shape Up Phases

1. **Shaping** (Pre-cycle) - Shape problems and solutions
2. **Betting** (Cycle start) - Make strategic commitments
3. **Building** (6 or 2 weeks) - Execute with scopes and hill charts
4. **Cool-down** (2 weeks) - Bugs, tech debt, exploration

## ECM Agents

| Agent | Name | Role |
|-------|------|------|
| Shaper | Maya | Problem Shaper + Research Specialist |
| Pitcher | Parker | Pitch Writer + Appetite Setter |
| Technical Shaper | Wyatt | Technical Shaper + De-risking Specialist |
| Cycle Lead | Cameron | Cycle Lead + Building Coordinator |
| Builder | Alex | Builder + Implementation Specialist |
| Quick Flow | Quinn | Quick Flow Specialist |

## Key Commands

| Command | Workflow | Description |
|---------|----------|-------------|
| SP | Shape Problem | Define the problem |
| WP | Write Pitch | Create formal pitch |
| BT | Betting Table | Make betting decisions |
| CP | Cycle Planning | Start a cycle |
| DS | Dev Scope | Implement scope |
| CB | Circuit Breaker | Ship or kill decision |
| SA | Spawn Agent | Fork any agent for parallel work |
| SB | Spawn Builder | Fork builder for parallel scopes |
| SI | Spawn Investigator | Fork investigator for parallel de-risking |
| SR | Spawn Reviewer | Fork reviewer for parallel code review |
| LS | List Subagents | Show active subagents and status |
