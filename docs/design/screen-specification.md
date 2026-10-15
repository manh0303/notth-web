# Minimal screen specification v0.2

Status: Gate 2 pending. Owner-directed revision; see preview-review.md.

| Surface | Layout |
| --- | --- |
| SCR-001 desktop 1440 | Header; two-column hero (headline left, future setup media right); one five-stage workflow strip; small footer |
| SCR-002 tablet 768 | Header links remain visible; stacked hero/media; five-stage strip |
| SCR-003 mobile 375 | 24px gutters; stacked headline/action/media; five compact workflow rows; small footer |
| Motion / reduced motion | Headline first word animates once, static final tagline when reduced motion or no JS |

Components: Header/Wordmark, BrandMotion inside h1, setup figure and ordered workflow in index.astro. No interactive video controls until a real asset exists. All navigation uses real links; hover/focus/pressed styles are in global.css. No clipboard, hamburger menu, feature grid or installation panel.

Typography: self-hosted Inter and IBM Plex Mono; dark background, off-white text, violet headline accent. Fixed headline line height and reserved animated-word width prevent layout displacement. Motion choreography and approval surface are in preview-review.md. Screenshots and executed checks live in ../evidence/minimal/.
