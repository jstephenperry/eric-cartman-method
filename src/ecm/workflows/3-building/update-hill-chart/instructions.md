# Update Hill Chart Workflow

## Overview

Hill charts show progress in terms of **certainty**, not just completion. The uphill is about figuring things out; the downhill is about executing known work.

## The Hill Chart

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
  (Uncertain)     (Executing)
```

## Step 1: Load Cycle Status

Welcome {{user_name}}! Let's update the hill chart.

Load cycle: `{building_artifacts}/cycles/cycle-{{cycle_id}}/cycle-status.yaml`

### Current Hill Chart

| Scope | Position | Status | Last Updated |
|-------|----------|--------|--------------|
| {{scope_1}} | {{pos_1}} | {{status_1}} | {{updated_1}} |
| {{scope_2}} | {{pos_2}} | {{status_2}} | {{updated_2}} |

## Step 2: Review Each Scope

For each active scope, ask:

### Uphill Questions (0-50)

If currently uphill:
1. **What did we figure out?** Any decisions made?
2. **What unknowns remain?** What don't we know yet?
3. **Are we approaching the peak?** All unknowns nearly resolved?
4. **Any new rabbit holes?** Unexpected complexity?

### Downhill Questions (50-100)

If currently downhill:
1. **What got done?** Measurable progress?
2. **Any new unknowns?** Need to go back uphill?
3. **Are we approaching done?** Finishing criteria nearly met?
4. **What's left?** Clear list of remaining work?

## Step 3: Update Positions

For each scope, determine new position:

### Position Meanings

| Position | Meaning |
|----------|---------|
| 0-10 | Just started, mostly unknowns |
| 10-25 | Making progress, some clarity |
| 25-40 | Good progress, key unknowns remain |
| 40-50 | Almost at peak, one or two unknowns left |
| 50 | Peak - all unknowns resolved, clear path |
| 50-60 | Started executing, lots to build |
| 60-75 | Making good execution progress |
| 75-90 | Finishing up, wrapping loose ends |
| 90-100 | Nearly done, final touches |
| 100 | Complete, finishing criteria met |

### Update Table

| Scope | Old Position | New Position | Change | Notes |
|-------|--------------|--------------|--------|-------|
| {{scope_1}} | {{old_1}} | {{new_1}} | {{delta_1}} | {{notes_1}} |
| {{scope_2}} | {{old_2}} | {{new_2}} | {{delta_2}} | {{notes_2}} |

## Step 4: Detect Stuck Scopes

A scope is **stuck** if:
- No movement in 2+ days
- Movement < 5 points while actively worked

### Stuck Scope Actions

1. **Diagnose:** Why is it stuck?
   - Too big? Break it down
   - Blocked? What's blocking?
   - Wrong approach? Reconsider
   - Need help? Pair up

2. **Take Action:**
   - [ ] Break into smaller scopes
   - [ ] Get help from team member
   - [ ] Cut nice-to-haves
   - [ ] Escalate to cycle lead

## Step 5: Update Files

### Update cycle-status.yaml

```yaml
hill_chart:
  last_updated: {{date}}
  scopes:
    {{scope_1_slug}}:
      position: {{new_pos_1}}
      status: {{new_status_1}}
    {{scope_2_slug}}:
      position: {{new_pos_2}}
      status: {{new_status_2}}

history:
  - date: {{date}}
    event: hill_updated
    positions:
      {{scope_1_slug}}: {{new_pos_1}}
      {{scope_2_slug}}: {{new_pos_2}}
```

### Update individual scope files

Add to work log in each scope file:

```markdown
| {{date}} | {{new_position}} | {{update_notes}} |
```

## Step 6: Generate Hill Chart Visual

Create visual representation:

```
Hill Chart - {{cycle_id}} - {{date}}

                    ╱╲
                   ╱  ╲
                  ╱    ╲
                 ╱      ╲
                ╱   X    ╲        ← {{scope_at_peak}}
               ╱          ╲
              ╱    X       ╲      ← {{scope_uphill}}
             ╱              ╲ X   ← {{scope_downhill}}
            ╱                ╲

           0   25   50   75   100

Legend:
X = Scope position
─ = Progress since last update
```

## Step 7: Check for Alerts

### Warning Signs

- [ ] **Scope going backwards** - New unknowns discovered
- [ ] **Scope stuck** - No movement in 2+ days
- [ ] **Many uphill scopes** - Too much uncertainty remaining
- [ ] **Deadline approaching** - Not enough downhill progress

### If Warning Signs Present

Escalate to cycle lead. Consider:
- Cutting scope
- Getting help
- Adjusting approach
- Early circuit breaker discussion

## Hill Chart Principles

1. **Position = certainty** - Not completion percentage
2. **Going back is ok** - When you find unknowns
3. **Stuck is a signal** - Take action immediately
4. **Downhill is predictable** - Uphill is uncertain
5. **Update regularly** - Daily or at least every 2 days

## Completion

Hill chart is updated. Next steps:

1. **Address stuck scopes** - Take action if any
2. **Continue work** - Dev Scope (DS) on active scopes
3. **Check deadline** - Are we on track for circuit breaker?
