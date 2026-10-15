Version: 0.1-design-draft | Status: FIGMA AUTHORING BLOCKED | Date: 2026-10-15

# NOTTH foundations proposal

No Figma variables/styles have been created: the write request hit the MCP quota before execution. Values below are a design proposal, not an approved implementation token file.

Typography: Inter for UI/headings, IBM Plex Mono for command examples. Both font families/styles were listed by Figma during discovery. Use Medium/Semi Bold rather than heavy decorative effects. Proposed display sizes desktop 88/96, tablet 64/72, mobile 48/54 (size/line height); headings 48/56, 32/40, 24/32; body 20/32 and 16/26; labels 14/20, 12/18; code 14/24. Mobile command text may use 12/20 when required, with full selectable content.

| Semantic CSS token | Value | Purpose |
| --- | --- | --- |
| --color-ink | #09090D | Page canvas |
| --color-surface | #121219 | Secondary surface / code |
| --color-elevated | #1C1B25 | Interactive hover surface |
| --color-line | #32313E | Decorative separators/borders; never sole focus indication |
| --color-text | #F5F3FA | Primary content |
| --color-muted | #B3AFBF | Supporting content |
| --color-violet | #B8A0FF | Accent, first t, primary action |
| --color-violetBright | #D0BDFF | Hover accent, second t |
| --color-violetDark | #241B39 | Accent surface |
| --color-buttonInk | #181022 | Text on violet button |
| --color-focus | #D8C5FF | Focus ring |

Spacing scale: 0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128. Radius scale: 4, 8, 12, 16, 24; use 8–12 for actual controls, avoid excessive rounded panels. Desktop content max 1200px, tablet gutter 40px, mobile gutter 24px. Minimum interactive target 44px.

Figma plan: primitive palette aliased by semantic variables; explicit scopes; WEB `var(--...)` code syntax. Dark mode only. Shared text styles for recurring roles. Reuse compatible assets if discovery can complete; current library search was quota-blocked, so no claim that available libraries are empty. Existing file has no local components/variables.

Component inventory: Logo (static/animated/reduced-motion concept), Button (Primary/Secondary × default/hover/pressed/focus), NavLink (default/hover/active/focus), WorkflowStep (five content instances), FeatureRow (three instances), CodePanel (default/copied/manual-copy). Main components outside the screen review frames; visible specimen states use instances.

Repeated shapes/labels must be editable and tied to shared components. Use text/component properties for content, tokens for visual properties, auto layout for related children. No flat full-page image fills.

Contrast calculation is in contrast-report.json. It is palette math only, not a rendered accessibility audit. 44px targets/focus behavior must be inspected in actual frames and tested in browser implementation later.
