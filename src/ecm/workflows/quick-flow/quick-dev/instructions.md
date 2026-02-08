# Quick Dev Workflow

## Overview

Quick Dev implements small, well-understood work from a Quick Spec. Fast in, fast out.

**Goal:** Ship the quick spec quickly and cleanly.

## Step 1: Load Quick Spec

Welcome {{user_name}}! Let's implement a quick spec.

**Which quick spec?**
Load: `{shaping_artifacts}/quick-specs/quick-spec-*.md`

### Quick Spec Summary

- **Title:** {{title}}
- **Type:** {{type}}
- **Estimated Size:** {{size}}

### Done When

- [ ] {{done_1}}
- [ ] {{done_2}}

### Not Doing

- {{not_doing}}

## Step 2: Implement

### Implementation Checklist

1. [ ] Read the quick spec completely
2. [ ] Confirm understanding
3. [ ] Implement the change
4. [ ] Test the change
5. [ ] Verify "done when" criteria

### Work Log

| Time | Activity | Notes |
|------|----------|-------|
| Start: {{start_time}} | Beginning work | {{notes}} |
| {{time_2}} | {{activity_2}} | {{notes_2}} |
| End: {{end_time}} | Completed | {{notes_3}} |

## Step 3: Verify Completion

Check all "done when" criteria:

- [ ] {{done_1}} ✓
- [ ] {{done_2}} ✓

### Quality Checks

- [ ] Change works as expected
- [ ] No regressions
- [ ] Tests pass
- [ ] Ready to ship

## Step 4: Ship

Deploy the change:

1. [ ] Commit with clear message
2. [ ] Push to remote
3. [ ] Deploy if applicable
4. [ ] Verify in production

### Commit Message Format

```
[Quick] {{title}}

- {{change_1}}
- {{change_2}}

Quick Spec: quick-spec-{{slug}}-{{date}}.md
```

## Step 5: Document Completion

Update quick spec file:

```markdown
## Completion

**Status:** Done
**Completed:** {{completion_date}}
**Actual Size:** {{actual_size}}
**Deployed:** Yes/No

### What Was Done
{{what_was_done}}

### Any Issues
{{issues_encountered}}
```

## Escalation

### If It's Bigger Than Expected

If during implementation you discover:
- Unknowns you didn't expect
- Scope expanding beyond spec
- Dependencies you didn't know about

**STOP and escalate:**
1. Note what you've learned
2. Escalate to full shaping (SP)
3. Don't force it into Quick Flow

### If Blocked

If you hit a blocker:
1. Document the blocker
2. Seek help quickly
3. Don't let quick work drag on

## Quick Dev Principles

1. **Fast in, fast out** - Quick means quick
2. **Spec is the scope** - Don't add extras
3. **Escalate early** - If it grows, shape it
4. **Ship it** - Done means deployed

## Completion

Quick Dev complete. Work is shipped.

Track your quick flows:
- `{building_artifacts}/quick-flow/log.md`

```markdown
| Date | Title | Size | Actual | Notes |
|------|-------|------|--------|-------|
| {{date}} | {{title}} | {{est_size}} | {{actual}} | {{notes}} |
```
