---
name: prd-template
description: Comprehensive PRD template system with variants for feature PRDs, platform PRDs, and integration PRDs. Includes worked examples.
origin: ECC-adapted
---

# PRD Template System

Templates for common PRD types. The `pm-prd-writer-agent` uses these as starting points.

## When to Activate
- Writing any formal product requirement document
- Need a specific PRD variant (feature, platform, integration, API)
- Team needs standardized PRD format across projects

## Template Variants

### Feature PRD (Most Common)
For adding a specific feature to an existing product.
Sections: Problem → Goals → User Stories → Requirements → UX → Metrics → Release Plan

### Platform PRD
For building a new platform, service, or standalone product.
Additional sections: Architecture Overview, API Strategy, Multi-tenant Considerations, Migration Plan

### Integration PRD
For connecting with external systems (APIs, third-party services).
Additional sections: API Contract, Authentication Flow, Rate Limits, Fallback Strategy, Data Mapping

### Lightweight Spec (< 1 page)
For small features that don't need a full PRD.
```markdown
## [Feature Name]
**Why**: [1-2 sentences]
**What**: [Bullet list of changes]
**Success**: [1 metric]
**Edge cases**: [List]
**Not doing**: [Scope exclusions]
```

## Document Lifecycle
1. **Draft** — Author writes initial version
2. **In Review** — Shared with stakeholders, collecting feedback
3. **Approved** — Sign-off from PM lead + engineering lead
4. **In Progress** — Engineering actively building
5. **Completed** — Feature shipped, metrics being tracked
6. **Deprecated** — Feature sunset or replaced

## Versioning Rules
- Major version for scope changes (1.0 → 2.0)
- Minor version for clarifications (1.0 → 1.1)
- Always note what changed and why in a changelog section
- Never delete content — strikethrough deprecated requirements
