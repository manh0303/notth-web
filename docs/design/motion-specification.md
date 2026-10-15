# Headline motion v0.2 — Gate 2 pending

DEC-008 moves the visual animation into the first line of h1. Stable accessible name: “Nothing unnecessary.”; animated letters/caret aria-hidden. Header retains static NOTTH with distinct t colors.

| Time (ms) | First headline word |
| --- | --- |
| 0–1199 | notth |
| 1200 | nott |
| 1320 | not |
| 1320–1819 | not — 500ms pause |
| 1820 | noth |
| 1960 | nothi |
| 2100 | nothin |
| 2240 onward | nothing |
| 4040 | Stop/hide caret; keep final word |

Run once per page load. Fixed line height/reserved width prevent layout shifts. Caret translates to measured text width plus 5px with a 90ms ease-out transition; reposition after fonts load and on resize. No animated media yet.

Reduced motion, no JS and live preference changes: static final “nothing unnecessary.” with hidden caret. This explicitly supersedes the old separate-logo-panel static fallback. Tests observe sequence, pause and unchanged h1/media bounds in ../evidence/minimal/.
