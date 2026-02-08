# Code Review Workflow

## Overview

Review implementation work to ensure quality while respecting the fixed time constraint.

**Balance:** Quality matters, but shipping matters more. Don't gold-plate.

## Step 1: Load Context

Welcome {{user_name}}! Let's review some code.

**What are we reviewing?**
- Scope: {{scope_name}}
- Cycle: {{cycle_id}}
- Circuit Breaker: {{circuit_breaker_date}}

Load scope file: `{building_artifacts}/cycles/cycle-{{cycle_id}}/scopes/scope-{{scope_slug}}.md`

## Step 2: Understand the Scope

Before reviewing code, understand:

1. **What's in scope?** {{scope_contents}}
2. **What's the finishing criteria?** {{finishing_criteria}}
3. **What are the nice-to-haves?** {{nice_to_haves}}
4. **What's explicitly out?** {{scope_exclusions}}

## Step 3: Review Checklist

### Must Have (Blocking)

- [ ] **Works correctly** - Finishing criteria met?
- [ ] **No breaking changes** - Existing functionality preserved?
- [ ] **No security issues** - Obvious vulnerabilities addressed?
- [ ] **Tests pass** - Existing tests still work?

### Should Have (Important)

- [ ] **Tests added** - New functionality has tests?
- [ ] **Code readable** - Can others understand it?
- [ ] **Error handling** - Edge cases considered?
- [ ] **Performance ok** - No obvious bottlenecks?

### Nice to Have (Don't Block)

- [ ] **Code style** - Follows conventions?
- [ ] **Documentation** - Comments where needed?
- [ ] **Refactoring** - Could be cleaner?

## Step 4: Review Approach

### Shape Up Review Philosophy

1. **Focus on the bet** - Does it deliver the shaped solution?
2. **Respect the deadline** - Don't block shipping
3. **Cut scope, not quality** - But know the difference
4. **Perfect is the enemy of shipped** - Good enough is good enough

### What to Approve

Approve if:
- Finishing criteria are met
- No blocking issues
- Nice-to-haves don't matter for shipping

### What to Request Changes

Request changes if:
- Critical bugs present
- Security vulnerabilities
- Breaking changes
- Finishing criteria not met

### What NOT to Block

Don't block for:
- Style preferences
- "I would have done it differently"
- Nice-to-have improvements
- Non-blocking tech debt

## Step 5: Provide Feedback

### Feedback Format

```markdown
## Review: {{scope_name}}

**Reviewer:** Alex (Builder)
**Date:** {{date}}
**Verdict:** Approve / Request Changes

### Summary
{{summary}}

### Blocking Issues
{{blocking_issues}}

### Suggestions (Non-blocking)
{{suggestions}}

### Questions
{{questions}}
```

## Step 6: Review Turnaround

**Turnaround expectations:**

- Reviews should happen same day if possible
- Don't let reviews become bottlenecks
- If you're blocked on review, escalate quickly
- Circuit breaker doesn't wait for reviews

## Step 7: Document Review

Add to scope work log:

```markdown
| {{date}} | Review | {{verdict}}: {{summary}} |
```

If approved, scope may move to 100 (complete).

## Review Principles

1. **Shipping > perfection** - Don't block for non-issues
2. **Understand the scope** - Review against finishing criteria
3. **Be timely** - Reviews shouldn't bottleneck shipping
4. **Focus on what matters** - Security, correctness, basics
5. **Discuss, don't demand** - Suggestions are suggestions

## Completion

Review is complete. Next steps:

If **Approved:**
1. Merge the code
2. Update scope to 100 (if all criteria met)
3. Move to next scope

If **Changes Requested:**
1. Address blocking issues
2. Re-request review
3. Track in work log
