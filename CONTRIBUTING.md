# Contributing to Eric Cartman Method

Thank you for your interest in contributing to the Eric Cartman Method (ECM).

## Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/stephenperry/eric-cartman-method.git
   cd eric-cartman-method
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run tests:
   ```bash
   npm test
   ```

## Testing ECM Locally

Since the package isn't published to npm, use one of these methods to test on a real project:

### Option 1: npm link (recommended)

```bash
# From the eric-cartman-method directory, link globally:
cd /path/to/eric-cartman-method
npm link

# Then in any project you want to test:
cd /path/to/your/project
ecm install
```

To unlink when done:
```bash
npm unlink -g eric-cartman-method
```

### Option 2: Run directly with node

```bash
# From any project directory:
node /path/to/eric-cartman-method/tools/cli/ecm-cli.js install
```

### Option 3: npx with local path

```bash
# From any project directory:
npx /path/to/eric-cartman-method install
```

## After Installation

Once installed in a test project:

1. Open the project in Claude Code, Cursor, or another AI coding assistant
2. Say "SP" to test the Shape Problem workflow with Maya
3. The AI should discover the `.claude/commands/ecm/` directory automatically

## Project Structure

```
eric-cartman-method/
├── src/
│   ├── core/           # Core framework module
│   └── ecm/            # Eric Cartman Method module
├── tools/
│   ├── cli/            # CLI implementation
│   └── schema/         # Validation schemas
├── docs/               # Documentation
└── test/               # Test files
```

## Code Style

- We use Prettier for formatting
- We use ESLint for linting
- Run `npm run format:fix` before committing
- Run `npm run lint:fix` to fix linting issues

## Agent YAML Structure

When creating or modifying agents, follow these patterns:

```yaml
agent:
  metadata:
    id: "_ecm/ecm/agents/agent-name.md"
    name: AgentName
    title: Agent Title
    icon: <emoji>
    module: ecm
    hasSidecar: false

  persona:
    role: Description of agent role
    identity: Agent's identity statement
    communication_style: How the agent communicates
    principles: |
      - Principle 1
      - Principle 2

  menu:
    - trigger: XX or fuzzy match on workflow-name
      workflow: "{project-root}/_ecm/ecm/workflows/..."
      description: "[XX] Workflow: Description"
```

## Workflow Structure

Workflows follow the Shape Up phases:

1. **1-shaping/** - Pre-cycle problem and solution shaping
2. **2-betting/** - Strategic commitment decisions
3. **3-building/** - Cycle execution with scopes
4. **4-cooldown/** - Between-cycle maintenance

Each workflow directory contains:
- `workflow.yaml` or `workflow.md` - Workflow definition
- `checklist.md` - Definition of done (optional)
- Additional instruction files as needed

## Testing

### Agent Schema Validation

```bash
npm run validate:schemas
```

### Full Test Suite

```bash
npm test
```

## Pull Request Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Shape Up Philosophy

When contributing, keep these Shape Up principles in mind:

- **Fixed time, variable scope** - Don't add scope, cut features if needed
- **Appetite-driven** - Consider time budgets, not estimates
- **De-risk early** - Identify rabbit holes before building
- **Ship or kill** - No half-finished work, no extensions

## Questions?

Open an issue for questions or discussions about contributions.
