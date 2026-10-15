# Release checklist — owner approval required

- [x] Gate 1 requirements and Gate 2 minimal design approved/merged.
- [ ] Gate 3 UAT checklist reviewed and explicitly accepted by owner, including remaining manual cases/limitations.
- [ ] Production PR CI green at reviewed SHA; owner merges.
- [ ] Confirm repository plan/visibility supports Pages and Settings → Pages → Source is GitHub Actions.
- [ ] Review github-pages environment restrictions; enable owner required review if supported by repository plan.
- [ ] Owner explicitly approves publication of full main SHA and records Gate 3 approval URL.
- [ ] Owner dispatches “Publish approved website” on main with that SHA and UAT reference; no push-triggered publication.
- [ ] Verify successful deployment job and URL https://manh0303.github.io/notth-web/.
- [ ] On live URL verify HTML and asset HTTP status, title/canonical/social metadata, robots/sitemap/favicon, motion and reduced motion, layout and every official link. Record deployment URL/run ID/commit/time/screenshots in production-verification.md.
- [ ] Mark release complete only after actual production verification; hand over.

Workflow source: .github/workflows/ci.yml and pages.yml. Actions are pinned to upstream tag SHAs inspected during preparation. Publication runs verification again and uses its exact static artifact. Inputs are passed via environment variables, not interpolated as shell code. The UAT reference is an owner attestation, not an automated authenticity check.

Rollback: owner approves a revert PR for the defective release, CI validates it, then explicitly dispatches the reviewed revert main SHA. Keep deployment and previous commit references. Never force-push main or auto-rollback someone else's work.
