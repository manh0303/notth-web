# QA plan — approved v0.2

Baseline: Gate 2 merge ca850a1d8c6f7ca4e7bd79b1dca58045ce89f7fc. Static English homepage; no backend, data entry, account, analytics or recording. Tests exercise the build under /notth-web/. No API/unit suite is invented for static markup.

| Requirement / AC | Case / method | Evidence |
| --- | --- | --- |
| FR-001 / US-001 | Hero, static wordmark two t treatments, action visibility, approved composition | 375/768/1440 browser checks, axe, Gate 2 screenshot regression |
| FR-002 / US-002 | Ordered five labels, accurate minimal claims; inspect pinned framework README | Browser stage assertion + source review |
| FR-003 / US-003 (DEC-008) | Get started points to official guide; verify source exists and no unverified npm instructions shown | Link/SEO test, source-link evidence |
| FR-004 / US-004 | Home/docs/GitHub/license links, keyboard and no-JS navigation | Cross-browser checks; external source verification |
| FR-005 / US-005 | Seven strings, 500ms pause, stable heading/media, reduced/no-JS/live preference | Controlled clock plus real-time mutation observation (pause tolerance 450–650ms) |
| NFR-001 / US-006-01 | Desktop/tablet/mobile and reflow | 375/768/1440, 720 equivalent; actual browser 200% zoom is owner manual UAT |
| NFR-002 / US-006-02 | Semantics, contrast, focus, keyboard, motion | axe WCAG 2 tags + focus assertions; screen-reader manual review remains owner UAT |
| NFR-003 / US-007 | Build/errors/assets/base/metadata/robots/sitemap/social card | Typecheck/build/browser; three mobile Lighthouse runs, median P≥90/A≥95/SEO≥95 |
| NFR-004 / US-008-01 | Approved browser design→components→tests→raw evidence | Traceability, source digests, Gate 3 table |
| NFR-005 / US-008-02 | Owner-controlled merge/UAT/publication | Manual-only Pages workflow, exact SHA/owner/ref guards, checklist and handoff |

Run npm ci, npm run check, npm run build, npm run export:preview, npx playwright install --with-deps chromium firefox webkit, npm run test:e2e, npm run audit:lighthouse, npm audit. Test browser processes and static fixtures are owned and cleaned up by the runner. No external mocks; future video is explicitly absent.

Runtime PASS is separate from owner UAT. Browser installation/OS permission errors are BLOCKED, not a failed product assertion or PASS. Only Chromium/Linux has owner-approved visual baselines; other engine visual comparisons are deliberately skipped, while semantic/interaction suites still run where supported. Reports must state actual cross-browser execution. Production origin tests wait for approved publication. No automatic baseline updates.
