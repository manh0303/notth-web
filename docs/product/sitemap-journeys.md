Version: 0.1 | Status: PENDING OWNER REVIEW | Owner: Nguyễn Đức Mạnh | Date: 2026-10-15

# Sitemap and user journeys

Proposed structure:

| Destination | Content / action | Requirement |
| --- | --- | --- |
| /notth-web/ | Header, brand hero, Get started, GitHub | FR-001 |
| #features | Source-backed features and host/adapter boundaries | FR-002 |
| #workflow | Requirements → Design → Code → Test → Review | FR-002 |
| #install | Verified install + prerequisite + first-session instructions | FR-003 |
| #docs | Official docs and source actions | FR-004 |
| Footer | Tagline, official links, verified license reference | FR-001, FR-004 |

Journey J-001 (new visitor): homepage → understand value → features/workflow → install → follow source/offline path → invoke harness-start → official docs if needed. The website does not execute installation; any executable tutorial verification is performed in a disposable project.

Journey J-002 (returning user): header Docs → official repository docs; no redundant local docs tree.

Journey J-003 (mobile/keyboard): skip link → primary content → reachable section navigation/actions → visible focus; optional collapsed menu exposes accessible state.

Journey J-004 (motion sensitive): initial static brand → prefers-reduced-motion avoids typing/blinking → same content/actions.

Low-fidelity frames and responsive information hierarchy start after Gate 1. High-fidelity frames/components/states and prototype follow in the same editable Figma file. Proposed English UI, pending owner approval.
