# Shape Up Philosophy

Shape Up is a product development methodology created by Ryan Singer at Basecamp. This document explains the core philosophy and why it works.

## The Core Insight

> "Projects don't just take longer than expected. They grow in scope."

The fundamental problem Shape Up solves is scope creep and the endless "almost done" syndrome. By fixing time and varying scope, teams ship meaningful work consistently.

## Fixed Time, Variable Scope

Traditional project management:
- Estimate how long work will take
- Commit to a scope
- Extend deadlines when scope grows
- Leads to: missed deadlines, scope creep, death marches

Shape Up approach:
- Set a time budget (appetite)
- Commit to the time
- Cut scope to fit
- Leads to: consistent shipping, sustainable pace

## Shaping vs Estimation

### Estimation (What We Avoid)

Estimation asks: "How long will this take?"

Problems:
- Encourages scope expansion
- Creates false precision
- Leads to commitment before understanding
- Results in guilt when estimates are wrong

### Appetite (What We Do)

Appetite asks: "How much time is this worth?"

Benefits:
- Constrains scope by design
- Acknowledges uncertainty honestly
- Enables strategic trade-offs
- Allows cutting to ship

## The Shaping Process

Before betting, work must be **shaped**:

### Rough
Not too detailed. Leave room for builders to make decisions.

### Solved
The core approach is figured out. Major risks are addressed.

### Bounded
Scope is clear. What's in, what's out, what could be cut.

## Betting vs Backlog

### Backlogs (What We Avoid)

Problems with backlogs:
- Grow infinitely
- Require constant grooming
- Create guilt about unfinished items
- Mix different levels of readiness
- Become graveyards for ideas

### Betting (What We Do)

The betting table:
- Reviews only shaped pitches
- Makes explicit yes/no decisions
- Assigns to specific cycles
- Respects capacity limits
- Important ideas resurface naturally

## Hill Charts

Traditional progress tracking:
- Percentage complete (often lies)
- Task lists (hide uncertainty)
- Status updates (performative)

Hill charts show:
- **Uphill (0-50):** Figuring things out, unknowns remain
- **Downhill (50-100):** Executing known work

The insight: A task at 30% on the uphill is riskier than 30% on the downhill.

## Circuit Breakers

At cycle end, there are only two choices:

- **Ship:** Deploy what's done (cutting unfinished scope)
- **Kill:** Cancel the bet entirely

**Never allowed:**
- Extensions ("just one more week")
- Carry-over ("we'll finish next cycle")
- Partial shipping of broken features

This forces:
- Honest progress reporting
- Early scope cutting
- Learning from failed bets

## Cool-down

The 2-week period between cycles:
- Fix bugs from shipped work
- Address technical debt
- Explore ideas for future shaping
- Rest and recover

Cool-down is sacred. Don't treat it as "more building time."

## No Backlog

Shape Up teams don't maintain product backlogs.

Why it works:
- Important ideas resurface naturally
- Reduces guilt about "unfinished" items
- Forces fresh evaluation each cycle
- Prevents stale requirements

## Team Autonomy

During building:
- Teams discover scopes as they work
- No detailed task assignments upfront
- Builders make implementation decisions
- Cycle lead coordinates, not micromanages

## Summary

| Traditional | Shape Up |
|-------------|----------|
| Estimate time | Set appetite |
| Variable time | Fixed time |
| Fixed scope | Variable scope |
| Backlog grooming | Betting table |
| % complete | Hill charts |
| Extensions | Circuit breaker |
| Sprint after sprint | Cycle + cool-down |

## Further Reading

- [Shape Up by Ryan Singer](https://basecamp.com/shapeup) - The original book
- [Shaping vs Planning](shaping-vs-planning.md)
- [Betting vs Backlog](betting-vs-backlog.md)
- [Hill Charts Explained](hill-charts.md)
- [The Circuit Breaker](circuit-breaker.md)
