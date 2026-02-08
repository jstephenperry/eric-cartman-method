# Betting Table Workflow

## Overview

The betting table is where strategic commitments are made. Unlike backlog grooming, the betting table:

- **Reviews shaped pitches** - Not raw ideas
- **Makes bet/no-bet decisions** - Clear yes or no
- **Assigns to specific cycles** - Concrete commitment
- **Has limited capacity** - Can't bet on everything

## What is a Bet?

A bet is a commitment to ship shaped work within a fixed time cycle:

- **Small Batch Bet:** 2-week cycle, focused improvement
- **Big Batch Bet:** 6-week cycle, significant feature

Unlike sprint commitments, bets have:
- No extensions
- Variable scope (cut to ship)
- Circuit breaker at the end

## Step 1: Gather Pitches

Welcome {{user_name}}! Let's review pitches for betting.

Load pitches ready for betting:
- Pitch location: `{shaping_artifacts}/pitches/pitch-*.md`
- Filter by status: "Ready for Betting"

### Available Pitches

| # | Pitch | Appetite | Shaped By | Date |
|---|-------|----------|-----------|------|
| 1 | {{pitch_1}} | {{appetite_1}} | {{author_1}} | {{date_1}} |
| 2 | {{pitch_2}} | {{appetite_2}} | {{author_2}} | {{date_2}} |

## Step 2: Review Cycle Capacity

### Current Cycle

- **Cycle ID:** {{cycle_id}}
- **Type:** Big Batch (6 weeks) / Small Batch (2 weeks)
- **Start Date:** {{start_date}}
- **End Date:** {{end_date}}
- **Current Bets:** {{current_bets}}
- **Remaining Capacity:** {{remaining_capacity}}

## Step 3: Evaluate Each Pitch

For each pitch, consider:

### Pitch Readiness

1. **Is the problem clear?** Do we understand the job-to-be-done?
2. **Is the solution shaped?** Rough, solved, and bounded?
3. **Are rabbit holes addressed?** Risks identified and mitigated?
4. **Is appetite appropriate?** Does the time budget fit the value?
5. **Are no-gos explicit?** Clear boundaries set?

### Strategic Fit

1. **Is this the right time?** Why now vs later?
2. **Does it fit our capacity?** Team availability?
3. **Are dependencies clear?** External blockers?
4. **What's the opportunity cost?** What else could we do?

## Step 4: Make Betting Decisions

For each pitch, decide:

| Pitch | Decision | Reason | Cycle Assignment |
|-------|----------|--------|------------------|
| {{pitch_1}} | **BET** / **NO BET** / **RESHAPE** | {{reason_1}} | {{cycle_1}} |
| {{pitch_2}} | **BET** / **NO BET** / **RESHAPE** | {{reason_2}} | {{cycle_2}} |

### Decision Options

- **BET:** Commit to shipping in the specified cycle
- **NO BET:** Not right now (may resurface later)
- **RESHAPE:** Needs more shaping before betting

## Step 5: Document Betting Decisions

Create output file: `{shaping_artifacts}/betting/betting-table-{{date}}.md`

```markdown
# Betting Table: {{date}}

**Participants:** {{participants}}
**Cycle:** {{cycle_id}} ({{cycle_type}})

## Pitches Reviewed

| Pitch | Appetite | Decision | Reason |
|-------|----------|----------|--------|
{{decisions_table}}

## Bets Made

### Bet 1: {{bet_pitch_1}}
- **Appetite:** {{bet_appetite_1}}
- **Cycle:** {{bet_cycle_1}}
- **Team:** {{bet_team_1}}
- **Notes:** {{bet_notes_1}}

### Bet 2: {{bet_pitch_2}}
...

## Not Bet (May Resurface)

{{not_bet_list}}

## Sent for Reshaping

{{reshape_list}}

## Cycle Summary

- **Total Bets:** {{total_bets}}
- **Cycle Capacity Used:** {{capacity_used}}
- **Remaining Capacity:** {{remaining_capacity}}

## Next Betting Table

**Date:** {{next_betting_date}}
```

## Step 6: Update Pitch Status

For each pitch, update status:
- **BET:** Status → "Bet for {{cycle_id}}"
- **NO BET:** Status → "Not Bet - {{date}}"
- **RESHAPE:** Status → "Needs Reshaping"

## Important Reminders

- **No backlog maintenance** - We don't groom a backlog
- **Important ideas resurface** - If it matters, it will come back
- **Betting is commitment** - Only bet on what you'll actually do
- **Say no explicitly** - "No bet" is a valid decision
- **Respect capacity** - Don't overcommit the cycle

## Completion

Betting is complete. Next steps:

1. **Cycle Planning (CP)** - Initialize the cycle with bet pitches
2. **Communicate** - Share betting decisions with the team
3. **Archive** - Move non-bet pitches appropriately
