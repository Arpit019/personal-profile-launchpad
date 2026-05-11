---
name: sprint-planning
description: Sprint planning workflow with capacity calculation, story point estimation, velocity tracking, retrospective templates, and demo prep guides.
origin: ECC-adapted
---

# Sprint Planning

Structure sprints for predictable delivery and continuous improvement.

## When to Activate
- Planning a new sprint
- Estimating capacity for upcoming work
- Running a retrospective
- Preparing a sprint demo/review
- Tracking velocity trends

## Sprint Cadence
- **Planning**: First day of sprint (2 hours max)
- **Daily Standup**: 15 min, async-friendly
- **Review/Demo**: Last day of sprint (1 hour)
- **Retrospective**: After review (45 min)

## Capacity Formula
```
Capacity = Engineers × Working Days × Focus Factor × Avg Velocity
```
- **Focus Factor**: 0.7 (accounts for meetings, interrupts, reviews)
- **Working Days**: Total days minus PTO, holidays
- **Avg Velocity**: 3-sprint rolling average of points completed

## Estimation Guide
| Points | Complexity | Unknowns | Example |
|--------|-----------|----------|---------|
| 1 | Trivial | None | Copy change, config update |
| 2 | Simple | None | Single-file bug fix |
| 3 | Moderate | Few | New component, known pattern |
| 5 | Complex | Some | Multi-file feature, API integration |
| 8 | Very Complex | Many | New system, significant research |
| 13 | Epic-level | High | Break this down further |

## Retrospective Template
```markdown
## Sprint [N] Retro

### What went well?
- [Celebrate specific wins]

### What didn't go well?
- [Be specific, not personal]

### What will we change?
- [Exactly 1-2 concrete actions with owners]
```

## Quality Gate
- Sprint goal is one sentence that a stakeholder would understand
- Committed points ≤ 80% of capacity
- Every story has acceptance criteria before sprint starts
- Carry-over from last sprint is acknowledged and planned
