# Create Scope Workflow

## Overview

Scopes are discrete, independently finishable units of work discovered during building. They are NOT pre-planned tasks.

**A good scope:**
- Can be finished independently
- Has clear finishing criteria
- Fits on a hill chart
- Is meaningful to the user/product

## Step 1: Identify the Scope

Welcome {{user_name}}! Let's document a discovered scope.

**What cycle is this for?**
Load: `{building_artifacts}/cycles/cycle-{{cycle_id}}/cycle-status.yaml`

**What scope have you discovered?**

### Scope Discovery Triggers

- "We realized we need to..."
- "This piece can be finished on its own..."
- "There's a natural boundary here..."
- "This part has its own uncertainty..."

## Step 2: Define the Scope

### Scope Name
A short, descriptive name: {{scope_name}}

### What's In This Scope
What work does this scope include?
{{scope_contents}}

### What's NOT In This Scope
What related work is intentionally separate?
{{scope_exclusions}}

## Step 3: Set Finishing Criteria

A scope is "done" when:

- [ ] {{finishing_criterion_1}}
- [ ] {{finishing_criterion_2}}
- [ ] {{finishing_criterion_3}}

**Done means DONE** - not "code complete" or "needs review"

## Step 4: Identify Nice-to-Haves

What parts of this scope could be cut if time runs short?

| Nice-to-Have | Impact if Cut |
|--------------|---------------|
| {{nice_to_have_1}} | {{impact_1}} |
| {{nice_to_have_2}} | {{impact_2}} |

Nice-to-haves are the variable scope safety valve.

## Step 5: Set Initial Hill Position

Where is this scope on the hill?

```
     Uphill (Figuring out)    |    Downhill (Executing)
                              |
  0 -------- 25 -------- 50 --|-- 75 -------- 100
                              |
  [Uncertain]                 |              [Certain]
```

### Position Guidelines

- **0-10:** Just identified, lots of unknowns
- **10-25:** Started exploring, some clarity emerging
- **25-50:** Making progress, but unknowns remain
- **50:** Peak - all unknowns resolved, clear path forward
- **50-75:** Executing on known work
- **75-100:** Finishing up, wrapping loose ends

**Initial Position:** {{initial_position}}/100

**Why this position?**
{{position_rationale}}

## Step 6: Document the Scope

Create scope file: `{building_artifacts}/cycles/cycle-{{cycle_id}}/scopes/scope-{{scope_slug}}.md`

```markdown
# Scope: {{scope_name}}

**Cycle:** {{cycle_id}}
**Pitch:** {{pitch_title}}
**Created:** {{date}}
**Owner:** {{owner}}

## Hill Position

**Current:** {{initial_position}}/100
**Status:** {{uphill|downhill}}

## What's In This Scope

{{scope_contents}}

## What's NOT In This Scope

{{scope_exclusions}}

## Finishing Criteria

- [ ] {{finishing_criterion_1}}
- [ ] {{finishing_criterion_2}}
- [ ] {{finishing_criterion_3}}

## Nice-to-Haves (Cut if Needed)

| Nice-to-Have | Impact if Cut |
|--------------|---------------|
{{nice_to_haves_table}}

## Work Log

| Date | Position | Notes |
|------|----------|-------|
| {{date}} | {{initial_position}} | Scope created |

## Notes

{{additional_notes}}
```

## Step 7: Update Cycle Status

Add scope to cycle-status.yaml:

```yaml
scopes:
  {{scope_slug}}:
    name: {{scope_name}}
    status: active
    hill_position: {{initial_position}}
    owner: {{owner}}
    created: {{date}}
```

## Scope Principles

1. **Discover, don't plan** - Scopes emerge from the work
2. **Independent completion** - Each scope can ship alone
3. **Natural boundaries** - Follow the seams in the work
4. **Track uncertainty** - Hill position shows knowing, not doing
5. **Cut to ship** - Nice-to-haves enable variable scope

## Completion

Scope is documented. Next steps:

1. **Dev Scope (DS)** - Start implementing this scope
2. **Update Hill (UH)** - Update position as progress happens
3. **Create more scopes** - As you discover them

Remember: Scopes are discovered, not assigned.
