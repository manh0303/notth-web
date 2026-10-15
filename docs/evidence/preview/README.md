# Gate 2 prototype verification — 2026-10-15

Scope: browser design prototype, not release acceptance. Node 24.19.0; Astro 7.3.8; Playwright 1.51.1; Chromium 134; axe 4.14.0. Static `dist/` served under `/notth-web/` by scripts/serve-build.mjs, automatically started/stopped by Playwright. No backend or mocked application data; clipboard denial is deliberately simulated in its negative test.

| Execution | Result | Evidence |
| --- | --- | --- |
| npm run check | PASS, 0 errors/warnings/hints | typecheck.log |
| npm run build | PASS, one static page | build.log |
| npm run test:e2e | PASS, 11/11 | playwright.json, test-run.log |
| 375/768/1440px | No overflow; loaded assets; no page errors; axe no serious/critical violations | viewport PNGs + layout tests |
| Motion | Expected 7 strings, 500ms pause under controlled clock, stable stage bounds | motion test |
| Keyboard/clipboard/no-JS | Menu Enter/Escape/focus; actual clipboard success; simulated failure fallback; no-JS links | named tests |
| Portable HTML | Real file URL opens, fonts/styles render, final animation text observed | offline export test, desktop-hero.png |
| Harness check/doctor/seed | PASS after local config corrections | harness-*.json |

Visual self-review inspected desktop/mobile full-page images and final hero. Fixed ARIA roles for logo labels and removed mobile decoration overlapping the docs heading. Initial failed app results retained in playwright-initial-defects.json and playwright-mobile-defect.json. Initial browser/server environment blocks retained separately; these were not app passes. The motion clock originally kept running between assertions; pausing before navigation fixed the test's timing baseline.

Harness initially rejected a file path for an output directory, then a string rather than structured approved_deviations entry. Both project-owned configurations were corrected; managed Harness files were untouched. Suggest clearer error messages/examples for these schemas.

Limits: equivalent 720px reflow is not a manual 200% browser zoom test. Screenshots are review evidence, not an approved visual-regression baseline. Whole-site manual keyboard/screen-reader tests, WebKit/Firefox/current Chrome, real-time timing under load, production external-link verification and Lighthouse remain NOT_RUN for the production phase after Gate 2. No editable external design comparison exists. No CI run, deployment or owner acceptance is claimed.

Historical failed-run JSON files are preserved in prior-runs.zip in GitHub; the latest playwright.json is the final passing run. Font license notices ship in public/font-licenses.txt and are embedded in the portable HTML.
