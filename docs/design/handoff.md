# Minimal design handoff v0.2

Gate 2 pending. Owner requested the simpler composition documented in preview-review.md.

Editable source: src/pages/index.astro, src/components/{Header,Wordmark,BrandMotion}.astro, src/styles/global.css. Run npm ci, npm run dev. Build and export: npm run build, node scripts/export-preview.mjs. Portable review artifact: notth-preview.html.

The media frame is only a future setup-video placeholder. Add a real reviewed recording later with a poster, dimensions, accessible controls/captions as relevant and reduced-motion behavior; do not invent a recording. Installation is currently an official documentation link. Removed Install component and all unused CSS/clipboard/menu logic.

Requirement changes: FR-002 stage names only; FR-003 external setup guide; FR-005 animation now in h1, reduced/no-JS tagline is static “nothing”. See product decision log and traceability. Current executed checks: ../evidence/minimal/README.md. Prior v0.1 evidence is historical.

No editable Figma/Penpot output, owner design approval, production acceptance, merge or deployment is claimed.

## Approval update

Gate 2 approved and PR #2 merged; see ../product/gate-2-approval.md. Earlier pending labels describe the proposal stage. Production hardening preserves the accepted v0.2 composition; Gate 3 and publication are pending.
