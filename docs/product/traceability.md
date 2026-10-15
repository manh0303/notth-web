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

## Gate 2 prototype mapping (owner design approval pending)

External frame references are deferred by the owner-approved review-medium change. SCR references below refer to browser surfaces in ../design/preview-review.md, not Figma IDs.

| Requirement | Surface/component | Actual check or remaining work |
| --- | --- | --- |
| FR-001 | SCR-001/002/003; Header, Wordmark, hero | Playwright layout and axe; owner visual decision pending |
| FR-002 | Features/workflow in index.astro | Source README inspection + workflow order assertions |
| FR-003 | Install.astro | npm E404 observed; source command, clipboard success and failure tests |
| FR-004 | Header, footer, anchors | Anchor validity, menu, no-JS tests; production external-link verification pending |
| FR-005 | BrandMotion.astro; SCR-005 | Exact sequence/500ms pause with controlled clock, reduced motion, stable stage bounds |
| NFR-001 | global.css; SCR-001–004 | 375/768/1440 no overflow; 720px reflow equivalent, not actual browser zoom |
| NFR-002 | Landmarks, roles, skip link, focus, motion | axe serious/critical checks; menu keyboard; full manual keyboard/AT pending |
| NFR-003 | Base.astro, astro.config.mjs | Build, loaded assets, runtime errors, canonical; sitemap/robots/Lighthouse pending |
| NFR-004 | This matrix, preview-review, source/tests/evidence | Browser design refs; editable Figma/Penpot deferred; owner review pending |
| NFR-005 | Gate records and feature branch | No merge/release/deploy; UAT remains blocked pending approved production scope |
