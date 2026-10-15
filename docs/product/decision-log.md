Version: 0.1 | Status: PENDING OWNER REVIEW | Owner: Nguyễn Đức Mạnh | Date: 2026-10-15

# Decisions and gates

| ID | Decision | Status | Owner / source |
| --- | --- | --- | --- |
| DEC-001 | Astro/TypeScript/CSS, GitHub Pages target, feature branch, external framework read-only | Confirmed constraint | Owner SRC-001 |
| DEC-002 | Dark premium identity, violet accents, tagline and required logo sequence | Confirmed direction; visual baseline pending | Owner SRC-001 |
| DEC-003 | English-only single-page MVP, section order, external docs | Proposed | Owner to approve at Gate 1 |
| DEC-004 | Responsive test widths, AA checks and Lighthouse/timing thresholds | Proposed | Owner to approve at Gate 1 |
| DEC-005 | Source/offline install primary while registry returns E404 | Evidence-driven proposal | SRC-003/005; owner Gate 1 |
| DEC-006 | Logo once per page load; proposed non-mandated timings | Proposed | Owner to confirm with design at Gate 2 |
| GATE-001 | Requirements baseline v0.1 approval | APPROVED | Nguyễn Đức Mạnh, 2026-10-15; gate-1-approval.md |
| GATE-002 | Figma visual baseline approval | NOT_STARTED | Nguyễn Đức Mạnh |
| GATE-003 | UAT final acceptance | NOT_STARTED | Nguyễn Đức Mạnh |
| RELEASE-001 | Merge / release / deployment authorization | NOT_GRANTED | Specific owner authorization required |

Approval must reference reviewed revision/version, scope, approver and date. Gate 1 approval is not permission to skip Gate 2 or UAT. Private-repository GitHub Pages entitlement is unknown; do not make repository public or upgrade plans without owner authorization.

Gate 1 decision update: owner said “oke đã merge gate 1”; PR #1 merge confirmed at 28845004beed126eb72d4bbbd70c94b2835c39fa. DEC-003/004/005 proposals are accepted within v0.1 scope; DEC-006 stays a Gate 2 motion proposal. Actual Figma authoring is quota-blocked; see ../design/figma-blocker.md.

## DEC-007 — Browser design review (owner confirmed)

2026-10-15: Owner temporarily defers Figma/Penpot and authorizes Astro browser preview ("Oke triển đi"). This changes the Gate 2 review medium only. Editable external design deliverables are deferred, not completed. Gate 2 approval, owner UAT and release approval remain pending. See ../design/preview-review.md.

## DEC-008 — Minimal homepage (owner-directed)

2026-10-15: Owner requests extreme simplification: move logo typing to the headline, reserve former logo box for future short setup GIF/video, and retain only the five workflow stages below. Removes feature/tool/installation/extra CTA sections from the design scope. FR-002 becomes stage names; FR-003 links official setup docs rather than embedding steps. Reduced/no-JS headline stays static “nothing unnecessary.”. Future recording is deferred. This authorizes the revision, not Gate 2 acceptance or release. See ../design/preview-review.md v0.2.
