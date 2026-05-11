---
name: product-lifecycle
description: End-to-end product lifecycle workflow from ideation through launch and measurement. Defines stage gates, handoff points between agents, and quality checkpoints.
origin: ECC-adapted
---

# Product Lifecycle Workflow

The complete PM pipeline. Each stage has a gate that must pass before advancing.

## When to Activate
- Starting a new product or feature from scratch
- Running a full discovery-to-delivery cycle
- Onboarding a team to a structured PM process
- Auditing where a product is in its lifecycle

## Lifecycle Stages

### Stage 1: IDEATION
**Agent**: `pm-ideation-agent`
**Input**: User problem, market signal, or strategic directive
**Output**: Scored Idea Canvas with VFD ratings
**Gate**: VFD composite ≥ 6/10 AND riskiest assumption identified

### Stage 2: RESEARCH
**Agent**: `pm-researcher-agent`
**Input**: Validated idea canvas
**Output**: Market sizing, competitive landscape, user insights
**Gate**: TAM estimated AND ≥2 competitors analyzed AND recommendation made

### Stage 3: PLANNING
**Agent**: `pm-planner-agent`
**Input**: Research report + validated idea
**Output**: Phased roadmap with prioritized features
**Gate**: RICE scores assigned AND dependencies mapped AND milestone success metrics defined

### Stage 4: PRD DRAFTING
**Agent**: `pm-prd-writer-agent`
**Input**: Roadmap + research
**Output**: Complete PRD with user stories and acceptance criteria
**Gate**: All user stories have acceptance criteria AND non-goals are explicit AND engineering review requested

### Stage 5: PROTOTYPING
**Agent**: `pm-prototype-agent`
**Input**: PRD
**Output**: Clickable prototype or wireframe spec
**Gate**: Happy path is walkable AND at least 1 error state shown AND feedback captured from ≥1 tester

### Stage 6: METRICS & LAUNCH
**Agent**: `pm-metrics-agent`
**Input**: PRD + prototype feedback
**Output**: Measurement framework, OKRs, launch checklist
**Gate**: North Star metric defined AND instrumentation plan ready AND rollback plan documented

## Stage Transitions

```
IDEATION ──[VFD ≥ 6]──→ RESEARCH ──[TAM + Competitors]──→ PLANNING
    ↑                                                          │
    │                                                    [RICE + Roadmap]
    │                                                          │
    └──[Kill if unviable]─── METRICS ←── PROTOTYPE ←── PRD DRAFT
                               │
                          [Launch Ready]
                               │
                            SHIPPED
```

## Kill Criteria
At any stage, kill the project if:
- VFD composite drops below 4/10 after research
- No viable business model after market sizing
- Technical feasibility is rated ≤ 3/10
- User testing reveals fundamental usability failure
- Strategic priority shift makes this irrelevant

## Quality Standards (All Stages)
- Every deliverable follows `pm-standards` rules
- No deliverable uses placeholder content
- Every decision is traceable to evidence
- Handoff documents are self-contained (no "ask me" dependencies)
