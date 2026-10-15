# Gate 2 — NOTTH browser design baseline

Status: **OWNER REVIEW PENDING**. Gate 1 approved; no Gate 2/UAT/release approval.

## Review-medium decision

Owner temporarily deferred Figma/Penpot and authorized this Astro prototype after the browser-preview proposal (“Oke triển đi”). Editable external design, component instances and clickable Figma/Penpot prototype are **DEFERRED**, not delivered. Prior Figma quota/Penpot connection blockers remain historical. This preview is editable Astro/TypeScript/CSS in GitHub, with a portable HTML review export.

Open [notth-preview.html](notth-preview.html) locally in a browser (download raw file from GitHub). It embeds fonts, CSS and interaction scripts; no server required. Clipboard success depends on browser permission; manual copy fallback is provided. The normal source build uses `/notth-web/`; portable export changes only the home/favicon/asset references for offline review. Reproduce with `npm ci`, `npm run build`, `node scripts/export-preview.mjs`.

## Design references

| Reference | Review surface | Source |
| --- | --- | --- |
| SCR-001 | Desktop 1440px | src/pages/index.astro + global.css |
| SCR-002 | Tablet 768px | Same page, responsive rules |
| SCR-003 | Mobile 375px | Same page, stacked layout |
| SCR-004 | Mobile menu open/closed | Header.astro |
| SCR-005 | Static reduced-motion logo | BrandMotion.astro |
| CMP-001–004 | Wordmark, buttons/links, workflow rows, install panel | components/, page, global.css |

Palette, typography, component and responsive proposals are in foundations.md and screen-specification.md. Actual implementation uses self-hosted Inter/IBM Plex Mono; no external font service. Screenshots under ../evidence/preview are supporting rendered evidence, not editable design files. No visual comparison against nonexistent Figma frames is claimed.

## Motion proposal for approval

`notth` at 0ms → `nott` 1200ms → `not` 1320ms → **pause 500ms** → `noth` 1820ms → `nothi` 1960ms → `nothin` 2100ms → `nothing` 2240ms. Once per load; caret stops blinking at 4040ms. Reserved final width; caret uses 90ms eased positional transitions. Static two t glyphs use distinct violet tokens. Reduced motion is static without blinking.

## Requested owner decision

Approve or request edits to: hierarchy and typography, dark/violet identity, desktop/tablet/mobile layout, section content/order, menu/clipboard states and the motion timings above. Approval advances production hardening and full QA; it does not authorize merge, deployment or release.

Remaining after approval: full AC coverage, release-ready SEO sitemap/robots, three-run mobile Lighthouse, cross-browser/manual assistive-tech and real browser zoom checks, CI/Pages configuration, formal owner UAT and approved deployment verification. No production acceptance claim.
