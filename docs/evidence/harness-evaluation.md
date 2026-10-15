Version: 0.1 | Status: PENDING OWNER REVIEW | Owner: Nguyễn Đức Mạnh | Date: 2026-10-15

# Harness evaluation and recovery checkpoint

Framework source: manh0303/notth@11d662c9064cc989373e36b8c546cfb323a9b023 (package metadata 0.17.0).

## Actual execution

- Inspected official README, AGENTS.md, getting-started, architecture/versioning, harness-start and installed Core/Product workflows/templates/role contracts.
- Node v24.19.0. Registry probe: `npm view @manhd_d/notth version --fetch-retries=0 --fetch-timeout=15000` → E404. This environment could not verify a published npm package.
- Official source cloned outside target; no framework modifications. `node notth-source/bin/aih.js init --target notth-web --host codex --adapters astro --capabilities uiux,product,architecture,delivery` from the parent workspace succeeded.
- Installed distribution metadata 0.17.0 at pinned source SHA; this is a source snapshot, not proof of released npm 0.17.0.
- Core Testing roles/skills included; no standalone testing capability offered by CLI. Product/Architecture/Delivery/UIUX installed; only relevant Product roles/skills and Core onboarding loaded so far. No separate agent processes launched, no model-route compliance claimed.
- `start --compact --host codex` returned orientation. First `seed --check` reported missing/stale knowledge, as expected. `seed` emitted a plan. `start --goal idea --task ...` saved current task. User's supplied destinations/stack/gates reused without redundant questionnaire.
- Product workflow: intake → provisional brief/BRD/PRD/SRS → stories/AC → traceability → same-agent document review → owner gate. Independent QA not performed; no gate self-approval.
- Figma whoami authenticated; team reported View seat. New Design file creation succeeded; use_figma read fonts/page and renamed page 0:1. File write access established; UI composition and prototype support untested.
- GitHub connector read both repositories, created feat/product-baseline. Private shell clone failed for missing credentials; connector Git API used for publication. No bypass or visibility change.

## Status and limitations

Requirements baseline drafted, Gate 1 PENDING. Figma workspace exists but no UI designed. Application scaffolding, Playwright, axe, Lighthouse, visual regression, UAT and deployment: NOT_RUN, blocked by downstream approval stages. No owner acceptance, merge or release occurred.

Source npm availability and private repo Pages eligibility require later rechecks. Harness contracts help structure work but do not execute models, Figma, browsers or approvals. Source metadata can match a release version while main contains unreleased changes; persist source SHA alongside version.

Suggested framework improvement: add a registry availability preflight/example, make source version vs release provenance prominent, and document connector-backed Git synchronization for private repos. No upstream changes authorized or made.

## Recovery / next executable step

Canonical branch: feat/product-baseline in manh0303/notth-web. Read docs/product/README.md, decision-log.md and this checkpoint; inspect actual branch revision before writing. Reconcile managed snapshot using the same pinned NOTTH source SHA and run check, not an unverified new npm download.

Next: obtain explicit owner Gate 1 approval of requirements v0.1. Then load installed UIUX workflow/figma-design skill and Figma generate-design/generate-library guidance; inspect existing Figma page before creating editable wireframes/tokens/components/responsive UI. Gate 2 review follows. Never infer approval from elapsed time.

Pending work: all Figma design artifacts; technical design/ADRs; Astro implementation; formal QA/UAT cases and actual evidence; Pages workflow/config/entitlement; owner UAT/release approvals; live production verification/handover.

## Executed integrity/context verification

- `check`: status ok, version 0.17.0, no integrity problems; raw report harness-check.json.
- `doctor`: status ok, no configuration problems; raw report doctor.json. Presence/configuration inspection only, not app QA.
- `seed --record` then `seed --check`: current, no changed declared sources; raw reports seed-record.json and seed-check.json. Only declared local source freshness established.
- One draft artifact-config validation failed (`Invalid write policy: inputs/framework`) after using `read`; corrected to documented `read-only`, then check/doctor passed. No framework files modified.
