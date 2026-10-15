# Technical design — minimal Gate 2 prototype

Static Astro 7.3.8, strict TypeScript and CSS. One homepage, no backend or UI framework. Base layout provides metadata and self-hosted fonts. Header and static Wordmark are reused; BrandMotion now renders inside h1. Page-local data supplies the five workflow labels; the setup figure is a non-interactive placeholder until a real video exists.

Native JavaScript only handles headline typing/caret and reduced-motion changes. No mobile menu or clipboard code. CSS owns dark/violet tokens and responsive composition: desktop two-column hero, tablet/mobile stacked hero; mobile workflow becomes a vertical ordered list. Essential content and links work without JS. Accessible heading text stays stable; animated visual text is aria-hidden.

site/base remain https://manh0303.github.io + /notth-web/. npm run check, npm run build, npm run test:e2e; tests own a scoped static-build server and browser lifecycle. scripts/export-preview.mjs inlines assets and license notices into the portable HTML for owner review. GitHub source is canonical.

Decisions: preserve owner-selected static Astro architecture; simplify to the owner-directed page in docs/design/preview-review.md. Official installation/docs stay external. No new dependency or infrastructure for this revision. Future setup clip is deferred, not simulated.

Production phase after Gate 2: complete applicable QA/Lighthouse, sitemap/robots, CI and specifically authorized GitHub Pages deployment, then owner UAT/release approval. No deployment workflow currently enabled.
