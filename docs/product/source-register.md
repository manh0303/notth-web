Version: 0.1 | Status: PENDING OWNER REVIEW | Owner: Nguyễn Đức Mạnh | Date: 2026-10-15

# Source register

| ID | Source / revision | Authority / observations |
| --- | --- | --- |
| SRC-001 | Owner request “NOTTH WEB — Full Software Development Lifecycle”, 2026-10-15, retained in this project's brief/requirements | Product scope, brand, logo sequence, stack and three approval gates |
| SRC-002 | [README](https://github.com/manh0303/notth/blob/11d662c9064cc989373e36b8c546cfb323a9b023/README.md) | Verified workflow and hosts; host executes models/tools |
| SRC-003 | [Getting started](https://github.com/manh0303/notth/blob/11d662c9064cc989373e36b8c546cfb323a9b023/docs/getting-started.md) | Source/offline fallback and harness-start instructions |
| SRC-004 | [Architecture](https://github.com/manh0303/notth/blob/11d662c9064cc989373e36b8c546cfb323a9b023/docs/architecture.md), package.json, AGENTS.md, docs/versioning.md at same SHA | NOTTH is instructions/workflows + installer; separate opt-in conformance driver; not a model runtime |
| SRC-005 | npm CLI probe 2026-10-15: `npm view @manhd_d/notth version --fetch-retries=0 --fetch-timeout=15000` | Observed E404 in this environment; public package availability not established |
| SRC-006 | Figma whoami + create_new_file + use_figma, 2026-10-15 | New design file eAPVui9EUPPdsQCdpfICEJ created; canvas read and page rename succeeded despite View seat reported |
| SRC-007 | Website README and initial commit bc981c138a7570f8c8ad7e7a2caa3a4f3279290a | Existing repository contains README only; private; connector read/write accessible; shell clone lacks credentials |

FACT: Framework source: manh0303/notth@11d662c9064cc989373e36b8c546cfb323a9b023 (package metadata 0.17.0).

INTERPRETATION: official developer-tool visitors need an honest explanation, a working setup path and direct access to docs. No user interviews or conversion data collected.

PROPOSALS: English-only first release; section order; performance thresholds. These need owner approval with the baseline.

Revalidate framework revision and package availability immediately before content freeze and release. This snapshot does not establish future registry availability.
