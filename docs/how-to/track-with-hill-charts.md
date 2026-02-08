# How to Track with Hill Charts

This guide walks you through using hill charts to track progress during building cycles.

## Prerequisites

- Active cycle with scopes
- Access to cycle-status.yaml

## What is a Hill Chart?

A hill chart shows progress in terms of **certainty**, not completion:

```
        ╱╲
       ╱  ╲
      ╱    ╲
     ╱      ╲
    ╱        ╲
   ╱          ╲
  ╱            ╲
 ╱              ╲
╱                ╲

0   25   50   75   100

|--- Uphill ---|--- Downhill ---|
  (Figuring out)   (Executing)
```

## Understanding Positions

### 0-50: Uphill (Figuring Out)

- Exploring approaches
- Making decisions
- Resolving unknowns
- Answering questions

**Position 10:** Just started, many unknowns
**Position 30:** Making progress, some clarity
**Position 50:** All unknowns resolved (peak)

### 50-100: Downhill (Executing)

- Building known things
- Completing tasks
- Wrapping up

**Position 60:** Started executing
**Position 80:** Good progress
**Position 100:** Done

## Setting Up Hill Charts

### Step 1: Create Scopes

As you discover scopes during building:

```bash
# Run Create Scope workflow
CS (Create Scope)
```

Each scope gets:
- Name
- Finishing criteria
- Initial hill position

### Step 2: Set Initial Position

New scopes typically start at:
- **Position 0-10:** Just identified
- **Position 20-30:** If you already understand part of it

## Updating Hill Charts

### When to Update

- Daily (minimum)
- When significant progress happens
- When you discover new unknowns
- When you complete a scope

### How to Update

1. For each active scope, ask:

**If uphill:**
- What did we figure out?
- What unknowns remain?
- Are we approaching the peak?

**If downhill:**
- What got done?
- Any new unknowns? (go back up!)
- What's left?

2. Move position accordingly

3. Record in work log

### Update Commands

```bash
# Run Update Hill workflow
UH (Update Hill)
```

## Reading Hill Charts

### Healthy Progress

Scopes move steadily:

```
Day 1:  X              (position 15)
Day 3:      X          (position 25)
Day 5:          X      (position 40)
Day 7:              X  (position 55)
Day 9:                  X (position 75)
```

### Stuck Scope

No movement for 2+ days:

```
Day 1:    X            (position 20)
Day 3:      X          (position 25)
Day 5:      X          (position 25)
Day 7:    X            (position 20)
```

**Action:** Break down, get help, or cut scope.

### Going Backwards

Moved downhill, then went back up:

```
Day 1:              X  (position 55)
Day 3:                X (position 65)
Day 5:          X      (position 40)  ← went back!
```

**Action:** New unknowns discovered. Address before continuing.

### Premature Downhill

Jumped to downhill without real progress:

**Red flag:** Position 60+ without demonstrated decisions.

**Action:** Validate that unknowns are truly resolved.

## Multiple Scopes

Track each scope separately:

```
Login:        ──X──────────────── (25, uphill)
Profile:      ────────────X────── (65, downhill)
Settings:     ──────────────────X (95, almost done)
```

## Hill Chart Meetings

### Daily Check-in

Quick sync on positions:
- What moved?
- What's stuck?
- Any new scopes?

### Weekly Review

Deeper look:
- Overall cycle health
- Stuck scope intervention
- Scope cutting decisions

## Detecting Problems

### Warning Signs

| Sign | Meaning | Action |
|------|---------|--------|
| No movement (2+ days) | Stuck | Break down or get help |
| Going backwards | New unknowns | Address before continuing |
| All uphill near deadline | Too much uncertainty | Cut scope |
| Premature downhill | False confidence | Validate |

### Questions to Ask

- Is this scope really at 50+?
- What unknowns remain?
- Should we break this down?
- Can we cut this scope?

## Updating cycle-status.yaml

```yaml
hill_chart:
  last_updated: 2026-02-05
  scopes:
    login:
      position: 65
      status: downhill
    profile:
      position: 30
      status: uphill
    settings:
      position: 95
      status: downhill
```

## Scope Work Log

Each scope maintains a log:

```markdown
## Work Log

| Date | Position | Notes |
|------|----------|-------|
| 2026-02-01 | 10 | Scope created |
| 2026-02-03 | 25 | OAuth approach decided |
| 2026-02-05 | 50 | All unknowns resolved |
| 2026-02-07 | 75 | Core functionality done |
```

## Best Practices

### Be Honest

Don't inflate positions. The chart is for seeing reality.

### Go Back When Needed

New unknowns? Go back uphill. It's normal.

### Update Regularly

Stale positions hide problems.

### Address Stuck Scopes

Don't let them linger. Act within 2 days.

### Cut When Necessary

If a scope can't reach 100, consider cutting it.

## Summary

Hill charts:
1. Show certainty, not completion
2. Distinguish figuring out from executing
3. Reveal stuck work early
4. Enable scope cutting decisions

Update daily. Be honest. Act on warnings.
