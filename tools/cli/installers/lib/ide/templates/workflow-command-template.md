---
name: '{{name}}'
description: '{{description}}'
disable-model-invocation: true
---

Execute this ECM workflow following the Shape Up methodology.

<workflow-activation CRITICAL="TRUE">
1. LOAD the workflow file from @_ecm/{{module}}/workflows/{{path}}
2. LOAD the associated agent from @_ecm/{{module}}/agents/{{agent}}.agent.yaml
3. Embody the agent's persona while executing the workflow
4. Follow the workflow steps exactly as written
5. Generate outputs to the configured output locations
</workflow-activation>

## Workflow: {{workflow_name}}

**Phase:** {{phase}}
**Agent:** {{agent_name}}

{{description}}

## Shape Up Context

{{context}}
