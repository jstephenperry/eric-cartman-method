# Spawn Agent Workflow

## Overview

Spawn independent subagents to work on discrete units of work concurrently. Each subagent:

- Works on a single, well-defined task
- Operates independently without blocking others
- Reports back when complete
- Can be an ECM persona or a specialized worker

## When to Spawn Subagents

Use subagent spawning when:

- Multiple scopes can be worked on in parallel
- De-risking investigations can run concurrently
- Code reviews don't need to block development
- Multiple builders can work on independent pieces

## Spawning a Subagent

### Step 1: Define the Task

Each subagent needs:

```yaml
task:
  id: "{{unique_task_id}}"
  name: "{{descriptive_name}}"
  agent: "{{agent_type}}"  # shaper, builder, technical-shaper, etc.

  objective: |
    {{clear_single_objective}}

  context:
    cycle: "{{cycle_id}}"
    scope: "{{scope_id}}"  # optional
    files:
      - "{{relevant_file_paths}}"

  deliverables:
    - "{{expected_output_1}}"
    - "{{expected_output_2}}"

  constraints:
    - "Do not modify files outside scope"
    - "Report blockers immediately"
    - "{{additional_constraints}}"
```

### Step 2: Spawn Command

To spawn a subagent, use this format:

```
<spawn-agent>
  <task-id>{{task_id}}</task-id>
  <agent>{{agent_type}}</agent>
  <objective>{{objective}}</objective>
  <context>{{context}}</context>
  <deliverables>{{deliverables}}</deliverables>
</spawn-agent>
```

### Step 3: Track in Registry

Add to subagent registry (`_ecm-output/building/subagents/registry.yaml`):

```yaml
subagents:
  {{task_id}}:
    status: running  # running | completed | blocked | failed
    agent: {{agent_type}}
    spawned_at: {{timestamp}}
    spawned_by: {{parent_agent}}
    objective: {{objective}}
    cycle: {{cycle_id}}
    scope: {{scope_id}}
    result: null
```

## Subagent Behavior

### Independence

Each subagent:
- Has its own context and objective
- Does not share state with other subagents
- Cannot modify work outside its defined scope
- Reports only to its spawning parent

### Reporting Back

When a subagent completes, it reports:

```yaml
result:
  task_id: {{task_id}}
  status: completed  # or blocked, failed
  summary: |
    {{what_was_accomplished}}
  deliverables:
    - path: {{file_path}}
      description: {{what_was_created_or_modified}}
  blockers: []  # or list of blockers if blocked
  notes: |
    {{additional_context}}
```

### Handling Blockers

If a subagent encounters a blocker:

1. Stop work on blocked item
2. Report blocker immediately
3. Continue with unblocked work if possible
4. Update registry status to `blocked`

## Coordination Patterns

### Parallel Scopes

Spawn multiple builders for independent scopes:

```
Parent (Cameron - Cycle Lead):
  ├── Spawn: Alex-1 → Scope: login-flow
  ├── Spawn: Alex-2 → Scope: password-reset
  └── Spawn: Alex-3 → Scope: profile-settings
```

### Parallel De-risking

Spawn technical shapers for concurrent investigations:

```
Parent (Wyatt - Technical Shaper):
  ├── Spawn: Wyatt-1 → Investigate: OAuth integration
  ├── Spawn: Wyatt-2 → Investigate: Database performance
  └── Spawn: Wyatt-3 → Investigate: API rate limits
```

### Review Pipeline

Spawn reviewers that don't block builders:

```
Parent (Cameron - Cycle Lead):
  ├── Spawn: Alex → Continue building scope-2
  └── Spawn: Reviewer → Review completed scope-1
```

## Subagent Types

### Builder Subagent

For implementation work:
- Implements a single scope or sub-scope
- Updates hill position when done
- Reports files modified

### Reviewer Subagent

For code review:
- Reviews specific scope implementation
- Reports approval or requested changes
- Does not modify code

### Investigator Subagent

For de-risking:
- Investigates specific technical question
- Reports findings and recommendations
- May create spike/prototype

### Researcher Subagent

For context gathering:
- Gathers information on specific topic
- Reports findings
- Does not modify code

## Registry Management

### View Active Subagents

Read `_ecm-output/building/subagents/registry.yaml`:

```yaml
subagents:
  task-001:
    status: running
    agent: builder
    objective: "Implement login flow"
    ...
  task-002:
    status: completed
    agent: reviewer
    objective: "Review password reset"
    result:
      summary: "Approved with minor suggestions"
    ...
```

### Clean Up Completed

After processing results, archive completed subagents:

```yaml
archived:
  - task_id: task-002
    completed_at: {{timestamp}}
    result: {{result_summary}}
```

## Best Practices

1. **Single Responsibility** - Each subagent has ONE clear objective
2. **Clear Boundaries** - Define what files/scope the subagent can touch
3. **Independent Work** - Don't create dependencies between subagents
4. **Report Early** - Subagents should report blockers immediately
5. **Finite Tasks** - Subagents complete and report, don't run indefinitely

## Integration with Hill Charts

When subagents complete scope work:

1. Subagent reports completion
2. Parent updates hill chart position
3. Parent may spawn next subagent for dependent work

## Example: Parallel Scope Development

```
Cameron (Cycle Lead): "I'm spawning builders for three independent scopes."

<spawn-agent>
  <task-id>build-login-001</task-id>
  <agent>builder</agent>
  <objective>Implement the login flow scope</objective>
  <context>
    cycle: cycle-5
    scope: login-flow
    files: src/auth/login.ts, src/components/LoginForm.tsx
  </context>
  <deliverables>
    - Working login flow
    - Unit tests for login
    - Hill position update
  </deliverables>
</spawn-agent>

<spawn-agent>
  <task-id>build-profile-002</task-id>
  <agent>builder</agent>
  <objective>Implement the profile settings scope</objective>
  <context>
    cycle: cycle-5
    scope: profile-settings
    files: src/profile/settings.ts, src/components/ProfileForm.tsx
  </context>
  <deliverables>
    - Working profile settings
    - Unit tests
    - Hill position update
  </deliverables>
</spawn-agent>

[Subagents work concurrently...]

[Later, subagents report back:]

build-login-001 Result:
  status: completed
  summary: "Login flow implemented with OAuth support"
  hill_position: 85

build-profile-002 Result:
  status: blocked
  summary: "Profile API endpoint not ready"
  blocker: "Waiting on backend team for /api/profile endpoint"
```
