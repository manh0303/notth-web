# Production candidate — executed verification

Scope: Gate 2-approved minimal v0.2. Owner UAT and actual publication are pending. Code tested: head 5b0e20da07833758bc43f974c12dc7b974c8554f; GitHub PR merge test ref 23ed2579effff9a856768b1e9d852930921e1d7d. Later evidence/documentation commits do not change this tested application source.

## GitHub runner evidence

[CI run 38755808090](https://github.com/manh0303/notth-web/actions/runs/38755808090), job 116493788482, completed SUCCESS. The actual artifact was downloaded, SHA-256 verified and retained as ci-qa.zip (31fca1ad7c577fba23d0914867aef17ec20a38915744a1209dce8ce3bc97cf79), so raw evidence remains available after Actions retention expires.

| Actual check | Result | Evidence |
| --- | --- | --- |
| npm ci / audit / check / build / export | PASS; no dependency vulnerabilities, no type errors; static assets generated | CI job and raw archive; local final logs/audit JSON |
| Browser E2E | **35 passed, 4 deliberately skipped, 0 failed/flaky** | ci-playwright.json, ci-test-summary.json |
| Browser coverage | Chromium 141, Firefox and WebKit: 11 semantic/interaction cases each; Chromium also 2 visual regressions | Per-project results in raw Playwright report |
| Visual regression | 375/1440 Chromium matches owner-approved Gate 2 screenshots (0.5% pixel tolerance); no baseline refresh | tests/visual.spec.ts and pinned snapshots |
| Skips | Only Firefox/WebKit visual baselines are absent: 2 sizes × 2 engines; their semantic suites passed | Explicit skipped test records |
| Lighthouse mobile | Three separate runs: 100 Performance / 100 Accessibility / 100 Best Practices / 100 SEO each; all medians 100 | ci-lighthouse-summary.json, full JSON+HTML inside ci-qa.zip |
| Official external destinations | Source, docs, setup guide, MIT: all HTTP 200 via real TLS-validated GET | official-links.json |
| Harness report | Schema/digests validated; overall BLOCKED intentionally for pending manual owner/live gates | harness-report.json, harness-report-validation.json |

Tests cover actual public built UI under /notth-web/: sizes 375/768/1440, expected minimal content, keyboard focus/order, no-JS, reduced/live preference, seven motion strings with exact controlled 500ms pause and real-time 450–650ms tolerance, stable heading/media, metadata/sitemap/robots/favicon/social assets, runtime and asset errors. Axe checks WCAG-tagged serious/critical violations. The site has no backend or mocked service; setup video is explicitly a future placeholder. No assistive-tech or real-device coverage is inferred.

## Local evidence and recovery

Local Chromium: 13/13 pass (chromium-final.log, playwright-final.json); three local mobile Lighthouse runs also all 100 (lighthouse/summary.json, lighthouse-raw.zip). Typecheck-final.log has 0 errors/warnings/hints. npm-audit.json has zero vulnerabilities after updating to Playwright 1.56.1 and Lighthouse 13.5.0 with pinned lockfile.

The earlier Playwright 1.51.1 browser-download advisory and an intermediate old Lighthouse tool dependency graph were removed by reviewed tooling updates. Local Firefox launches but page/context creation stalls; WebKit cannot start due missing shared libraries, and host package installation was denied by OS capabilities. These are BLOCKED local checks, not product PASS. Raw browser-install/system-deps/WebKit/Firefox diagnostic logs are retained. An initial multi-browser local run was interrupted after those stalls; it is not a complete test result. Switching the no-JS test to runner-owned context avoids a leaked additional context. CI with installed supported libraries passes all semantic suites, resolving release-candidate browser coverage without hiding local limitations.

## Remaining gates / limits

Actual browser UI 200% zoom and manual assistive-tech reading are NOT_RUN; owner UAT cases UAT-11/12 record these. Equivalent 720px reflow is supplementary only. All scores are local-origin mobile simulation, not production hosting measurements. The actual Pages URL, deployment permissions/settings and live runtime are NOT_VERIFIED until specifically approved publication. Gate 3, further merge and release approval remain owner-controlled. External editable design and actual setup recording remain deferred under approved scope.
