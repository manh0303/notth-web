---
schema_version: 1
stack:
  language: TypeScript
  framework: Astro
build:
  tool: unknown
approved_deviations: []
sources:
  - AGENTS.md
  - docs/product/README.md
  - docs/product/srs.md
  - docs/product/source-register.md
  - docs/product/decision-log.md
---
# NOTTH Web

New product; existing upstream README only. User-selected Astro/TypeScript/CSS, GitHub Pages at /notth-web/. No app manifest/build yet; do not invent installed Astro version or test commands.

Requirements in docs/product, editable UI canonical in Figma eAPVui9EUPPdsQCdpfICEJ, code/tests/evidence in this repository. Framework manh0303/notth is read-only, pinned in source-register.md.

Gate 1 PENDING; do not start UI design before owner requirements sign-off. Gate 2 before production UI completion; Gate 3 owner UAT acceptance. No automatic merge/release/deploy. English-only MVP and numeric quality targets are proposals.

CLI source/offline invocation: node /path/to/reviewed/notth/bin/aih.js. Registry E404 observed. Use pinned source SHA in evidence, not a guessed npm version. Core tests cover instructions only, never substitute for site tests.

Loaded Product PRD/SRS/stories/AC/traceability/document-review skills; BA/PM/PO role contracts in one host. Independent QA NOT_RUN. Recovery in docs/evidence/harness-evaluation.md.
