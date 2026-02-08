# How to Spawn Subagents for Parallel Work

This guide explains how to fork subagents for concurrent, independent work units in ECM.

## Overview

Subagents allow you to parallelize work that would otherwise be sequential. Each subagent:

- Works on a single, well-defined objective
- Operates independently without blocking other work
- Reports back when complete
- Can be any ECM persona or specialized worker type

## When to Use Subagents

Use subagent spawning when:

| Scenario | Example |
|----------|---------|
| Multiple scopes can be worked in parallel | Building login and profile simultaneously |
| De-risking investigations are independent | Researching OAuth and database performance |
| Code reviews don't need to block development | Reviewing scope-1 while building scope-2 |
| Multiple builders can work on separate pieces | Different team members on different scopes |

## Agent-Specific Spawn Commands

### Cycle Lead (Cameron)

**[SB] Spawn Builder** - Fork builders for parallel scope implementation

```
Say: "SB" or "spawn builder"
```

Use when you have multiple independent scopes that can be built concurrently.

### Technical Shaper (Wyatt)

**[SI] Spawn Investigator** - Fork investigators for parallel de-risking

```
Say: "SI" or "spawn investigator"
```

Use when you have multiple technical questions that can be researched concurrently.

### Builder (Alex)

**[SR] Spawn Reviewer** - Fork reviewers for parallel code review

```
Say: "SR" or "spawn reviewer"
```

Use when you want code review to happen without blocking ongoing development.

### Master Orchestrator (Cartman)

**[SA] Spawn Agent** - Fork any agent type

```
Say: "SA" or "spawn agent"
```

General-purpose spawning for any agent type.

## Listing Active Subagents

All agents support the List Subagents command:

```
Say: "LS" or "list subagents"
```

This shows the subagent registry with status of all running, completed, and blocked subagents.

## Subagent Task Structure

When spawning a subagent, you define:

```yaml
task:
  id: "unique-task-id"
  name: "Descriptive Name"
  agent: "builder"  # or shaper, technical-shaper, etc.

  objective: |
    Clear, single objective for this subagent

  context:
    cycle: "cycle-5"
    scope: "login-flow"
    read_files:
      - "src/auth/login.ts"
    write_files:
      - "src/auth/login.ts"

  deliverables:
    - description: "Working login flow"
      type: file
      path: "src/auth/login.ts"

  constraints:
    - "Do not modify files outside the write_files list"
    - "Report blockers immediately"
```

## Subagent Results

When a subagent completes, it reports:

```yaml
result:
  task_id: "build-login-001"
  status: "completed"  # or blocked, failed

  summary: |
    What was accomplished

  deliverables:
    - path: "src/auth/login.ts"
      description: "Implemented OAuth login flow"
      type: "modified"

  hill_chart:
    scope: "login-flow"
    previous_position: 35
    new_position: 75
    rationale: "Core implementation done, edge cases remain"

  blockers: []

  recommendations:
    - "Consider adding rate limiting"
```

## Example: Parallel Scope Development

```
Cameron (Cycle Lead): "I'm spawning builders for three independent scopes."

[Uses SB command three times]

Task 1: build-login-001
  Agent: builder
  Objective: Implement the login flow scope
  Files: src/auth/login.ts, src/components/LoginForm.tsx

Task 2: build-profile-002
  Agent: builder
  Objective: Implement the profile settings scope
  Files: src/profile/settings.ts, src/components/ProfileForm.tsx

Task 3: build-password-003
  Agent: builder
  Objective: Implement the password reset scope
  Files: src/auth/reset.ts, src/components/ResetForm.tsx

[Subagents work concurrently...]

[Later, check status with LS command]

Registry shows:
  build-login-001: completed (hill: 85)
  build-profile-002: blocked (waiting on API)
  build-password-003: running (hill: 60)
```

## Example: Parallel De-risking

```
Wyatt (Technical Shaper): "I need to investigate three technical unknowns."

[Uses SI command three times]

Task 1: investigate-oauth-001
  Agent: investigator
  Objective: Evaluate OAuth provider options

Task 2: investigate-db-002
  Agent: investigator
  Objective: Analyze database performance constraints

Task 3: investigate-api-003
  Agent: investigator
  Objective: Research API rate limiting approaches

[Investigators work concurrently...]

[Results inform the pitch with reduced technical risk]
```

## Best Practices

1. **Single Responsibility** - Each subagent has ONE clear objective
2. **Clear Boundaries** - Define what files/scope the subagent can touch
3. **Independent Work** - Don't create dependencies between subagents
4. **Report Early** - Subagents should report blockers immediately
5. **Finite Tasks** - Subagents complete and report, don't run indefinitely

## Integration with Hill Charts

When subagents complete scope work:

1. Subagent reports completion with hill position update
2. Parent agent updates the master hill chart
3. Parent may spawn next subagent for dependent work

## Registry Location

Subagent status is tracked in:

```
_ecm-output/building/subagents/registry.yaml
```

This file contains all active, completed, and archived subagent tasks.
