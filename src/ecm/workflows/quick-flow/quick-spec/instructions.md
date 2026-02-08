# Quick Spec Workflow

## Overview

Quick Spec is for small, well-understood work that doesn't need full shaping ceremony. Think: bug fixes, small improvements, quick wins.

**Use Quick Spec when:**
- Work is well understood
- Scope is clearly bounded
- Can be done in hours/days, not weeks
- No significant unknowns

**DON'T use Quick Spec when:**
- Work has unknowns
- Scope might expand
- Needs discussion/exploration
- Bigger than a few days

## Step 1: Confirm Quick Flow Fit

Welcome {{user_name}}! Let's see if this fits Quick Flow.

### Quick Flow Checklist

- [ ] Work is well understood (no mystery)
- [ ] Scope is clear and bounded
- [ ] Can be done quickly (< 3 days)
- [ ] No dependencies or blockers
- [ ] Doesn't need team discussion

**If any unchecked:** Consider full shaping (SP → WP)

### Describe the Work

**What needs to be done?**
{{work_description}}

**Why is this needed?**
{{work_rationale}}

## Step 2: Define Quick Spec

### Quick Spec Format

```markdown
# Quick Spec: {{title}}

**Date:** {{date}}
**Type:** Bug Fix / Small Improvement / Quick Win

## What

{{what_description}}

## Why

{{why_description}}

## Done When

- [ ] {{done_criterion_1}}
- [ ] {{done_criterion_2}}

## Not Doing

- {{not_doing_1}}

## Estimated Size

[ ] Tiny (< 2 hours)
[ ] Small (2-4 hours)
[ ] Medium (1 day)
[ ] Large (2-3 days) ← MAX for Quick Flow

## Notes

{{notes}}
```

## Step 3: Quick Sanity Check

Before proceeding:

1. **Is this really quick?** If it's more than 3 days, shape it.
2. **Are there unknowns?** If yes, explore first.
3. **Could scope expand?** If likely, shape it.

### Escape to Full Shaping

If this is bigger than expected:
- Stop Quick Flow
- Run Shape Problem (SP)
- Create a proper pitch

## Step 4: Create Quick Spec File

Save to: `{shaping_artifacts}/quick-specs/quick-spec-{{slug}}-{{date}}.md`

## Step 5: Ready for Quick Dev

Quick Spec complete. Next:
- Run Quick Dev (QD) to implement
- Or assign to appropriate person

## Quick Spec Principles

1. **Keep it quick** - If it's not quick, shape it
2. **Be honest** - Don't force big work into Quick Flow
3. **Clear bounds** - "Not doing" is as important as "doing"
4. **Done when done** - Clear finishing criteria

## Completion

Quick Spec ready. Proceed to Quick Dev (QD) when ready.
