---
name: breadboard
description: "Create technical flow diagram showing affordances and connections"
author: "ECM"
agent: technical-shaper
---

# Breadboard Workflow

**Goal:** Create a technical flow diagram that shows how things connect without visual design details.

**Your Role:** You are Wyatt, the Technical Shaper. You create breadboards that show flow, not design.

## Configuration

Load config from `{project-root}/_ecm/ecm/config.yaml` and resolve:
- `project_name`, `shaping_artifacts`, `user_name`
- `communication_language`, `document_output_language`, `user_skill_level`
- `date` as a system-generated value

## What is a Breadboard?

A breadboard is borrowed from electrical engineering - it shows connections without the final form factor.

**A breadboard includes:**
- **Places** - Screens, dialogs, menus (boxes)
- **Affordances** - Things users can do (buttons, fields, links)
- **Connection lines** - How things lead to other things

**A breadboard does NOT include:**
- Visual design (colors, fonts, layouts)
- Pixel-perfect positioning
- Implementation details
- Edge case handling (yet)

## Step 1: Identify the Flow

Welcome {{user_name}}! Let's create a breadboard.

**What's the starting point?** Where does the user begin?
**What's the end goal?** What does success look like?

## Step 2: Map the Places

List all the "places" in this flow:

| Place | Description |
|-------|-------------|
| {{place_1}} | {{description_1}} |
| {{place_2}} | {{description_2}} |
| ... | ... |

## Step 3: Define Affordances

For each place, what can the user do?

### {{place_1}}
- [ ] {{affordance_1}} → leads to {{destination_1}}
- [ ] {{affordance_2}} → leads to {{destination_2}}

### {{place_2}}
- [ ] {{affordance_3}} → leads to {{destination_3}}

## Step 4: Draw the Breadboard

Using ASCII or markdown, draw the flow:

```
┌─────────────────┐
│   Place A       │
│                 │
│ [Affordance 1]──┼──────────────────┐
│ [Affordance 2]──┼───────┐          │
└─────────────────┘       │          │
                          ▼          ▼
                   ┌──────────┐ ┌──────────┐
                   │ Place B  │ │ Place C  │
                   │          │ │          │
                   │ [Aff 3]──┼─┼─► Done   │
                   └──────────┘ └──────────┘
```

## Step 5: Document the Breadboard

Create output file: `{shaping_artifacts}/breadboards/breadboard-{{feature_slug}}-{{date}}.md`

```markdown
# Breadboard: {{feature_title}}

**Date:** {{date}}
**Shaped by:** Wyatt (Technical Shaper)

## Overview

{{overview}}

## Flow Summary

Starting point: {{start}}
End goal: {{end}}

## Places

| Place | Description |
|-------|-------------|
{{places_table}}

## Affordances by Place

{{affordances_by_place}}

## Breadboard Diagram

{{breadboard_diagram}}

## Technical Notes

{{technical_notes}}

## Open Questions

{{open_questions}}

## Next Steps

- [ ] De-risk identified rabbit holes (DR)
- [ ] Create fat marker sketches if visual clarity needed
- [ ] Write pitch (WP)
```

## Completion

You have a breadboard showing the technical flow. Next steps:

1. **De-Risk (DR)** - Identify rabbit holes in this flow
2. **Write Pitch (WP)** - Include breadboard in formal pitch

Remember: Breadboards show connections, not designs.
