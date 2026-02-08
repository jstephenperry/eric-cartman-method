# Hill Charts Explained

Hill charts are Shape Up's progress tracking tool. They show uncertainty, not just completion.

## The Problem with Traditional Progress

### Percentage Complete

"We're 80% done."

Problems:
- The last 20% often takes 80% of the time
- Doesn't distinguish known from unknown work
- Easy to game or misreport
- Hides risks

### Task Lists

"5 of 10 tasks done."

Problems:
- Tasks vary in size
- Unknown tasks appear mid-project
- Completion ≠ readiness to ship
- Linear view of non-linear work

## The Hill Metaphor

Imagine work as climbing a hill:

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

### Uphill (0-50): Figuring Out

Going uphill means:
- Exploring approaches
- Making decisions
- Resolving unknowns
- Discovering what needs to be done

Position reflects certainty, not completion.

### Peak (50): All Unknowns Resolved

At the peak:
- We know what to build
- We know how to build it
- No major questions remain
- Clear path to completion

### Downhill (50-100): Executing

Going downhill means:
- Building known things
- Finishing tasks
- Wrapping up
- No surprises expected

## Reading Hill Charts

### Position 10

Just started. Lots of unknowns. We're exploring.

### Position 30

Making progress. Some decisions made. Significant unknowns remain.

### Position 50

All figured out. We could hand this to anyone and they'd know what to do.

### Position 70

Executing well. Building the known solution.

### Position 90

Almost done. Finishing touches.

### Position 100

Done. Finishing criteria met. Ready to ship.

## The Key Insight

**A scope at 30 uphill is riskier than 30 downhill.**

Uphill 30:
- We've started but don't fully understand
- Surprises likely
- Could stall or reverse

Downhill 30:
- We know exactly what's left
- Work is predictable
- Completion is certain

## Using Hill Charts

### Update Regularly

Move positions every 1-2 days, or when something changes.

### Be Honest

If you discover new unknowns, go back uphill.
The chart isn't for looking good - it's for seeing reality.

### Watch for Stuck Scopes

If a scope doesn't move for 2+ days:
- Break it down
- Get help
- Cut scope
- Escalate

### Multiple Scopes

Track each scope separately:

```
Scope A: ──────X───────────── (25, uphill)
Scope B: ─────────────────X── (80, downhill)
Scope C: ─────────────X────── (65, downhill)
```

## Common Patterns

### Healthy Progress

Scopes move steadily uphill, hit peak, then move downhill.

```
Day 1:  X
Day 3:      X
Day 5:           X
Day 7:                 X
Day 9:                       X
```

### Stuck Uphill

Scope doesn't move past 30-40.

```
Day 1:    X
Day 3:      X
Day 5:      X
Day 7:    X
```

**Action:** This scope has hidden complexity. Break it down or get help.

### Back Up the Hill

Scope goes downhill, then reverses.

```
Day 1:                X
Day 3:                     X
Day 5:           X         (went back!)
Day 7:               X
```

**Action:** New unknowns discovered. Address them before continuing.

### Premature Downhill

Scope jumps to downhill without real progress.

**Symptom:** Moves to 60+ without demonstrable decisions made.
**Problem:** False confidence. Surprises will come.
**Action:** Validate that unknowns are truly resolved.

## Hill Charts and Scopes

Each scope has its own position on the hill.

### Good Scopes

- Can be finished independently
- Have clear finishing criteria
- Make sense as a unit of progress

### Scope Discovery

Scopes emerge during building:
1. Start with rough direction
2. Discover natural boundaries
3. Create scope when it becomes clear
4. Track on hill chart

## Hill Charts in Practice

### Daily Updates

Each builder updates their scope positions:

| Scope | Yesterday | Today | Notes |
|-------|-----------|-------|-------|
| Login flow | 35 | 42 | Figured out OAuth approach |
| Password reset | 20 | 20 | Blocked on email service |

### Cycle Lead Review

Check for:
- Stuck scopes (no movement)
- Scopes going backwards (new unknowns)
- Too many scopes uphill near deadline

### Circuit Breaker

At cycle end, hill positions inform ship/kill:
- All scopes at 100: Ship everything
- Some at 100, some not: Ship what's done
- Critical scopes stuck: Consider kill

## Summary

| Traditional | Hill Charts |
|-------------|-------------|
| % complete | Position 0-100 |
| Hides uncertainty | Shows uncertainty |
| Linear progress | Uphill/downhill phases |
| Easy to game | Requires honesty |
| Focus on tasks | Focus on understanding |

Hill charts reveal the truth about progress.
