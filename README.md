# NOTTH Web

Official website project. Astro · TypeScript · CSS · GitHub Pages.

Current stage: **Gate 1 approved; Gate 2 Figma design blocked by Starter MCP quota**. No UI baseline approved.

- [Requirements review pack](docs/product/README.md)
- [Figma workspace](https://www.figma.com/design/eAPVui9EUPPdsQCdpfICEJ) — editable canvas verified; UI authoring quota-blocked
- [Harness evidence and recovery](docs/evidence/harness-evaluation.md)

No application scaffold/build/deployment exists yet. Requirements approved. Resolve Figma access/quota, then review editable desktop/tablet/mobile designs before production UI implementation. Owner UAT and release approval remain separate.

[Design proposals and blocker](docs/design/handoff.md) · [Gate 1 approval](docs/product/gate-1-approval.md)

## Gate 2 browser prototype

Owner approved temporarily deferring Figma/Penpot. [Review the proposal](docs/design/preview-review.md) and download [the self-contained HTML preview](docs/design/notth-preview.html) to open in a browser. Desktop/tablet/mobile screenshots and actual check results are in [preview evidence](docs/evidence/preview/README.md).

```sh
npm ci
npm run check
npm run build
npx playwright install chromium
npm run test:e2e
node scripts/export-preview.mjs
```

Astro/TypeScript/CSS; static `/notth-web/` output. Tests start their own build fixture. `npm run dev` starts Astro for local iteration. Gate 2, owner UAT, merge and release remain pending.
