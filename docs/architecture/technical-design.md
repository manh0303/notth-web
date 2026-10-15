# Technical design — Gate 2 browser prototype

Status: proposed design; owner authorized browser preview in place of Figma/Penpot, not production completion.

Astro 7.3.8 statically renders one English homepage. TypeScript is strict. `src/pages/index.astro` composes a base layout, navigation, brand animation and installation panel; feature/workflow data stays page-local. No backend, database or client UI framework. Inspected repository had no existing app/component to reuse; new components isolate the actual interaction boundaries.

`src/styles/global.css` owns tokens and responsive styles; 1200px maximum content width, 24px mobile gutters, content-led breakpoints at 639/760/1000px. Self-hosted Inter and IBM Plex Mono come from pinned Fontsource packages (OFL). CSS supplies hover, pressed and focus-visible states. Plain Astro scripts enhance menu, clipboard and decorative logo; essential content remains usable without JS.

Logo text reserves final width. Timeline follows motion-specification.md, once per load; reduced motion and preference changes retain static NOTTH. Accessible label stays stable, animated letters are hidden from assistive technology. Page uses semantic landmarks, skip link, one h1 and explicit navigation labels.

`site` and `base` set canonical and asset paths for GitHub Pages `/notth-web/`. Official documentation stays in the framework repository. Source claims are pinned to the source register; release review must revalidate npm installation. Metadata and favicon are in Base; sitemap/robots and deployment workflow are pending the approved production phase.

Decision ADR-001: static Astro + native browser scripts, as owner specified. Alternatives requiring React/server services add no value to accepted requirements. ADR-002: self-contained HTML export is a portable review artifact, built from Astro output; repository source remains canonical. No additional hosting or release is required to review it.

CI/CD plan after Gate 2: GitHub Actions performs npm ci, type check, static build, Playwright and appropriate audits; Pages deployment must be explicitly authorized, with GitHub environment approval and base-path production verification. No deployment workflow is enabled in this prototype.

References: Astro configuration https://docs.astro.build/en/reference/configuration-reference/; approved docs/product; docs/design/preview-review.md.
