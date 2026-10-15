# Maintenance

Use Node 24 and npm ci. Local iteration: npm run dev; static output: npm run build. QA and portable preview commands are in README. Keep minimal copy, CSS tokens and animation timings aligned with the approved design. No secret or external service is required.

Official framework docs/source remain external. Before changing setup claims, inspect current official framework docs and npm availability. Keep dependency updates in reviewable PRs, run audit/type/build/browser/Lighthouse, and update browser binaries for the pinned Playwright version. Preserve font licenses. Review Actions SHA updates against upstream releases.

When an actual setup video is available, review its content, add a poster/dimensions and accessible playback/captions as applicable. It is currently a placeholder, not a failed or delivered recording. External editable design is deferred by owner decision.

Do not refresh screenshot baselines to hide a regression. Only approve new baselines after owner design review. All owner-controlled publication/rollback steps are in release-checklist.md.
