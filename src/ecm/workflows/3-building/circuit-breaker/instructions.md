# Circuit Breaker Workflow

## Overview

The circuit breaker is the end-of-cycle decision point. There are only two options:

1. **SHIP** - Deploy what's done, cut remaining scope
2. **KILL** - Cancel the bet entirely

**There are NO extensions. No exceptions. Fixed time, variable scope.**

## Why Circuit Breakers?

- **Protects future cycles** - Work doesn't spill over
- **Forces honest assessment** - Can't hide behind "almost done"
- **Enables variable scope** - Shipping something > shipping nothing
- **Creates urgency** - Real deadline, real decisions
- **Frees up capacity** - Dead bets don't linger

## Step 1: Assess Cycle Status

Welcome {{user_name}}! It's circuit breaker time.

**Load cycle status:**
`{building_artifacts}/cycles/cycle-{{cycle_id}}/cycle-status.yaml`

### Cycle Summary

- **Pitch:** {{pitch_title}}
- **Appetite:** {{appetite}}
- **Cycle Dates:** {{start_date}} - {{end_date}}
- **Today:** {{date}}
- **Days Remaining:** {{days_remaining}}

### Hill Chart Status

| Scope | Position | Status |
|-------|----------|--------|
| {{scope_1}} | {{pos_1}} | {{status_1}} |
| {{scope_2}} | {{pos_2}} | {{status_2}} |

## Step 2: Evaluate Each Scope

For each scope, determine:

### Scope Assessment

| Scope | Shippable? | Value if Shipped Alone? | Nice-to-Haves Cut? |
|-------|------------|-------------------------|-------------------|
| {{scope_1}} | Yes/No | High/Med/Low | {{nice_to_haves_1}} |
| {{scope_2}} | Yes/No | High/Med/Low | {{nice_to_haves_2}} |

### Shippable Criteria

A scope is **shippable** if:
- Core functionality works
- No blocking bugs
- User can accomplish the job-to-be-done
- Nice-to-haves can be cut

A scope is **NOT shippable** if:
- Core functionality broken
- Blocking bugs present
- Would confuse or harm users
- Dependencies incomplete

## Step 3: Calculate Shipping Value

### What Can We Ship?

**Completed scopes:**
{{completed_scopes}}

**Shippable (with nice-to-have cuts):**
{{shippable_scopes}}

**Not shippable:**
{{not_shippable_scopes}}

### Value Assessment

**If we ship completed + shippable:**
- Does it deliver meaningful value?
- Does it solve the core job-to-be-done?
- Is it better than nothing?

## Step 4: Make the Decision

### SHIP Decision

Choose SHIP if:
- [ ] Core value can be delivered
- [ ] Job-to-be-done is addressed (even if reduced)
- [ ] Shipping something > shipping nothing
- [ ] Users will benefit from what's done

**What we're shipping:**
{{shipping_scope}}

**What we're cutting:**
{{cutting_scope}}

**What we're NOT shipping (killed scope):**
{{killed_scope}}

### KILL Decision

Choose KILL if:
- [ ] No shippable scopes
- [ ] Core value cannot be delivered
- [ ] Shipping would harm users
- [ ] The bet was fundamentally wrong

**Why we're killing:**
{{kill_rationale}}

**What we learned:**
{{lessons_learned}}

## Step 5: Document the Decision

Update cycle-status.yaml:

```yaml
circuit_breaker:
  decision: ship  # or kill
  decided_on: {{date}}
  shipped_scopes:
    - {{scope_1}}
    - {{scope_2}}
  cut_scopes:
    - {{cut_scope_1}}
  cut_nice_to_haves:
    - {{nice_to_have_1}}
  notes: |
    {{decision_notes}}
```

### Create Circuit Breaker Record

`{building_artifacts}/cycles/cycle-{{cycle_id}}/circuit-breaker.md`

```markdown
# Circuit Breaker: {{cycle_id}}

**Decision:** SHIP / KILL
**Date:** {{date}}
**Pitch:** {{pitch_title}}
**Appetite:** {{appetite}}

## Final Hill Chart

| Scope | Final Position | Status |
|-------|----------------|--------|
| {{scope_1}} | {{final_pos_1}} | Shipped/Cut/Killed |
| {{scope_2}} | {{final_pos_2}} | Shipped/Cut/Killed |

## Decision Details

### If SHIP:

**Shipped:**
{{shipped_details}}

**Cut (within shipped scopes):**
{{cut_nice_to_haves}}

**Not Shipped (scope cut):**
{{cut_scopes}}

### If KILL:

**Rationale:**
{{kill_rationale}}

**Lessons Learned:**
{{lessons}}

## What We Learned

{{retrospective_notes}}

## Future Considerations

{{future_notes}}
```

## Step 6: Execute the Decision

### If SHIP:

1. [ ] Deploy shipped scopes
2. [ ] Communicate what shipped and what was cut
3. [ ] Archive cut scope documentation
4. [ ] Update pitch status to "Shipped"

### If KILL:

1. [ ] Archive all cycle work
2. [ ] Communicate decision and rationale
3. [ ] Document lessons learned
4. [ ] Update pitch status to "Killed"

## Step 7: Prepare for Cool-down

Regardless of decision, next comes cool-down (if scheduled):

1. **Bug bash** - Fix issues from shipped work
2. **Tech debt** - Address accumulated debt
3. **Exploration** - Blue-sky ideas for future cycles

## Circuit Breaker Rules

1. **No extensions** - The deadline is the deadline
2. **No half-shipping** - Either it's shippable or it's not
3. **No carry-over** - Cut scope doesn't go to next cycle
4. **No regrets** - Killed bets were experiments
5. **Always learn** - Document what you learned

## Completion

Circuit breaker complete.

**If SHIP:** Deploy and celebrate what was delivered.
**If KILL:** Learn and move on.

Next: Cool-down period begins.
