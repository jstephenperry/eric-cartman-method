# Templates Reference

This document describes the templates and document formats used in ECM.

## Pitch Template

Location: Created by Write Pitch (WP) workflow

```markdown
# Pitch: {{title}}

**Date:** {{date}}
**Author:** {{author}}
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
- {{cut_1}}
- {{cut_2}}

---

## Solution

### Overview
{{solution_overview}}

### Breadboard
{{breadboard}}

### Fat Marker Sketches
{{sketches}}

### Key Elements
- {{element_1}}
- {{element_2}}
- {{element_3}}

---

## Rabbit Holes

### Identified Risks
- {{risk_1}}
- {{risk_2}}

### De-risking Completed
{{de_risking_done}}

### Accepted Risks
{{accepted_risks}}

---

## No-Gos

These are explicitly OUT of scope:

- **No-Go:** {{no_go_1}}
- **No-Go:** {{no_go_2}}
- **No-Go:** {{no_go_3}}

---

## Betting Information

**Recommended Cycle:** {{cycle}}
**Team Size:** {{team_size}}
**Dependencies:** {{dependencies}}
```

---

## Scope Template

Location: Created by Create Scope (CS) workflow

```markdown
# Scope: {{scope_name}}

**Cycle:** {{cycle_id}}
**Pitch:** {{pitch_title}}
**Created:** {{date}}
**Owner:** {{owner}}

## Hill Position

**Current:** {{position}}/100
**Status:** {{uphill|downhill}}

## What's In This Scope
{{scope_contents}}

## What's NOT In This Scope
{{scope_exclusions}}

## Finishing Criteria

- [ ] {{criterion_1}}
- [ ] {{criterion_2}}
- [ ] {{criterion_3}}

## Nice-to-Haves (Cut if Needed)

| Nice-to-Have | Impact if Cut |
|--------------|---------------|
| {{nice_to_have_1}} | {{impact_1}} |
| {{nice_to_have_2}} | {{impact_2}} |

## Work Log

| Date | Position | Notes |
|------|----------|-------|
| {{date}} | {{position}} | Scope created |

## Notes
{{notes}}
```

---

## Cycle Status Template

Location: `_ecm-output/building/cycles/cycle-{id}/cycle-status.yaml`

```yaml
cycle_id: {{cycle_id}}
cycle_type: {{big-batch|small-batch}}
start_date: {{start_date}}
end_date: {{end_date}}
circuit_breaker_date: {{end_date}}

pitch:
  id: {{pitch_id}}
  title: {{pitch_title}}
  appetite: {{appetite}}
  pitch_file: {{pitch_file_path}}

team:
  cycle_lead: {{cycle_lead}}
  builders:
    - {{builder_1}}
    - {{builder_2}}

status: {{pending|in_progress|shipped|killed}}

scopes:
  {{scope_slug}}:
    name: {{scope_name}}
    status: {{active|completed|cut}}
    hill_position: {{position}}
    owner: {{owner}}
    created: {{date}}

hill_chart:
  last_updated: {{date}}
  scopes:
    {{scope_slug}}:
      position: {{position}}
      status: {{uphill|downhill}}

circuit_breaker:
  decision: {{null|ship|kill}}
  decided_on: {{date}}
  notes: {{notes}}

history:
  - date: {{date}}
    event: {{event_type}}
    notes: {{notes}}
```

---

## Problem Statement Template

Location: Created by Shape Problem (SP) workflow

```markdown
# Problem: {{problem_title}}

**Date:** {{date}}
**Shaped by:** {{shaper}}

## Raw Idea
{{raw_idea}}

## Context

### Who
{{who}}

### What / Situation
{{what}}

### When / Trigger
{{when}}

### Where / Location
{{where}}

### Why Now
{{why}}

### Current Workarounds
{{workarounds}}

## Job-to-be-Done

When {{situation}}, I want to {{motivation}}, so I can {{outcome}}.

## Problem Boundaries

### In Scope
{{in_scope}}

### Out of Scope
{{out_scope}}

## Appetite Suggestion
{{appetite_suggestion}}

## Next Steps

- [ ] Shape solution
- [ ] Create breadboard
- [ ] Write pitch
```

---

## Breadboard Template

Location: Created by Breadboard (BB) workflow

```markdown
# Breadboard: {{feature_title}}

**Date:** {{date}}
**Shaped by:** {{technical_shaper}}

## Overview
{{overview}}

## Flow Summary

**Starting point:** {{start}}
**End goal:** {{end}}

## Places

| Place | Description |
|-------|-------------|
| {{place_1}} | {{description_1}} |
| {{place_2}} | {{description_2}} |

## Affordances by Place

### {{place_1}}
- [ ] {{affordance_1}} → {{destination_1}}
- [ ] {{affordance_2}} → {{destination_2}}

### {{place_2}}
- [ ] {{affordance_3}} → {{destination_3}}

## Breadboard Diagram

{{ascii_diagram}}

## Technical Notes
{{technical_notes}}

## Open Questions
{{open_questions}}

## Next Steps

- [ ] De-risk identified rabbit holes
- [ ] Write pitch
```

---

## Circuit Breaker Template

Location: Created by Circuit Breaker (CB) workflow

```markdown
# Circuit Breaker: {{cycle_id}}

**Decision:** {{SHIP|KILL}}
**Date:** {{date}}
**Pitch:** {{pitch_title}}
**Appetite:** {{appetite}}

## Final Hill Chart

| Scope | Final Position | Status |
|-------|----------------|--------|
| {{scope_1}} | {{position_1}} | {{Shipped|Cut|Killed}} |
| {{scope_2}} | {{position_2}} | {{Shipped|Cut|Killed}} |

## Decision Details

### Shipped
{{shipped_details}}

### Cut (within shipped scopes)
{{cut_nice_to_haves}}

### Not Shipped (scope cut)
{{cut_scopes}}

## What We Learned
{{lessons_learned}}

## Future Considerations
{{future_notes}}
```

---

## Quick Spec Template

Location: Created by Quick Spec (QS) workflow

```markdown
# Quick Spec: {{title}}

**Date:** {{date}}
**Type:** {{Bug Fix|Small Improvement|Quick Win}}

## What
{{what_description}}

## Why
{{why_description}}

## Done When

- [ ] {{criterion_1}}
- [ ] {{criterion_2}}

## Not Doing
- {{not_doing_1}}

## Estimated Size

- [ ] Tiny (< 2 hours)
- [ ] Small (2-4 hours)
- [ ] Medium (1 day)
- [ ] Large (2-3 days)

## Notes
{{notes}}

## Completion

**Status:** {{Pending|Done}}
**Completed:** {{date}}
**Actual Size:** {{actual}}
```

---

## Template Variables

| Variable | Description |
|----------|-------------|
| `{{date}}` | Current date (YYYY-MM-DD) |
| `{{user_name}}` | Configured user name |
| `{{project_name}}` | Project name |
| `{{cycle_id}}` | Cycle identifier |
| `{{pitch_title}}` | Pitch title |
| `{{scope_name}}` | Scope name |
| `{{position}}` | Hill chart position (0-100) |
| `{{appetite}}` | Small Batch or Big Batch |
