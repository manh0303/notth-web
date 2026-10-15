Version: 0.1 | Status: PENDING OWNER REVIEW | Owner: Nguyễn Đức Mạnh | Date: 2026-10-15

# Requirements traceability matrix

| Source | Requirement | Business / PRD | Story | AC | Figma / component / test evidence | Approval |
| --- | --- | --- | --- | --- | --- | --- |
| SRC-001 | FR-001 | BR-001 / PRD-001 | US-001 | AC-US-001-01/02 | pending / pending / NOT_RUN | pending |
| SRC-002, SRC-004 | FR-002 | BR-001 / PRD-001 | US-002 | AC-US-002-01/02 | pending / pending / NOT_RUN | pending |
| SRC-003, SRC-005 | FR-003 | BR-002 / PRD-002 | US-003 | AC-US-003-01/02 | pending / pending / NOT_RUN | pending |
| SRC-001, SRC-002 | FR-004 | BR-002 / PRD-002 | US-004 | AC-US-004-01/02 | pending / pending / NOT_RUN | pending |
| SRC-001 | FR-005 | BR-003 / PRD-003 | US-005 | AC-US-005-01/02 | pending / pending / NOT_RUN | pending |
| SRC-001; sizes are proposals | NFR-001 | BR-003 / PRD-003 | US-006 | AC-US-006-01/02 | pending / pending / NOT_RUN | pending |
| SRC-001; criteria are proposals | NFR-002 | BR-003 / PRD-003 | US-006 | AC-US-006-01/02 | pending / pending / NOT_RUN | pending |
| SRC-001; numeric targets are proposals | NFR-003 | BR-004 / PRD-004 | US-007 | AC-US-007-01/02 | pending / pending / NOT_RUN | pending |
| SRC-001 | NFR-004 | BR-004 / PRD-004 | US-008 | AC-US-008-01/02 | pending / pending / NOT_RUN | pending |
| SRC-001 | NFR-005 | BR-004 / PRD-004 | US-008 | AC-US-008-01/02 | pending / pending / NOT_RUN | pending |

Coverage: 10/10 FR/NFR requirements have source/proposal labeling, stories and AC links. 8 stories, 16 acceptance criteria. Human approvals: 0. Actual UI frames/component/test mappings: 0/10. The Figma file exists but has no UI frame; its page ID is not a design acceptance reference. Implementation/OpenSpec mappings pending Gate 1 and design approval. No completed runtime coverage claimed.

IDs remain stable. Record code/test revisions and raw evidence paths when available; invalidate affected evidence after change. Requirements review is a same-agent static review, not independent QA or UAT.

## Gate 1 update — 2026-10-15

Owner approved requirements v0.1; see gate-1-approval.md. Earlier pending statuses above are the historical draft snapshot. Current FR/NFR baseline approval: 10/10 at Gate 1. Actual Figma UI node/component/executed test mappings remain 0/10, quota-blocked. Prepared screen mapping is in ../design/handoff.md. Gate 2/3 acceptance not granted.

## Current Gate 2 mapping — v0.2 / DEC-008

| Requirement | Current surface | Verification |
| --- | --- | --- |
| FR-001 | Header, Wordmark, hero | 3 viewport tests/screenshots; owner visual review pending |
| FR-002 | Five ordered workflow stage names | Stage-order assertions; previous feature/description scope removed by owner |
| FR-003 | Get started → official setup guide | Link assertion; embedded installation/clipboard scope removed |
| FR-004 | Always-visible Docs/GitHub, home and MIT links | Keyboard/no-JS tests; no mobile menu |
| FR-005 | BrandMotion inside h1 | Exact sequence/pause, stable h1/media bounds, reduced/no-JS final word |
| NFR-001/002 | global.css, semantic landmarks, stable heading | 375/768/1440, axe, keyboard, equivalent reflow; full manual checks pending |
| NFR-003 | Base/astro config | Check/build, assets/runtime/canonical; Lighthouse/SEO hardening pending |
| NFR-004/005 | preview-review.md, source, minimal evidence, gates | External designs deferred; owner review/UAT/release pending |

Current reports: ../evidence/minimal/. v0.1 preview evidence remains historical. Future setup video is deferred, not delivered. Browser refs SCR-001/002/003 are in screen-specification.md; no Figma frames claimed.
