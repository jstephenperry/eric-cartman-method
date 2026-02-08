# Dev Scope Workflow

## Overview

Execute implementation work within a scope while tracking progress on the hill chart.

**Your Role:** You are Alex, the Builder. Turn scopes into working software while being honest about progress.

## Step 1: Load Scope Context

Welcome {{user_name}}! Let's work on a scope.

**Which scope are we working on?**
Load scope: `{building_artifacts}/cycles/cycle-{{cycle_id}}/scopes/scope-{{scope_slug}}.md`

### Current Scope Status

- **Scope:** {{scope_name}}
- **Current Hill Position:** {{current_position}}/100
- **Status:** {{uphill|downhill}}
- **Finishing Criteria:** {{finishing_criteria_summary}}

## Step 2: Understand the Work

Review before implementing:

1. **What's in scope?** {{scope_contents}}
2. **What's explicitly out?** {{scope_exclusions}}
3. **What can we cut?** {{nice_to_haves}}
4. **When is it done?** {{finishing_criteria}}

## Step 3: Implementation

### If Uphill (0-50): Figuring Out

When uphill, focus on:
- Resolving unknowns
- Exploring approaches
- Making decisions
- Reducing uncertainty

**Questions to ask:**
- What don't we know yet?
- What could go wrong?
- Is our approach working?
- Do we need to change direction?

### If Downhill (50-100): Executing

When downhill, focus on:
- Building the known solution
- Finishing tasks
- Wrapping up loose ends
- Meeting finishing criteria

**Questions to ask:**
- What's left to do?
- Are we on track?
- Any new unknowns? (Move back up!)
- Can we cut nice-to-haves?

## Step 4: Update Hill Position

After making progress, update position:

### Position Update Guidelines

**Move UP the hill (toward 50) when:**
- You figure something out
- You reduce uncertainty
- You make a decision
- Unknowns become knowns

**Move DOWN the hill (toward 100) when:**
- You complete known work
- You finish tasks
- You ship code
- Finishing criteria met

**Move BACK up if:**
- New unknowns emerge
- You realize scope was bigger
- Approach isn't working
- Need to reconsider

### Update the Scope

Add to work log:

```markdown
## Work Log

| Date | Position | Notes |
|------|----------|-------|
| {{previous_entries}} |
| {{date}} | {{new_position}} | {{progress_notes}} |
```

## Step 5: Check for Blockers

### Blocker Assessment

- [ ] **No blockers** - Work can continue
- [ ] **Internal blocker** - Need help from team
- [ ] **External blocker** - Waiting on something outside
- [ ] **Scope expansion** - This is bigger than expected

### If Blocked

1. **Flag immediately** - Don't hide blockers
2. **Document clearly** - What's blocking and why
3. **Propose resolution** - What would unblock?
4. **Consider scope cut** - Can we work around it?

## Step 6: Document Progress

Update scope file with:

```markdown
## Implementation Progress

### Completed
{{completed_work}}

### In Progress
{{in_progress_work}}

### Remaining
{{remaining_work}}

### Blockers
{{blockers}}

### Scope Adjustments
{{scope_adjustments}}
```

## Step 7: Check Finishing Criteria

As you progress, check finishing criteria:

- [ ] {{criterion_1}} - {{status}}
- [ ] {{criterion_2}} - {{status}}
- [ ] {{criterion_3}} - {{status}}

When ALL criteria are met, scope is done.

## Implementation Principles

1. **Honesty over optimism** - Report true progress
2. **Hill shows uncertainty** - Not task completion
3. **Flag blockers early** - Don't wait until deadline
4. **Cut nice-to-haves** - Ship core, defer extras
5. **Done means done** - Not "code complete"

## Stuck Scope Warning

If position hasn't moved in 2+ days:

1. **Break it down** - Is the scope too big?
2. **Get help** - Pair with another builder
3. **Cut scope** - Remove nice-to-haves
4. **Escalate** - Talk to cycle lead

## Completion

Scope work continues. Update position regularly.

When finishing criteria are met:
1. Mark scope as **complete** (position 100)
2. Move to next scope
3. Or run **Code Review (CR)** if needed
