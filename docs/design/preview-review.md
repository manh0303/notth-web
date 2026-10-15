# Gate 2 — minimal browser design v0.2

Status: **OWNER REVIEW PENDING**. Supersedes the larger v0.1 prototype. No merge, release or UAT approval.

Owner feedback (2026-10-15): make the page extremely simple; move the `notth → nothing` animation into the headline; reserve the right-hand box for a future short setup GIF/video; keep only Requirements → Design → Code → Test → Review below.

## Current review surface

- Header: static NOTTH wordmark, Docs and GitHub. Both links remain visible on mobile; no menu script.
- Hero: animated first word + “unnecessary.”, one sentence, Get started linking to official installation documentation.
- Right-hand media frame: non-interactive setup-video placeholder, explicitly “Coming soon”. No clip exists yet; no fake player controls or invented setup demonstration.
- One ordered workflow strip with five stage names. No feature rows, tool list, installation panel, extra CTA or descriptive workflow paragraphs.
- Small footer with tagline and MIT link.

[Download/open notth-preview.html](notth-preview.html) in a browser. All fonts, CSS and scripts are embedded. Source stays editable in src/. Supporting rendered screenshots: ../evidence/minimal/1440.png, 768.png and 375.png. These are browser surface references SCR-001/002/003, not Figma frame IDs. Figma/Penpot remain deferred by owner decision.

## Motion

First headline word: `notth` → `nott` at 1200ms → `not` at 1320ms → pause 500ms → `noth` at 1820ms → `nothi` at 1960ms → `nothin` at 2100ms → `nothing` at 2240ms. Once per page load; caret stops at 4040ms. Caret position follows measured text width with a 90ms transition. Heading height and media position remain fixed.

The accessible heading stays “Nothing unnecessary.”. With reduced motion, no JavaScript or a preference change, the headline reads static “nothing unnecessary.”; the header still shows the static two-tone NOTTH logo. This replaces the v0.1 reduced-motion specimen behavior, because the animated element is now the tagline rather than a separate logo panel.

## Scope delta / review

Owner-requested simplification changes FR-002 to stage names only and FR-003 to official external setup documentation. Removes clipboard and mobile-menu states because those controls no longer exist. The future setup clip is deferred until real recording/content is available. Approved Gate 1 documents remain historical; docs/product/decision-log.md and acceptance-criteria.md record this change explicitly.

Review requested: approve the minimal composition, typography/color, headline motion and responsive layout, or request revisions. Gate 2 approval remains required before production completion. Full production QA/Lighthouse, SEO hardening, CI/Pages, UAT and specifically authorized release remain pending.

## Approval update

Gate 2 approved and PR #2 merged; see ../product/gate-2-approval.md. Earlier pending labels describe the proposal stage. Production hardening preserves the accepted v0.2 composition; Gate 3 and publication are pending.
