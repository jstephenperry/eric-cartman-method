# Bug Bash Workflow

## Overview

Bug bash is focused bug fixing during cool-down. No shaping needed - just find bugs and fix them.

**Cool-down purpose:** Breathing room between cycles for maintenance work.

## What is a Bug Bash?

A focused period to:
- Fix known bugs
- Address user-reported issues
- Clean up rough edges
- Improve stability

**NOT a bug bash:**
- New features (need shaping)
- Major refactoring (need shaping)
- "While we're at it" improvements

## Step 1: Gather Bugs

Welcome {{user_name}}! Let's bash some bugs.

**Sources of bugs:**
- User reports
- Support tickets
- Known issues list
- Tech debt notes
- Post-ship issues

### Bug Triage

| Bug | Severity | Impact | Effort |
|-----|----------|--------|--------|
| {{bug_1}} | High/Med/Low | {{impact_1}} | Small/Med/Large |
| {{bug_2}} | High/Med/Low | {{impact_2}} | Small/Med/Large |

## Step 2: Prioritize

### Priority Matrix

| | Low Effort | High Effort |
|---|------------|-------------|
| **High Impact** | DO FIRST | DO IF TIME |
| **Low Impact** | DO IF TIME | SKIP |

### Selected Bugs

**Will fix this cool-down:**
1. {{priority_bug_1}}
2. {{priority_bug_2}}
3. {{priority_bug_3}}

**Won't fix (defer):**
- {{deferred_bug_1}}
- {{deferred_bug_2}}

## Step 3: Fix Bugs

For each bug:

1. **Reproduce** - Confirm the bug exists
2. **Diagnose** - Find the root cause
3. **Fix** - Implement the solution
4. **Test** - Verify it's fixed
5. **Deploy** - Ship the fix

### Bug Fix Log

| Bug | Status | Fix Applied | Deployed |
|-----|--------|-------------|----------|
| {{bug_1}} | Fixed/WIP/Blocked | {{fix_1}} | Yes/No |
| {{bug_2}} | Fixed/WIP/Blocked | {{fix_2}} | Yes/No |

## Step 4: Document

Track bug bash results:

`{building_artifacts}/cooldown/bug-bash-{{date}}.md`

```markdown
# Bug Bash: {{date}}

## Summary

- **Bugs Fixed:** {{fixed_count}}
- **Bugs Deferred:** {{deferred_count}}
- **Bugs Discovered:** {{discovered_count}}

## Fixed Bugs

| Bug | Root Cause | Fix |
|-----|------------|-----|
| {{bug_1}} | {{cause_1}} | {{fix_1}} |

## Deferred Bugs

| Bug | Reason for Deferral |
|-----|---------------------|
| {{deferred_1}} | {{reason_1}} |

## Newly Discovered

| Bug | Severity | Notes |
|-----|----------|-------|
| {{new_1}} | {{severity_1}} | {{notes_1}} |
```

## Bug Bash Rules

1. **Fix, don't feature** - Bugs only, no new stuff
2. **Time-box** - Don't let bugs consume the whole cool-down
3. **Defer wisely** - Some bugs can wait
4. **Document fixes** - Others will thank you

## Completion

Bug bash complete. Fixed {{fixed_count}} bugs.

Remaining cool-down time can be used for:
- Tech Debt (TD)
- Exploration (EX)
- Rest and recovery
