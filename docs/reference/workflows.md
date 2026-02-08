# Workflow Reference

This document describes all ECM workflows organized by phase.

## Workflow Phases

| Phase | Description |
|-------|-------------|
| 1-shaping | Pre-cycle problem and solution shaping |
| 2-betting | Strategic commitment decisions |
| 3-building | Cycle execution with scopes |
| 4-cooldown | Between-cycle maintenance |
| quick-flow | Fast-track small work |

---

## Phase 1: Shaping

### Shape Problem (SP)

**Code:** SP
**Agent:** Maya (Shaper)
**Required:** No

**Purpose:** Define the problem and job-to-be-done before proposing solutions.

**Inputs:**
- Raw idea or request

**Outputs:**
- Problem statement document

**Location:** `_ecm-output/shaping/problems/`

---

### Shape Solution (SS)

**Code:** SS
**Agent:** Maya (Shaper)
**Required:** No

**Purpose:** Shape the solution approach for a defined problem.

**Inputs:**
- Problem statement

**Outputs:**
- Solution outline document

**Location:** `_ecm-output/shaping/solutions/`

---

### Breadboard (BB)

**Code:** BB
**Agent:** Wyatt (Technical Shaper)
**Required:** No

**Purpose:** Create technical flow diagram showing affordances and connections.

**Inputs:**
- Shaped solution

**Outputs:**
- Breadboard diagram document

**Location:** `_ecm-output/shaping/breadboards/`

---

### De-Risk (DR)

**Code:** DR
**Agent:** Wyatt (Technical Shaper)
**Required:** No

**Purpose:** Identify and mitigate rabbit holes before betting.

**Inputs:**
- Solution and/or breadboard

**Outputs:**
- Risk assessment document

**Location:** `_ecm-output/shaping/de-risk/`

---

### Write Pitch (WP)

**Code:** WP
**Agent:** Parker (Pitcher)
**Required:** Yes

**Purpose:** Create formal pitch with appetite and boundaries.

**Inputs:**
- Problem statement
- Solution outline
- De-risk assessment

**Outputs:**
- Pitch document

**Location:** `_ecm-output/shaping/pitches/`

---

## Phase 2: Betting

### Betting Table (BT)

**Code:** BT
**Agent:** Parker (Pitcher)
**Required:** Yes

**Purpose:** Make strategic commitment to pitches.

**Inputs:**
- Ready pitches
- Cycle capacity

**Outputs:**
- Betting decisions document

**Location:** `_ecm-output/shaping/betting/`

---

### Appetite Setting (AS)

**Code:** AS
**Agent:** Parker (Pitcher)
**Required:** No

**Purpose:** Determine Small Batch (2wk) or Big Batch (6wk) appetite.

**Inputs:**
- Shaped work

**Outputs:**
- Appetite decision (in pitch)

---

## Phase 3: Building

### Cycle Planning (CP)

**Code:** CP
**Agent:** Cameron (Cycle Lead)
**Required:** Yes

**Purpose:** Initialize cycle with bet pitch.

**Inputs:**
- Bet pitch
- Team assignment

**Outputs:**
- cycle-status.yaml

**Location:** `_ecm-output/building/cycles/cycle-{id}/`

---

### Create Scope (CS)

**Code:** CS
**Agent:** Cameron (Cycle Lead)
**Required:** No

**Purpose:** Document discovered scope during building.

**Inputs:**
- Cycle context
- Discovered work

**Outputs:**
- Scope document

**Location:** `_ecm-output/building/cycles/cycle-{id}/scopes/`

---

### Dev Scope (DS)

**Code:** DS
**Agent:** Alex (Builder)
**Required:** Yes

**Purpose:** Implement scope work.

**Inputs:**
- Scope document

**Outputs:**
- Implementation
- Updated hill position

---

### Update Hill (UH)

**Code:** UH
**Agent:** Cameron (Cycle Lead)
**Required:** No

**Purpose:** Update scope hill positions.

**Inputs:**
- Current scope positions

**Outputs:**
- Updated hill chart
- Updated cycle-status.yaml

---

### Code Review (CR)

**Code:** CR
**Agent:** Alex (Builder)
**Required:** No

**Purpose:** Review implementation work.

**Inputs:**
- Scope implementation

**Outputs:**
- Review feedback

---

### Circuit Breaker (CB)

**Code:** CB
**Agent:** Cameron (Cycle Lead)
**Required:** Yes

**Purpose:** End of cycle ship or kill decision.

**Inputs:**
- Cycle status
- Hill chart positions

**Outputs:**
- Ship/kill decision
- Circuit breaker document

**Location:** `_ecm-output/building/cycles/cycle-{id}/circuit-breaker.md`

---

## Phase 4: Cool-down

### Bug Bash (BG)

**Code:** BG
**Agent:** Alex (Builder)
**Required:** No

**Purpose:** Focused bug fixing during cool-down.

**Inputs:**
- Bug list

**Outputs:**
- Bug bash document

**Location:** `_ecm-output/building/cooldown/`

---

### Tech Debt (TD)

**Code:** TD
**Agent:** Alex (Builder)
**Required:** No

**Purpose:** Address technical debt.

**Inputs:**
- Tech debt items

**Outputs:**
- Tech debt document

**Location:** `_ecm-output/building/cooldown/`

---

### Exploration (EX)

**Code:** EX
**Agent:** Maya (Shaper)
**Required:** No

**Purpose:** Blue-sky prototyping for future pitches.

**Inputs:**
- Exploration ideas

**Outputs:**
- Exploration notes

**Location:** `_ecm-output/shaping/exploration/`

---

## Quick Flow

### Quick Spec (QS)

**Code:** QS
**Agent:** Quinn (Quick Flow)
**Required:** No

**Purpose:** Fast-track specification for small work.

**Inputs:**
- Small, well-understood work

**Outputs:**
- Quick spec document

**Location:** `_ecm-output/shaping/quick-specs/`

---

### Quick Dev (QD)

**Code:** QD
**Agent:** Quinn (Quick Flow)
**Required:** No

**Purpose:** Fast-track development for small work.

**Inputs:**
- Quick spec

**Outputs:**
- Implementation

---

## Subagent Spawning

### Spawn Agent (SA)

**Code:** SA
**Agent:** Cartman (Master Orchestrator)
**Required:** No

**Purpose:** Fork any agent type for parallel work.

**Inputs:**
- Agent type
- Objective
- Context and constraints

**Outputs:**
- Subagent task document
- Registry entry

**Location:** `_ecm-output/building/subagents/`

---

### Spawn Builder (SB)

**Code:** SB
**Agent:** Cameron (Cycle Lead)
**Required:** No

**Purpose:** Fork builder subagents for parallel scope implementation.

**Inputs:**
- Scope to work on
- Context

**Outputs:**
- Subagent task
- Implementation (from subagent)

**Location:** `_ecm-output/building/subagents/`

---

### Spawn Investigator (SI)

**Code:** SI
**Agent:** Wyatt (Technical Shaper)
**Required:** No

**Purpose:** Fork investigator subagents for parallel de-risking.

**Inputs:**
- Technical question
- Context

**Outputs:**
- Investigation report

**Location:** `_ecm-output/building/subagents/`

---

### Spawn Reviewer (SR)

**Code:** SR
**Agent:** Alex (Builder)
**Required:** No

**Purpose:** Fork reviewer subagents for parallel code review.

**Inputs:**
- Code to review
- Context

**Outputs:**
- Review feedback

**Location:** `_ecm-output/building/subagents/`

---

### List Subagents (LS)

**Code:** LS
**Agent:** All agents
**Required:** No

**Purpose:** Show active subagents and their status.

**Outputs:**
- Registry display

---

## Subagent Registry

Active subagents are tracked in:
- `_ecm-output/building/subagents/registry.yaml`

Fields:
- task_id, agent, status, spawned_by
- spawned_at, objective, result

---

## Workflow Files

Each workflow is defined in:
- `_ecm/ecm/workflows/{phase}/{workflow-name}/workflow.yaml`
- `_ecm/ecm/workflows/{phase}/{workflow-name}/instructions.md`

---

## Workflow Registry

All workflows are indexed in:
- `_ecm/ecm/module-help.csv`

Columns:
- module, phase, name, code, sequence
- workflow-file, command, required, agent
- description, output-location, outputs
