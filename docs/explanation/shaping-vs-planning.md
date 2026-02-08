# Shaping vs Planning

Shaping is not planning. Understanding the difference is crucial for Shape Up success.

## Planning

Traditional planning:
- Creates detailed task lists
- Assigns work to people
- Estimates each task
- Expects execution to follow the plan
- Measures success by plan adherence

## Shaping

Shape Up shaping:
- Defines the problem and approach
- Leaves room for builder decisions
- Sets appetite, not estimates
- Expects discovery during building
- Measures success by shipping

## The Key Differences

### Level of Detail

**Planning:** Detailed enough to assign and estimate.
"Create user authentication with OAuth2, JWT tokens, refresh token rotation, and session management. Estimated: 2 weeks."

**Shaping:** Detailed enough to bet on, rough enough to adapt.
"Users can log in with their work email. We're using OAuth with our identity provider. Not doing: password reset, multi-factor (yet)."

### Who Decides What

**Planning:** Planner decides implementation details.
Builders execute the plan.

**Shaping:** Shaper decides boundaries and approach.
Builders decide implementation details.

### When Details Emerge

**Planning:** Details defined upfront.
Changes require replanning.

**Shaping:** Details emerge during building.
Adaptation is expected.

### Handling Unknowns

**Planning:** Tries to eliminate unknowns upfront.
(Often fails, since you can't know what you don't know.)

**Shaping:** De-risks major unknowns.
Accepts that builders will discover more.

## The Three Properties of Shaped Work

### Rough

- Sketch-level, not wireframe-level
- Fat marker, not fine point
- Boxes and arrows, not pixel perfection

### Solved

- Core approach is figured out
- Major rabbit holes identified
- Key decisions made

### Bounded

- Clear what's in scope
- Clear what's out of scope
- Nice-to-haves identified

## Anti-Patterns

### Over-shaping

**Symptom:** Shaping document reads like a spec.
**Problem:** No room for builder creativity.
**Fix:** Keep it rough. Focus on the "what" and "why," not the "how."

### Under-shaping

**Symptom:** "Just make it work."
**Problem:** Hidden complexity, scope explosion.
**Fix:** Shape until the approach is clear and risks are known.

### Shaping-as-Planning

**Symptom:** Shaped work includes task lists.
**Problem:** Removes builder autonomy.
**Fix:** Stop at scope boundaries, let builders discover tasks.

## Example: Adding Search

### Planning Approach

```
Task 1: Create search index (3 days)
Task 2: Build search API (2 days)
Task 3: Create search UI component (1 day)
Task 4: Add filters (2 days)
Task 5: Implement pagination (1 day)
Task 6: Add search analytics (2 days)
Total: 11 days
```

### Shaping Approach

```
Appetite: Small Batch (2 weeks)

Problem: Users can't find content in large projects.

Solution: Add search to the main navigation.
- Search box in header
- Results as user types
- Jump to result on selection

Not doing:
- Filters (keep it simple)
- Analytics (not needed yet)
- Cross-project search

Rabbit holes:
- Index performance: Will test with 10k items
- Real-time updates: Will debounce, not live

Nice-to-haves:
- Keyboard shortcuts
- Recent searches
```

Notice: The shaping approach has boundaries and trade-offs, but no task breakdown.

## When to Shape

Shape when:
- Work is significant (more than a few days)
- Approach isn't obvious
- There are potential rabbit holes
- Scope could expand

Don't shape:
- Bug fixes
- Obvious improvements
- Quick wins
- Cool-down work

## Summary

| Planning | Shaping |
|----------|---------|
| Detailed tasks | Rough approach |
| All decisions upfront | Core decisions only |
| Estimate-driven | Appetite-driven |
| Builders execute | Builders discover |
| Changes = replanning | Adaptation expected |

Shaping sets the destination. Builders find the path.
