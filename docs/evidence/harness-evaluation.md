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

## Gate 1 continuation — 2026-10-15

Owner said “oke đã merge gate 1”; PR #1 merge confirmed at main 28845004beed126eb72d4bbbd70c94b2835c39fa. Prior Gate 1 pending statements above are historical; requirements v0.1 are now owner approved.

Loaded installed UIUX requirements-analysis/user-flow/screen-planning/design-system/figma-design/design-review and docs-to-figma instructions; reused accepted IDs and destinations. Loaded Figma use/generate-design/generate-library/use-motion skills and relevant authoring references.

Actual Figma canvas inspection succeeded; fonts and subscribed libraries retrieved. Search hit Starter MCP limit. whoami confirmed Starter/View. Official rate-limit docs describe write exemptions; one authorized use_figma foundations write was attempted and also quota-blocked. No created object IDs returned. Detailed evidence in figma-quota.json; no editable UI created. No retries/bypass after write rejection.

Prepared screen inventory, responsive/state plan, proposed brand foundations and motion choreography in docs/design. Proposed palette contrast was calculated; this is math only. Design-system asset search incomplete; no assertion that libraries are empty. Figma authoring and visual/prototype validation BLOCKED. Production code/browser QA/UAT/deployment NOT_RUN.

Current checkpoint: feat/figma-design-baseline; Gate 2 not ready. Next executable action requires restored permitted Figma quota/access. Read docs/design/figma-state.json and figma-blocker.md, inspect actual file before retrying; then author/verify editable designs and request owner Gate 2 approval. Requirements approval need not be requested again. No framework modifications, merge or release.

## Browser prototype checkpoint — 2026-10-15

Owner authorized temporarily deferring Figma/Penpot and reviewing an Astro browser prototype. Gate 1 main still 28845004beed126eb72d4bbbd70c94b2835c39fa; PR #2 was open/draft at intake. Installed Harness remains 0.17.0 from source revision 11d662c9064cc989373e36b8c546cfb323a9b023; no framework modifications.

Loaded harness-start, foundations/security/permissions/conventions, Astro architecture/performance guidance, continuous-development, artifact-contract, spec-to-code, end-user-acceptance and harness-review. Roles performed sequentially; no claim of independent QA. `start --compact --host codex` and `seed --check` ran; initial freshness current. Added prototype, reusable components, native scripts, portable review export and Playwright checks. Gates remain separate from structural checks.

Recovery: latest Playwright 1.64.1 browser archive downloads were empty/invalid. Pinned 1.51.1 recovered using its official fallback mirror (Chromium 134); this browser is older and does not establish current cross-browser coverage. Sites supervisor reported ready but was unreachable from test process; Astro preview process exited in this host. Replaced test serving with a scoped static-build HTTP fixture owned by Playwright. No alternate production host or deployment was created. Initial environment failures retained in preview/*.json. Actual defects (ARIA roles, mobile decorative overlap/contrast) fixed; clock test corrected to pause the clock before navigation rather than letting real time drift during assertions.

Evaluation: Harness gave useful role/requirement/approval/recovery contracts. CLI orientation does not perform browser tests or enforce gates. Improvement: document a browser-preview exception and environment-specific evidence adapter for external design quota outages; clarify readiness versus owner acceptance. Source installation worked previously; npm still returns E404 on recheck. Figma/Penpot editable output remains DEFERRED, not successful integration evidence.

Next executable step: owner reviews docs/design/notth-preview.html and preview-review.md for Gate 2. On approval, complete production hardening, full QA, UAT, CI and specifically approved deployment. Current state: prototype prepared, not merged, not released, owner acceptance pending.

Final validation note: adding tests exposed missing Node typings and mixed Playwright-core types after recovery. Added pinned @types/node and a Playwright-core 1.51.1 override; final type check reports 0 errors/warnings/hints.

## Minimal revision checkpoint — DEC-008

Owner requested an extreme simplification. Reused Header/Wordmark/BrandMotion and Astro layout; moved animation into h1, replaced logo box with explicit future video placeholder, removed Install/clipboard/menu and unused CSS, retained five workflow labels. Updated current design/architecture/AC/traceability with scope delta rather than silently claiming the old requirements still apply. No new dependency. Current actual evidence: minimal/README.md (9/9 browser tests, typecheck/build). Gate 2 remains pending; PR #2 is the review destination. Next: owner reviews minimal prototype. No merge/deployment/release.

## Production / Gate 3 checkpoint — 2026-10-15

Gate 2 explicitly approved by owner; PR #2 merge ca850a1d8c6f7ca4e7bd79b1dca58045ce89f7fc verified. New feature branch feat/production-uat and PR #3. Harness 0.17.0 snapshot remains unchanged; framework repo never modified. Loaded Astro SEO/performance/deployment, verification/end-user-testing, delivery planning and sequential review guidance. Continued through approved design without a second requirements interview.

Added static discovery/social metadata, pinned patched QA tools, owner-initiated Pages workflow and CI. Local browser library/page-creation failures recorded and not relabeled PASS; supported GitHub runner resolves coverage. Actual run 38755808090: npm audit/check/build, 35 browser tests passed, four explicit visual-only skips, three Lighthouse mobile runs all 100. Downloaded artifact digest verified and retained in production/ci-qa.zip. Harness schema-1 report validated and correctly returns BLOCKED for manual zoom/AT, owner UAT and undeployed production surface. Host/runtime token/quota usage remains unknown; no fabricated savings or independent QA claims.

Evaluation: Harness supports source-linked gates/recovery/evidence contracts but does not run tests or authenticate owner approval. Existing report validation is useful for preserving pending acceptance alongside technical passes. Installation/browser package issues are host limitations; GitHub runner recovery was exercised. CI/owner-only/manual SHA guard protects against accidental push-triggered release, but owner UAT reference is still an attestation and environment protection must be configured by repository owner.

Next: owner completes docs/qa/uat-checklist.md (manual 200% zoom and assistive reading pending) and accepts or requests changes for Gate 3. Merge/publication require separate authorization. Production verification remains NOT_RUN. PR #3 contains source/config/evidence/handover; no release completion claim.

## Gate 3 approval checkpoint

Owner explicitly approved Gate 3; PR #3 merge confirmed at 7ea9812ea4e7d88baa7333d171568bcc830185a1. Updated acceptance/decision/handover records only. Existing runtime evidence/report remains historical and unchanged; no manual test PASS is inferred from blanket acceptance. Documentation sign-off branch docs/gate-3-signoff. Next executable action needs explicit authorization to merge documentation/publish, then live verification. No runtime test repeat for documentation-only edits.
