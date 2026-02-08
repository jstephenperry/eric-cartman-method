# How to Write a Pitch

This guide walks you through creating a pitch ready for the betting table.

## Prerequisites

- A shaped problem (SP workflow)
- A shaped solution (SS workflow)
- De-risked rabbit holes (DR workflow)
- Optional: Breadboard (BB workflow)

## What is a Pitch?

A pitch is shaped work ready for betting. It answers:

- What problem are we solving?
- How much time is it worth? (appetite)
- What's the approach? (solution)
- What could go wrong? (rabbit holes)
- What are we NOT doing? (no-gos)

## Step 1: State the Problem

### Raw Idea

Start with the original request or observation.

### Job-to-be-Done

Use the JTBD format:
> When [situation], I want to [motivation], so I can [outcome].

### Why Now

Explain urgency. Why should we bet on this now?

## Step 2: Set the Appetite

Appetite is how much time we WANT to spend.

### Small Batch (2 weeks)

Choose for:
- Focused improvements
- Limited scope
- One or two scopes expected
- Often one person

### Big Batch (6 weeks)

Choose for:
- Significant features
- Multiple scopes expected
- Room for exploration
- Team of 2-3

### The Key Question

"If we could only spend [2 weeks / 6 weeks], what would we build?"

### What We're Cutting

List what's NOT in this appetite:
- Features we won't include
- Scope we're leaving out
- "Nice to haves" for later

## Step 3: Present the Solution

### Overview

Brief description of the approach.

### Breadboard

Include the technical flow if you have one.

```
[Place A] -> [Affordance] -> [Place B]
```

### Key Elements

List the essential parts:
- Element 1: [Description]
- Element 2: [Description]
- Element 3: [Description]

### Fat Marker Sketches

Include rough visuals if helpful.

## Step 4: Document Rabbit Holes

### Identified Risks

From de-risking work:
1. Risk 1: [Description]
2. Risk 2: [Description]

### De-risking Done

What investigation or prototyping was completed?

### Accepted Risks

What risks remain and why are we accepting them?

## Step 5: Define No-Gos

No-gos are explicit exclusions. They prevent scope creep.

**Format:**
- **No-Go 1:** We are NOT doing [X] because [reason]
- **No-Go 2:** We are NOT doing [Y] because [reason]
- **No-Go 3:** We are NOT doing [Z] because [reason]

**Examples:**
- No-Go: We are NOT adding filters because search alone solves 80% of cases
- No-Go: We are NOT doing real-time indexing because daily reindex is sufficient
- No-Go: We are NOT supporting cross-project search in this version

## Step 6: Add Betting Information

### Recommended Cycle

Which cycle type fits this work?

### Team Size

How many builders recommended?

### Dependencies

Any external blockers or prerequisites?

## Pitch Template

```markdown
# Pitch: [Title]

**Date:** [Date]
**Author:** [Name]
**Status:** Ready for Betting

---

## Problem

### Raw Idea
[Original request]

### Job to be Done
When [situation], I want to [motivation], so I can [outcome].

### Why Now?
[Urgency and importance]

---

## Appetite

**Time Budget:** [Small Batch (2wk) / Big Batch (6wk)]

**What we're NOT doing to fit this appetite:**
- [Cut 1]
- [Cut 2]

---

## Solution

### Overview
[Brief description]

### Breadboard
[Flow diagram]

### Key Elements
- [Element 1]
- [Element 2]
- [Element 3]

---

## Rabbit Holes

### Identified Risks
- [Risk 1]
- [Risk 2]

### De-risking Completed
- [What was done]

### Accepted Risks
- [Remaining risks]

---

## No-Gos

- **No-Go:** [What we're NOT doing]
- **No-Go:** [What we're NOT doing]
- **No-Go:** [What we're NOT doing]

---

## Betting Information

**Recommended Cycle:** [Cycle ID or type]
**Team Size:** [Number of builders]
**Dependencies:** [Any blockers]
```

## Quality Checklist

Before submitting for betting:

- [ ] Problem is clear and bounded
- [ ] Appetite is set (not estimated)
- [ ] Solution is shaped (rough, solved, bounded)
- [ ] Rabbit holes are documented
- [ ] No-gos are explicit
- [ ] Someone could bet on this with confidence

## Common Mistakes

### Solution Before Problem

**Wrong:** Leading with the feature.
**Right:** Start with the job-to-be-done.

### Estimate Instead of Appetite

**Wrong:** "This will take 4 weeks."
**Right:** "We're willing to spend 2 weeks on this."

### Missing No-Gos

**Wrong:** "We'll figure out scope as we go."
**Right:** "We are NOT doing X, Y, Z."

### Over-detailed Solution

**Wrong:** Detailed task breakdown.
**Right:** Key elements and approach.

## Next Steps

After writing the pitch:

1. **Review** - Get feedback from stakeholders
2. **Betting Table (BT)** - Present for betting
3. **Iterate** - Refine based on feedback

A good pitch can be bet on or rejected confidently.
