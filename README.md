# NOTTH Web

Official NOTTH website. Astro · TypeScript · CSS · GitHub Pages.

**Gates 1–3 approved. Publication pending.** Minimal homepage: animated headline, future setup-video frame and Requirements → Design → Code → Test → Review. Figma/Penpot and the actual recording are deferred by owner decision.

## Run locally

Node 24 and npm:

```sh
npm ci
npm run dev
```

## Verify

```sh
npx playwright install --with-deps chromium firefox webkit
npm run check
npm run build
npm run export:preview
npm run test:e2e
npm run audit:lighthouse
npm audit
```

Browser tests start their own static-build fixture. [Portable HTML preview](docs/design/notth-preview.html) opens locally without a server. [Actual CI evidence](docs/evidence/production/README.md): 35 browser tests passed, four visual-only skips; three mobile Lighthouse runs all 100.

[Requirements](docs/product/README.md) · [Approved design](docs/product/gate-2-approval.md) · [Gate 3 UAT](docs/qa/uat-checklist.md) · [Harness evaluation](docs/evidence/harness-evaluation.md).

## Delivery

[Release checklist](docs/delivery/release-checklist.md) · [Maintenance](docs/delivery/maintenance.md) · [Handover](docs/delivery/handover.md).

Target: https://manh0303.github.io/notth-web/. CI never publishes on push. Owner UAT is approved in docs/product/gate-3-approval.md. Publication still needs explicit approval and manual dispatch of the exact approved main SHA. Actual deployment and production verification remain pending.
