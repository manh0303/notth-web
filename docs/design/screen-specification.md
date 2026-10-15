Version: 0.1-design-draft | Status: FIGMA AUTHORING BLOCKED | Date: 2026-10-15

# Screen and interaction specification

Basis: Gate 1 approved v0.1 at main 28845004beed126eb72d4bbbd70c94b2835c39fa. This is a design proposal for Gate 2, not a created Figma UI. Framework facts stay pinned to the source register until content revalidation.

## Locked design inventory

Three complete homepage frames: SCR-001 desktop 1440px, SCR-002 tablet 768px, SCR-003 mobile 375px. Additional SCR-004 mobile menu-open state and SCR-005 reduced-motion brand specimen. Planning: sitemap and low-fidelity desktop/mobile wireframes. Foundations: colors, typography, spacing and radii. Components: wordmark, button, navigation link, workflow step, feature row and installation code panel, with relevant states. Motion storyboard and clickable prototype where supported.

## Proposed visual layout

Premium editorial developer-tool aesthetic: near-black canvas, off-white typography, thin neutral dividers and restrained violet. No stock illustrations, fake terminal execution, testimonials, invented user counts or card grid filling every section. Generous whitespace; purposeful typography; content hierarchy carries the composition.

| Region | Desktop proposal | Tablet / mobile proposal | Trace |
| --- | --- | --- | --- |
| Header | Max-width 1200, 80px tall; left wordmark; Features, Workflow, Docs; Get started action | 768: compact links; below 640: wordmark + 44px menu control; expanded menu includes every essential destination | FR-001, FR-004, NFR-001/002 |
| Hero | 120px top space; left-aligned 88px headline “Nothing unnecessary.”; supporting copy max 600px; actions; large reserved brand-motion specimen on right | 64px / 48px display; stacked content, 24px mobile gutters, actions wrap; wordmark specimen below text | FR-001, FR-005 |
| Features | Heading “A clear path from intent to review.”; three numbered editorial rows with thin dividers | Same content stacked; no horizontal scrolling | FR-002 |
| Workflow | Five steps: Requirements, Design, Code, Test, Review; concise output per step; explicit human/host boundary | 768: wrap without changed order; 375: vertical numbered list | FR-002, NFR-001 |
| Install | Two columns: prerequisites/source status on left; selectable reviewed-source command panel on right | Stack prerequisites before full-width command panel; wrap explanatory text, preserve readable code | FR-003 |
| Docs CTA | “Go deeper. Keep it simple.” and official docs/GitHub links | Stacked links, same hierarchy | FR-004 |
| Footer | Wordmark, tagline, official source/docs/license links | Stack with large enough touch targets | FR-001, FR-004 |

Copy proposal: “Reusable workflows for building software with your AI coding tool.” Supporting copy explains requirements, design, code, tests and review, not an autonomous hosted runtime. Feature rows: source-backed workflows, optional stack adapters, project-owned context and evidence; validate final text against the pinned framework.

Install panel must state source/offline path while npm availability is unverified. Content example uses `node /path/to/reviewed/notth/bin/aih.js init --host codex --adapters astro --capabilities uiux,product,architecture,delivery`; label the placeholder path and instruct visitors to download/review source outside the target project, run in target project root, Node 22+. First-session prompt links/quotes harness-start. This is proposed website content, not an executed visitor install tutorial.

## Interaction/state behavior

- Primary action → #install. Docs/source use verified official URLs. Static anchor links work without JS.
- Mobile menu: default closed, click/Enter/Space toggle, aria-expanded, Escape closes and restores focus, destination click closes. No modal/focus trap needed for a disclosure navigation. Default no-JS navigation remains exposed.
- Button/link: default, hover, pressed, focus-visible. Primary button violet fill/dark text; secondary neutral border. No disabled/loading state without a real blocked/pending action.
- Optional copy command: default, copied, manual-copy failure. Keep selectable text; aria-live announces actual outcome. Do not animate clipboard success without a successful clipboard call.
- Static site has no account/data forms, API loading, empty data or permission-denied screens. Those states are not applicable.
- Motion is decorative, one play per page load proposed; no scroll-triggered content hiding; reduced motion disables typing and caret blink. Gate 2 must approve proposed timings.

## Review checks once authoring is available

Check frame readability, text clipping/overlaps, font names, shared component instances, variable bindings, contrast, keyboard intent, minimum touch targets and complete content across all three viewports. Return actual node IDs, rendered composition evidence and exceptions. No screenshot substitutes for editable Figma objects.
