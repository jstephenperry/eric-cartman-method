# Agent Reference

This document describes all ECM agents and their capabilities.

## Overview

ECM includes six specialized agents:

| Agent | Name | Role | Icon |
|-------|------|------|------|
| Shaper | Maya | Problem Shaper + Research Specialist | \U0001F50D |
| Pitcher | Parker | Pitch Writer + Appetite Setter | \U0001F3AF |
| Technical Shaper | Wyatt | Technical Shaper + De-risking Specialist | \U0001F9EA |
| Cycle Lead | Cameron | Cycle Lead + Building Coordinator | \U0001F6A6 |
| Builder | Alex | Builder + Implementation Specialist | \U0001F528 |
| Quick Flow | Quinn | Quick Flow Specialist | \u26A1 |

---

## Maya (Shaper)

**Role:** Problem Shaper + Research Specialist

**Philosophy:** "Find the real problem before proposing solutions."

### Capabilities

- Define problems from raw ideas
- Identify jobs-to-be-done
- Research context and constraints
- Set problem boundaries

### Workflows

| Code | Workflow | Description |
|------|----------|-------------|
| SP | shape-problem | Define the problem and job to be done |
| SS | shape-solution | Shape the solution approach |
| RE | research | Investigate context and constraints |
| EX | exploration | Blue-sky prototyping |

### When to Use

- You have a raw idea that needs clarification
- You need to understand the real problem
- You want to research before proposing solutions

---

## Parker (Pitcher)

**Role:** Pitch Writer + Appetite Setter

**Philosophy:** "Shaped work has clear boundaries and fixed time budgets."

### Capabilities

- Write formal pitches
- Set appetites (not estimates)
- Define no-gos and boundaries
- Run betting table sessions

### Workflows

| Code | Workflow | Description |
|------|----------|-------------|
| WP | write-pitch | Create formal pitch |
| AS | appetite-setting | Determine Small or Big Batch |
| BT | betting-table | Make betting decisions |
| RP | review-pitch | Evaluate pitch readiness |

### When to Use

- You have shaped work ready for pitching
- You need to set or justify an appetite
- You're running a betting table session

---

## Wyatt (Technical Shaper)

**Role:** Technical Shaper + De-risking Specialist

**Philosophy:** "Find the rabbit holes before you fall in."

### Capabilities

- Create breadboard diagrams
- Identify technical risks
- De-risk rabbit holes
- Create fat marker sketches

### Workflows

| Code | Workflow | Description |
|------|----------|-------------|
| BB | breadboard | Create technical flow diagram |
| DR | de-risk | Identify and mitigate risks |
| FM | fat-marker | Create rough visual sketch |
| TA | tech-analysis | Analyze technical feasibility |

### When to Use

- You need to map technical flow
- You want to identify rabbit holes
- You need to de-risk before betting

---

## Cameron (Cycle Lead)

**Role:** Cycle Lead + Building Coordinator

**Philosophy:** "Fixed time, variable scope - we ship what matters most."

### Capabilities

- Initialize building cycles
- Create and manage scopes
- Track hill chart progress
- Run circuit breaker decisions

### Workflows

| Code | Workflow | Description |
|------|----------|-------------|
| CP | cycle-planning | Initialize cycle with pitch |
| CS | create-scope | Document discovered scope |
| UH | update-hill | Update hill chart positions |
| CB | circuit-breaker | Ship or kill decision |
| CD | cool-down | Manage between-cycle period |

### When to Use

- You're starting a new building cycle
- You've discovered a new scope
- You need to update progress
- It's circuit breaker time

---

## Alex (Builder)

**Role:** Builder + Implementation Specialist

**Philosophy:** "Discover scopes as you build, track progress on the hill."

### Capabilities

- Implement scope work
- Update hill positions
- Identify nice-to-haves for cutting
- Review code

### Workflows

| Code | Workflow | Description |
|------|----------|-------------|
| DS | dev-scope | Implement scope work |
| CR | code-review | Review implementation |
| BG | bug-bash | Focused bug fixing |
| TD | tech-debt | Address technical debt |
| IM | implement | Execute implementation task |

### When to Use

- You're implementing scope work
- You need to review code
- You're doing bug bash or tech debt work

---

## Quinn (Quick Flow)

**Role:** Quick Flow Specialist

**Philosophy:** "Small work doesn't need full ceremony."

### Capabilities

- Fast-track small specifications
- Quick development for bounded work
- Rapid bug fixes

### Workflows

| Code | Workflow | Description |
|------|----------|-------------|
| QS | quick-spec | Fast-track specification |
| QD | quick-dev | Fast-track development |
| QF | quick-fix | Rapid bug fix |

### When to Use

- Work is small and well-understood
- No shaping needed
- Cool-down or spare capacity work

---

## Agent Collaboration

### Party Mode

Multiple agents can collaborate:

- **Shaping Session:** Maya + Wyatt
- **Pitch Review:** Parker + Cameron
- **Technical De-risking:** Wyatt + Alex
- **Circuit Breaker Review:** Cameron + Alex

### Handoffs

| From | To | Trigger |
|------|-----|---------|
| Maya (problem) | Maya (solution) | Problem defined |
| Maya (solution) | Wyatt | Solution shaped |
| Wyatt | Parker | De-risking done |
| Parker | Cameron | Pitch bet |
| Cameron | Alex | Cycle started |
| Alex | Cameron | Scope updated |

---

## Configuration

Agents are configured in:
- `_ecm/ecm/agents/[agent-name].agent.yaml`

Key configuration:
- **metadata:** id, name, title, icon, module
- **persona:** role, identity, communication_style, principles
- **critical_actions:** guardrails and constraints
- **menu:** available workflows and actions
