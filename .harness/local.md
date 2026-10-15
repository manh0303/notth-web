---
schema_version: 1
stack:
  language: TypeScript
  framework: Astro
build:
  tool: npm
approved_deviations:
  - id: browser-design-review
    rule: Editable Figma/Penpot design before Gate 2
    reason: Owner approved browser prototype while external editable design is temporarily deferred.
    source: docs/design/preview-review.md
sources:
  - AGENTS.md
  - docs/product/README.md
  - docs/product/srs.md
  - docs/product/source-register.md
  - docs/product/decision-log.md
---
# NOTTH Web

New product; existing upstream README only. User-selected Astro/TypeScript/CSS, GitHub Pages at /notth-web/. Astro 7.3.8 static prototype now exists; npm run check, npm run build, npm run test:e2e.

Requirements in docs/product, Gate 2 UI prototype canonical in src/ and docs/design/preview-review.md; Figma/Penpot temporarily deferred, code/tests/evidence in this repository. Framework manh0303/notth is read-only, pinned in source-register.md.

Gate 1 APPROVED 2026-10-15; docs/product/gate-1-approval.md records owner sign-off and merged main revision. Owner authorized the browser prototype; external UI history remains in docs/design/figma-blocker.md. Gate 2 before production UI completion; Gate 3 owner UAT acceptance. No automatic merge/release/deploy. English-only MVP and numeric quality targets were approved at Gate 1.

CLI source/offline invocation: node /path/to/reviewed/notth/bin/aih.js. Registry E404 observed. Use pinned source SHA in evidence, not a guessed npm version. Core tests cover instructions only, never substitute for site tests.

Loaded Product PRD/SRS/stories/AC/traceability/document-review skills; BA/PM/PO role contracts in one host. Independent QA NOT_RUN. Recovery in docs/evidence/harness-evaluation.md.

Current design scope v0.2: headline typing + future setup-video placeholder + five workflow names only; see DEC-008 and docs/design/preview-review.md. Installation/docs external; no menu/clipboard. Current evidence docs/evidence/minimal, earlier preview evidence historical. Gate 2 APPROVED in docs/product/gate-2-approval.md; main ca850a1d8c6f7ca4e7bd79b1dca58045ce89f7fc. Gate 3 pending.
