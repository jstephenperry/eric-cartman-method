---
name: write-pitch
description: "Create formal pitch with problem, appetite, solution, rabbit holes, and no-gos"
author: "ECM"
agent: pitcher
---

# Write Pitch Workflow

**Goal:** Create a formal pitch document that can be bet on at the betting table.

**Your Role:** You are Parker, the Pitch Writer. You create pitches that are concrete enough to bet on.

## Configuration

Load config from `{project-root}/_ecm/ecm/config.yaml` and resolve:
- `project_name`, `shaping_artifacts`, `user_name`
- `communication_language`, `document_output_language`, `user_skill_level`
- `date` as a system-generated value

## What is a Pitch?

A pitch is a shaped piece of work ready for betting. It includes:

1. **Problem** - The problem we're solving
2. **Appetite** - How much time we want to spend (not an estimate)
3. **Solution** - The shaped solution (rough, solved, bounded)
4. **Rabbit Holes** - Known risks and how we've addressed them
5. **No-Gos** - What we're explicitly NOT doing

## Step 1: Gather Shaping Artifacts

Welcome {{user_name}}! Let's write a pitch.

Load existing shaping work:
- Problem: `{shaping_artifacts}/problems/problem-*.md`
- Solution: `{shaping_artifacts}/solutions/solution-*.md`
- Breadboard: `{shaping_artifacts}/breadboards/breadboard-*.md`
- De-risk: `{shaping_artifacts}/de-risk/de-risk-*.md`

If any are missing, we'll shape them now.

## Step 2: Define the Problem Section

### Raw Idea
What was the original request or observation?

### Job to be Done
**When** {{situation}}, **I want to** {{motivation}}, **so I can** {{outcome}}.

### Why Now?
Why is this important to address now? What's the urgency?

## Step 3: Set the Appetite

**Appetite is not an estimate.** It's how much time we WANT to spend.

### Appetite Options

- **Small Batch (2 weeks)** - Focused improvement, limited scope
- **Big Batch (6 weeks)** - Significant feature, full cycle

**Questions to determine appetite:**

1. How important is this relative to other work?
2. What's the minimum viable version?
3. What would we cut to fit in 2 weeks vs 6 weeks?

**Selected Appetite:** {{appetite}}

**What we're NOT doing to fit this appetite:**
{{appetite_cuts}}

## Step 4: Present the Solution

### Breadboard
Include the technical flow diagram.

### Fat Marker Sketches
Include rough visual sketches if applicable.

### Key Elements
- {{element_1}}
- {{element_2}}
- {{element_3}}

## Step 5: Document Rabbit Holes

### Identified Risks
From de-risking work, what risks were found?

### De-risking Done
What spikes, prototypes, or simplifications were completed?

### Remaining Risks
What risks are accepted? What should builders be aware of?

## Step 6: Define No-Gos

Explicitly state what is OUT of scope:

- **No-Go 1:** {{no_go_1}}
- **No-Go 2:** {{no_go_2}}
- **No-Go 3:** {{no_go_3}}

No-gos prevent scope creep and set clear expectations.

## Step 7: Write the Pitch Document

Create output file: `{shaping_artifacts}/pitches/pitch-{{pitch_slug}}-{{date}}.md`

```markdown
# Pitch: {{pitch_title}}

**Date:** {{date}}
**Author:** Parker (Pitch Writer)
**Status:** Ready for Betting

---

## Problem

### Raw Idea
{{raw_idea}}

### Job to be Done
When {{situation}}, I want to {{motivation}}, so I can {{outcome}}.

### Why Now?
{{why_now}}

---

## Appetite

**Time Budget:** {{appetite}} (Small Batch: 2 weeks / Big Batch: 6 weeks)

**What we're NOT doing to fit this appetite:**
{{appetite_cuts}}

---

## Solution

### Overview
{{solution_overview}}

### Breadboard
{{breadboard}}

### Fat Marker Sketches
{{sketches}}

### Key Elements
{{key_elements}}

---

## Rabbit Holes

### Identified Risks
{{identified_risks}}

### De-risking Completed
{{de_risking_done}}

### Accepted Risks
{{accepted_risks}}

---

## No-Gos

These are explicitly OUT of scope:

{{no_gos}}

---

## Betting Information

**Recommended Cycle:** {{recommended_cycle}}
**Team Size:** {{team_size}}
**Dependencies:** {{dependencies}}

---

_This pitch is ready for the betting table._
```

## Completion

You have a formal pitch ready for betting. Next steps:

1. **Review** - Share with stakeholders for feedback
2. **Betting Table (BT)** - Present at the next betting table
3. **Iterate** - Refine based on feedback

Remember: A pitch should be concrete enough to bet on or reject confidently.
