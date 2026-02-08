# Getting Started with ECM

This tutorial walks you through your first Shape Up cycle using the Eric Cartman Method.

## Prerequisites

- Node.js 20 or higher
- A project to work on
- An AI coding assistant (Claude Code, Cursor, Codex CLI, etc.)

## Step 1: Install ECM

### From npm (once published)

```bash
cd your-project
npx eric-cartman-method install
```

### From local development

If testing from a local clone of ECM:

```bash
# Option 1: npm link (recommended)
cd /path/to/eric-cartman-method
npm link

# Then in your project:
cd /path/to/your/project
ecm install
```

```bash
# Option 2: Run directly
node /path/to/eric-cartman-method/tools/cli/ecm-cli.js install
```

This creates:
- `_ecm/` - ECM agents and workflows
- `_ecm-output/` - Your shaping and building artifacts
- `.claude/commands/ecm/` - Commands for AI tools

## Step 2: Open in AI Tool

Open your project in Claude Code, Cursor, or another AI coding assistant.

The ECM commands will be automatically discovered.

## Step 3: Shape a Problem

Before building anything, shape the problem.

### Say "SP" (Shape Problem)

Work with Maya (the Shaper) to define:
- The raw idea or request
- Who has this problem
- The job-to-be-done
- Problem boundaries

**Output:** Problem statement in `_ecm-output/shaping/problems/`

## Step 4: Create a Breadboard

Work with Wyatt (Technical Shaper) to create a technical flow.

### Say "BB" (Breadboard)

Create a diagram showing:
- Places (screens, dialogs)
- Affordances (buttons, fields)
- Connections (how things flow)

**Output:** Breadboard in `_ecm-output/shaping/breadboards/`

## Step 5: De-Risk

Identify rabbit holes before you fall in.

### Say "DR" (De-Risk)

Find and address:
- Technical unknowns
- Integration risks
- Scope creep traps

**Output:** Risk assessment in `_ecm-output/shaping/de-risk/`

## Step 6: Write a Pitch

Work with Parker (Pitcher) to create a formal pitch.

### Say "WP" (Write Pitch)

A pitch includes:
- **Problem** - What we're solving
- **Appetite** - Time budget (2wk or 6wk)
- **Solution** - Shaped approach
- **Rabbit Holes** - Known risks
- **No-Gos** - What we're NOT doing

**Output:** Pitch in `_ecm-output/shaping/pitches/`

## Step 7: Betting Table

Decide whether to bet on the pitch.

### Say "BT" (Betting Table)

Review the pitch and decide:
- **BET** - Commit to shipping
- **NO BET** - Not now
- **RESHAPE** - Needs more work

## Step 8: Start a Cycle

Once a pitch is bet, start a building cycle.

### Say "CP" (Cycle Planning)

Work with Cameron (Cycle Lead) to:
- Set cycle dates
- Set circuit breaker deadline
- Assign team

**Output:** Cycle status in `_ecm-output/building/cycles/`

## Step 9: Build with Scopes

Discover scopes as you build (don't pre-plan).

### Say "CS" (Create Scope)

When you discover a scope:
- Name it
- Define finishing criteria
- Set initial hill position

### Say "DS" (Dev Scope)

Work with Alex (Builder) to:
- Implement the scope
- Update hill position
- Track progress

## Step 10: Track on Hill Charts

Update hill positions regularly.

### Say "UH" (Update Hill)

- **Uphill (0-50):** Figuring things out
- **Peak (50):** All unknowns resolved
- **Downhill (50-100):** Executing known work

## Step 11: Circuit Breaker

At cycle end, make the final decision.

### Say "CB" (Circuit Breaker)

Choose:
- **SHIP** - Deploy what's done
- **KILL** - Cancel entirely

**No extensions allowed.**

## Cool-down

Between cycles, use cool-down for:
- Bug Bash (BG)
- Tech Debt (TD)
- Exploration (EX)

## Summary

| Phase | Key Workflows |
|-------|---------------|
| Shaping | SP, BB, DR, WP |
| Betting | BT, AS |
| Building | CP, CS, DS, UH, CB |
| Cool-down | BG, TD, EX |

## Next Steps

- Read [Shape Up Philosophy](../explanation/shape-up-philosophy.md)
- Learn [How to Write a Pitch](../how-to/write-a-pitch.md)
- Explore [Agent Reference](../reference/agents.md)
