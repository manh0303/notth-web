Version: 0.1 | Status: PENDING OWNER REVIEW | Owner: Nguyễn Đức Mạnh | Date: 2026-10-15

# Software Requirements Specification

## Purpose and system context

Scope: PRD-001–PRD-004; static official website. Actors: visitor, returning developer, project owner. External systems: GitHub documentation/source, npm metadata checked during release preparation, Figma design authoring, GitHub Actions/Pages delivery. Visitors receive static assets; no backend, auth or personal data interfaces.

## Functional and non-functional requirements

All rows are draft proposals derived from SRC-001 and inspected framework evidence. Stable IDs are never renumbered; retired requirements retain history.

| ID | Behavior and observable outcome | Linked PRD / story | Business source | Authority |
| --- | --- | --- | --- | --- |
| FR-001 | Visitor sees NOTTH, “Nothing unnecessary.”, one concise value proposition and discoverable Get started / GitHub actions. Static wordmark distinguishes the two t letters. | PRD-001 / US-001 | BR-001 | SRC-001 |
| FR-002 | Features and Requirements → Design → Code → Test → Review match the pinned framework source. Explain that the host executes tools/models; adapters do not force architecture or a project domain. | PRD-001 / US-002 | BR-001 | SRC-002, SRC-004 |
| FR-003 | Show Node.js 22+ prerequisite, run from target project root, Codex/Astro/UIUX options and first-session harness-start. While npm E404 persists, prominently offer reviewed source/offline steps with placeholders clearly labeled. Do not present npx as verified. Recheck before release. | PRD-002 / US-003 | BR-002 | SRC-003, SRC-005 |
| FR-004 | Navigation, documentation and GitHub actions reach existing sections or verified official URLs. If external help is unreachable, keep its destination visible; do not claim remote service availability. | PRD-002 / US-004 | BR-002 | SRC-001, SRC-002 |
| FR-005 | Start notth; backspace h → nott, backspace t → not; pause 500ms; type h,i,n,g → nothing. Static wordmark uses distinct t treatments; reserve width for nothing; caret follows text without moving surrounding layout. Reduced motion shows a static notth with no typing or blinking. | PRD-003 / US-005 | BR-003 | SRC-001 |
| NFR-001 | No horizontal overflow or hidden essential actions at 375, 768 and 1440 CSS px. Include keyboard-operable mobile navigation if navigation collapses. Layout remains usable at 200% zoom. | PRD-003 / US-006 | BR-003 | SRC-001; sizes are proposals |
| NFR-002 | Proposed WCAG 2.2 AA baseline: semantic landmarks, logical headings, visible focus, keyboard access, text contrast, skip link and reduced motion. Automated axe checks have no serious/critical violations; manual keyboard checks remain required. | PRD-003 / US-006 | BR-003 | SRC-001; criteria are proposals |
| NFR-003 | Astro static output under /notth-web/, meaningful title/description/canonical/OG, favicon, sitemap and robots; no browser/build errors. Proposed production Lighthouse mobile performance ≥90 and accessibility/SEO ≥95, median of 3 runs with tool/version/config retained. Scores supplement manual checks. | PRD-004 / US-007 | BR-004 | SRC-001; numeric targets are proposals |
| NFR-004 | Requirements map to actual Figma nodes, components and executed tests. Preserve desktop/tablet/mobile editable frames, tokens, reusable components, states, responsive and motion handoff; clickable prototype if supported, otherwise record limitation. Gate 1/2/3 decisions remain pending until owner sign-off. | PRD-004 / US-008 | BR-004 | SRC-001 |
| NFR-005 | Feature-branch work; GitHub Actions builds/deploys Pages only within approved release scope. Record actual target URL verification, known issues, maintenance, rollback and handover. Do not auto-merge, auto-release or mark accepted. | PRD-004 / US-008 | BR-004 | SRC-001 |

## Interfaces, states and failure behavior

Homepage routes: proposed /notth-web/ plus #features, #workflow, #install, #docs. Canonical https://manh0303.github.io/notth-web/. External docs https://github.com/manh0303/notth/blob/main/docs/README.md; source https://github.com/manh0303/notth. Validate destinations at implementation and release.

Optional copy-install control: if included, success is announced accessibly; clipboard failure leaves selectable command text and an honest manual-copy instruction. Navigation works with JavaScript disabled; motion failure leaves static readable brand. No loading spinners or invented app states for static content.

Animation timing proposal apart from mandated 500ms pause: hold initial 1200ms; delete at 120ms/character; type at 140ms/character; hold final 1800ms; play once per page load unless owner accepts looping at Gate 2. Visually identical static fallback from first paint. Decorative animated text is hidden from assistive technology; accessible name remains NOTTH.

No numerical layout-shift claim until measured; AC requires reserved wordmark width and no displacement of surrounding content. Timing test tolerance proposed ±50ms for the 500ms pause in a controlled browser with evidence of the actual sequence.

## Review/handoff

See acceptance-criteria.md and traceability.md. UI/UX and engineering artifacts pending. Owner approval/date pending. OpenSpec implementation delta will be created after approved scope; no structural readiness claim yet.
