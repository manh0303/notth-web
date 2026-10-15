Version: 0.1-design-draft | Status: FIGMA AUTHORING BLOCKED | Date: 2026-10-15

# Wordmark motion specification — FR-005

Concept: reveal “nothing” from “notth” by editing the word. A stable wordmark remains in navigation; the decorative hero specimen runs once per page load. Once-only behavior and timings beyond the mandated 500ms pause remain Gate 2 proposals.

| Time (ms) | Visible string | Operation |
| --- | --- | --- |
| 0–1200 | notth | Hold initial brand |
| 1200 | nott | Backspace h |
| 1320 | not | Backspace second t |
| 1320–1820 | not | Exact 500ms pause |
| 1820 | noth | Type h |
| 1960 | nothi | Type i |
| 2100 | nothin | Type n |
| 2240 | nothing | Type g |
| 2240–4040 | nothing | Hold final word; no automatic replay proposed |

Static notth: first t uses --color-violet; second t uses --color-violetBright (both high contrast). In the animated specimen retain stable color assignment for surviving glyphs; never recolor the entire word unexpectedly. Accessible brand name stays NOTTH; animated text is aria-hidden.

Reserve a fixed inline box wide enough for “nothing” plus caret, using the final selected font/weight/size. Use measured glyph widths (not guessed equal-width positions) to move the caret in Inter; 70–90ms ease-out translation is proposed. Opacity blink 500ms on/off while editing, stop blinking in final hold. No layout shift of the heading, actions or neighboring content. If variable font metrics change, wait for font loading/measure before animation and retain the fixed box.

Reduced-motion specimen: static notth at first paint, no typing, no caret blink, same reserved box. JS failure leaves the same brand. No live-region announcements for decorative updates.

Figma strategy: create eight state frames or local variant states, preserve glyph layer names, connect the timed sequence using supported prototype reactions. Mandated 500ms pause must be represented as a transition delay; smooth caret uses supported smart animate/timeline APIs. Build a static reduced-motion specimen separately. If motion API flag or prototype feature is unavailable, report exact tool result and deliver the editable storyboard plus this spec; never claim playback verification.

Verification plan: read back timings/reactions; if timeline rendering is supported, export a small video once and sample relevant phases. Screenshot only proves resting composition. Browser QA must later execute the animation order/timing/layout-shift/reduced-motion checks against FR-005 and AC-US-005-01/02. No playback or runtime PASS exists yet.
