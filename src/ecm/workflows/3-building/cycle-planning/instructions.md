# Cycle Planning Workflow

## Overview

Cycle planning initializes a building cycle with:
- The bet pitch to work on
- Cycle dates and circuit breaker deadline
- Initial cycle status tracking

**Important:** We do NOT pre-plan scopes. Scopes are discovered during building.

## Step 1: Load the Bet Pitch

Welcome {{user_name}}! Let's start a new cycle.

**Which pitch are we starting?**
Load bet pitches from: `{shaping_artifacts}/pitches/pitch-*.md`
Filter by: Status = "Bet for {{cycle_id}}"

### Selected Pitch

- **Title:** {{pitch_title}}
- **Appetite:** {{appetite}}
- **Cycle Type:** {{cycle_type}} (Small Batch: 2 weeks / Big Batch: 6 weeks)

## Step 2: Set Cycle Dates

### For Big Batch (6 weeks):

- **Start Date:** {{start_date}}
- **End Date:** {{start_date + 6 weeks}}
- **Circuit Breaker:** {{end_date}} (no extensions)

### For Small Batch (2 weeks):

- **Start Date:** {{start_date}}
- **End Date:** {{start_date + 2 weeks}}
- **Circuit Breaker:** {{end_date}} (no extensions)

## Step 3: Assign Team

**Who is working on this cycle?**

| Role | Person | Availability |
|------|--------|--------------|
| Cycle Lead | {{cycle_lead}} | {{availability_1}} |
| Builder | {{builder_1}} | {{availability_2}} |
| Builder | {{builder_2}} | {{availability_3}} |

## Step 4: Create Cycle Status File

Create: `{building_artifacts}/cycles/cycle-{{cycle_id}}/cycle-status.yaml`

```yaml
cycle_id: {{cycle_id}}
cycle_type: {{cycle_type}}
start_date: {{start_date}}
end_date: {{end_date}}
circuit_breaker_date: {{end_date}}

pitch:
  id: {{pitch_id}}
  title: {{pitch_title}}
  appetite: {{appetite}}
  pitch_file: {{pitch_file_path}}

team:
  cycle_lead: {{cycle_lead}}
  builders:
    - {{builder_1}}
    - {{builder_2}}

status: in_progress

scopes: {}
# Scopes are discovered during building, not pre-planned
# Use ecm-create-scope to add discovered scopes

hill_chart:
  last_updated: {{date}}
  scopes: {}

circuit_breaker:
  decision: null  # ship | kill
  decided_on: null
  notes: null

history:
  - date: {{date}}
    event: cycle_started
    notes: "Cycle initialized with pitch: {{pitch_title}}"
```

## Step 5: Cycle Kickoff

### Kickoff Agenda

1. **Review the pitch** - Ensure team understands the bet
2. **Clarify boundaries** - Reinforce no-gos
3. **Discuss approach** - High-level starting direction
4. **First scope discovery** - What's the first piece of work?

### Do NOT:

- Create a detailed task list
- Assign all scopes upfront
- Estimate individual items
- Promise specific features

Scopes emerge as you build. The team discovers them.

## Step 6: Document Kickoff

Add kickoff notes to cycle status:

```yaml
kickoff:
  date: {{date}}
  attendees: {{attendees}}
  notes: |
    {{kickoff_notes}}
  first_direction: {{first_direction}}
```

## Cycle Principles

1. **No pre-planning** - Don't map out all the work upfront
2. **Discover scopes** - Work reveals itself as you build
3. **Track on hill** - Update positions as certainty changes
4. **Fixed deadline** - The circuit breaker is immutable
5. **Variable scope** - Cut to ship, don't extend to finish

## Completion

Cycle is initialized. Next steps:

1. **Start building** - Begin with first scope direction
2. **Create Scope (CS)** - Document scopes as you discover them
3. **Update Hill (UH)** - Track progress on hill chart
4. **Check in daily** - Monitor for stuck scopes

The circuit breaker is set. Ship or kill on {{end_date}}.
