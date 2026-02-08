# Tech Debt Workflow

## Overview

Cool-down is time to pay down technical debt - small improvements that make future work easier.

**Key constraint:** Tech debt work should be small and bounded. Large refactors need shaping.

## What is Tech Debt?

Technical debt is the implied cost of future rework caused by choosing an expedient solution now.

**Good candidates for cool-down:**
- Cleanup from recent cycles
- Dependency updates
- Small refactors
- Test improvements
- Documentation gaps
- Performance tweaks

**NOT cool-down candidates:**
- Large refactors (shape them)
- Architecture changes (shape them)
- New capabilities (shape them)

## Step 1: Inventory Debt

Welcome {{user_name}}! Let's address some tech debt.

**Sources of tech debt:**
- TODOs in code
- Cycle cut corners
- Outdated dependencies
- Known code smells
- Test gaps

### Tech Debt Inventory

| Item | Category | Impact | Effort |
|------|----------|--------|--------|
| {{debt_1}} | Code/Test/Deps/Docs | {{impact_1}} | Small/Med |
| {{debt_2}} | Code/Test/Deps/Docs | {{impact_2}} | Small/Med |

## Step 2: Select Work

### Selection Criteria

Choose tech debt that:
- [ ] Can be done in cool-down (small)
- [ ] Reduces future friction
- [ ] Doesn't require shaping
- [ ] Has clear scope

### Selected Items

**Will address this cool-down:**
1. {{selected_1}} - {{rationale_1}}
2. {{selected_2}} - {{rationale_2}}

**Needs shaping (defer to future pitch):**
- {{needs_shaping_1}}
- {{needs_shaping_2}}

## Step 3: Execute

For each selected item:

### Work Pattern

1. **Scope it** - What exactly are we doing?
2. **Time-box it** - How long should this take?
3. **Do it** - Make the improvement
4. **Test it** - Ensure nothing breaks
5. **Ship it** - Deploy the improvement

### Progress Tracking

| Item | Status | Time Spent | Notes |
|------|--------|------------|-------|
| {{debt_1}} | Done/WIP/Blocked | {{time_1}} | {{notes_1}} |
| {{debt_2}} | Done/WIP/Blocked | {{time_2}} | {{notes_2}} |

## Step 4: Document

Track tech debt work:

`{building_artifacts}/cooldown/tech-debt-{{date}}.md`

```markdown
# Tech Debt: {{date}}

## Summary

- **Items Addressed:** {{addressed_count}}
- **Items Deferred:** {{deferred_count}}

## Completed

| Item | Category | What Changed |
|------|----------|--------------|
| {{debt_1}} | {{cat_1}} | {{change_1}} |

## Deferred

| Item | Reason |
|------|--------|
| {{deferred_1}} | {{reason_1}} |

## Notes for Future

{{future_notes}}
```

## Tech Debt Principles

1. **Small bites** - Don't boil the ocean
2. **Future friction** - Prioritize what helps most
3. **Time-box** - Don't let it expand
4. **Needs shaping?** - If big, shape it
5. **Document** - Note what changed and why

## Completion

Tech debt session complete.

Remaining cool-down time can be used for:
- Bug Bash (BG)
- Exploration (EX)
- Rest
