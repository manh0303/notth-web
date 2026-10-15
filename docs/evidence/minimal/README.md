# Minimal design v0.2 — executed checks

Date: 2026-10-15. Scope: owner-directed Gate 2 revision; not production acceptance.

Node 24.19.0, Astro 7.3.8, Playwright 1.51.1, Chromium 134, axe 4.14.0. Tests exercise the actual static build with no backend or mocked service. The future video is an explicit placeholder, not a tested setup recording.

- npm run check: PASS, 0 errors/warnings/hints (typecheck.log).
- npm run build: PASS, one static page (build.log).
- npm run test:e2e: PASS, 9/9 (playwright.json, test-run.log).
- 375/768/1440: no horizontal overflow, expected minimal sections/links, no loaded-asset/page errors, axe no serious/critical WCAG-tagged violations; screenshots are named by viewport.
- Headline: seven strings, exact 500ms pause under paused controlled clock; stable h1 bounds and media position.
- Reduced motion: readable static final tagline, hidden caret.
- Mobile keyboard: skip link → home → Docs → GitHub → Get started. No hidden mobile navigation.
- No-JS: tagline, five stages, Docs and setup-guide link remain available.
- 720px reflow equivalent: no overflow; this does not replace manual browser zoom testing.
- Portable HTML: opens via file URL, fonts render and headline animation reaches final word (desktop.png).

Visual self-review inspected desktop and mobile screenshots. No editable external design, approved visual-regression baseline, manual screen-reader coverage, cross-browser/current Chrome, Lighthouse, actual setup video or production verification is claimed. Previous preview/ evidence describes superseded v0.1 controls and is historical.
