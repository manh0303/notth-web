# NOTTH website handover — Gate 3 candidate

Owner-approved Gate 2 design is implemented as a static Astro/TypeScript/CSS site. PR #3 contains production hardening; owner UAT, merge and publication are pending. GitHub is canonical. No framework repository changes.

Review docs/qa/uat-checklist.md and docs/evidence/production/README.md. The portable preview docs/design/notth-preview.html embeds current production markup/styles/scripts/fonts. Browser design references SCR-001/002/003 and motion specification are in docs/design; external editable design and actual setup recording remain explicitly deferred.

Code map: index.astro composes minimal hero/workflow; Header/Wordmark and BrandMotion are reusable components; Base contains metadata; sitemap.xml.ts and robots.txt.ts are build-time static routes; global.css owns tokens/responsive rules. No backend, framework hydration, account or secret. fonts and license notices are local. Static output lives in dist with /notth-web/ base URLs.

Operations: README for local commands; maintenance.md for updates; release-checklist.md for owner-controlled Pages setup, dispatch and rollback. CI verifies build/browser/audits without publishing. Pages publication is manual-only for the repository owner/main/exact approved SHA with a UAT reference; setup and environment protections must be confirmed before dispatch.

Known limitations: setup video and Figma/Penpot are deferred; manual real-browser 200% zoom and assistive-tech review need owner results; local Firefox/WebKit limitations are resolved for candidate coverage by successful GitHub CI (35 passed, 4 deliberate visual-only skips). Actual production URL has not been deployed/verified. No owner UAT approval is implied by automated tests.

Next executable step: reconcile final PR CI and evidence, then owner completes Gate 3 checklist. Following approval, record the accepted candidate and only carry out merge/publication if separately authorized. After deployment, complete production-verification.md and mark release complete.
