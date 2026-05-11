---
name: pm-standards
description: Always-follow quality rules for all PM artifacts. Enforces writing style, evidence standards, document structure, and professional quality expectations aligned with Product School / The Product Space alumni standards.
origin: ECC-adapted
alwaysApply: true
---

# PM Standards — Quality Rules

These rules apply to ALL PM agent outputs. No exceptions.

## Writing Standards

### Voice
- Concrete over vague
- Metrics over adjectives
- Evidence over opinion
- Specifics over generalities
- Action items over observations

### Banned Phrases (Auto-Rewrite)
- "game-changer", "revolutionary", "cutting-edge", "best-in-class"
- "In today's rapidly evolving landscape"
- "leverage synergies", "move the needle" (without a specific metric)
- "users will love this" (without evidence)
- "simple and intuitive" (unmeasurable)
- "we believe" without following evidence
- Any unsourced market claim

### Required Patterns
- Lead with the concrete artifact: number, screenshot, metric, example
- Every claim about users must reference research or data
- Every recommendation must state the trade-off
- Every timeline must include assumptions and risks

## Document Standards

### Naming Convention
- PRDs: `PRD-[PRODUCT]-[FEATURE]-v[X.Y].md`
- Research: `RESEARCH-[TOPIC]-[DATE].md`
- Ideas: `IDEA-[NAME]-[DATE].md`
- Roadmaps: `ROADMAP-[PRODUCT]-Q[N]-[YEAR].md`

### Version Control
- All PM documents must have version, date, author, status
- Never delete content — strikethrough deprecated sections
- Changelog at bottom of every document

### Structure
- Every document starts with a 2-3 sentence executive summary
- Every section earns its space (no padding, no filler)
- Tables over paragraphs for structured data
- Bullet points over paragraphs for lists

## Evidence Standards

### Data Hierarchy
1. First-party data (your product analytics)
2. Primary research (interviews, surveys you conducted)
3. Credible third-party research (named sources, dated)
4. Expert opinion (named, credentialed)
5. Inference (clearly labeled as inference, not fact)

### Citation Rules
- Every market size claim needs a source
- Every user behavior claim needs research reference
- Every competitive claim must be verifiable
- Estimates must list assumptions explicitly
- Old data (> 12 months) must be flagged

## Proof of Work Standards (Product Space Aligned)

### Portfolio-Grade PM Artifacts Must Include
- Real problem statements backed by user research
- Clear metrics with before/after or target/actual
- Evidence of structured thinking (frameworks applied, not just named)
- Trade-off analysis showing why alternatives were rejected
- Impact measurement showing what changed because of the work

### Case Study Structure (for portfolio)
1. **Context**: Company, product, your role, timeline
2. **Problem**: What was broken and evidence it mattered
3. **Process**: How you approached it (frameworks, research, analysis)
4. **Solution**: What you built/shipped
5. **Impact**: Measurable results with specific numbers
6. **Learnings**: What you'd do differently

## Quality Checklist (All Deliverables)
- [ ] Executive summary present and compelling
- [ ] No banned phrases remain
- [ ] Every metric has a source or is labeled as estimate
- [ ] Trade-offs are explicit
- [ ] Next steps are actionable with owners
- [ ] A stakeholder can understand this without a walkthrough meeting
- [ ] Document is self-contained (no "ask me" references)
