# Appetite Setting Workflow

## Overview

Appetite is how much time we WANT to spend, not how long we think it will take.

**Key distinction:**
- **Estimate:** "This will take 4 weeks"
- **Appetite:** "We're willing to spend 2 weeks on this"

## Appetite Options

### Small Batch (2 weeks)

Best for:
- Bug fixes that need more than quick-flow
- Small improvements to existing features
- Focused polish work
- Technical maintenance

Characteristics:
- One or two scopes max
- Limited complexity
- Clear, bounded work
- Often assigned to one person

### Big Batch (6 weeks)

Best for:
- New features
- Significant enhancements
- Complex integrations
- Multi-scope projects

Characteristics:
- Multiple scopes expected
- Room for exploration
- Team of 2-3 people
- Circuit breaker at the end

## Step 1: Understand the Work

Welcome {{user_name}}! Let's set the appetite.

**What work are we sizing?**
Load the shaped work:
- Problem: `{shaping_artifacts}/problems/problem-*.md`
- Solution: `{shaping_artifacts}/solutions/solution-*.md`
- Pitch (if exists): `{shaping_artifacts}/pitches/pitch-*.md`

## Step 2: Appetite Assessment Questions

Answer these questions to determine appetite:

### Value Assessment

1. **How important is this?**
   - [ ] Critical - blocking other work
   - [ ] High - significant user/business value
   - [ ] Medium - nice to have improvement
   - [ ] Low - minor enhancement

2. **What's the impact if we don't do this?**
   {{impact_if_not_done}}

3. **Who benefits and how much?**
   {{beneficiaries}}

### Scope Assessment

4. **Can this be done in 2 weeks with reduced scope?**
   - [ ] Yes - here's what we'd cut: {{cuts_for_small}}
   - [ ] No - minimum viable requires more time

5. **What's the minimum version that delivers value?**
   {{minimum_version}}

6. **What are the nice-to-haves we could cut?**
   {{nice_to_haves}}

### Risk Assessment

7. **How much uncertainty remains?**
   - [ ] Low - well understood, similar to past work
   - [ ] Medium - some unknowns but de-risked
   - [ ] High - significant unknowns remain

8. **Are there external dependencies?**
   {{dependencies}}

## Step 3: Make the Appetite Decision

Based on assessment, recommend appetite:

### If Small Batch (2 weeks):

- [ ] Work is well-bounded
- [ ] Limited scope is acceptable
- [ ] Low remaining uncertainty
- [ ] Can be done by 1 person

**What's included in Small Batch:**
{{small_batch_scope}}

**What's explicitly OUT:**
{{small_batch_cuts}}

### If Big Batch (6 weeks):

- [ ] Work requires multiple scopes
- [ ] Full solution delivers significantly more value
- [ ] Some exploration room is valuable
- [ ] Needs team of 2-3

**What's included in Big Batch:**
{{big_batch_scope}}

**What could be cut if needed (variable scope):**
{{big_batch_nice_to_haves}}

## Step 4: Document Appetite Decision

Update the pitch with appetite decision:

```markdown
## Appetite Decision

**Selected Appetite:** {{selected_appetite}}
**Date:** {{date}}
**Decided by:** Parker (Pitcher)

### Rationale
{{rationale}}

### What's In Scope
{{in_scope}}

### What's Out (No-Gos)
{{no_gos}}

### Variable Scope (Cut if Needed)
{{nice_to_haves}}
```

## Appetite Principles

1. **Appetite constrains scope, not the reverse**
   - Don't ask "how long will this take?"
   - Ask "how much time should we spend?"

2. **Cut scope to fit appetite**
   - If it doesn't fit, reduce scope
   - Don't extend the time budget

3. **Good enough beats perfect**
   - Ship something valuable in the time box
   - Iterate in future cycles if needed

4. **Variable scope is the safety valve**
   - Fixed time protects other work
   - Variable scope lets us ship something

## Completion

Appetite is set. Next steps:

1. **Update Pitch** - Add appetite section
2. **Betting Table (BT)** - Present for betting
3. **Communicate** - Share appetite decision with team
