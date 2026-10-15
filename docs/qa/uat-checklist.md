# Gate 3 — owner UAT

Owner/reviewer: Nguyễn Đức Mạnh. Approved scope: minimal v0.2, Gate 2 merge ca850a1d8c6f7ca4e7bd79b1dca58045ce89f7fc. Candidate: PR #3, feat/production-uat. **OWNER ACCEPTANCE PENDING**.

Download/open docs/design/notth-preview.html, review desktop/mobile screenshots and run the manual cases below. Actual result records technical observations, not owner acceptance. Per the requested PASS/FAIL/BLOCKED convention, UAT is BLOCKED until the owner reviews each applicable case; automated PASS never sets reviewer approval. Report a failed expectation with its case ID.

| Case | Requirement / scenario | Expected result | Actual result so far | Evidence | UAT status | Reviewer approval |
| --- | --- | --- | --- | --- | --- | --- |
| UAT-01 | FR-001 / brand and actions | NOTTH, clear tagline, one sentence, Get started, Docs/GitHub | Approved Gate 2 composition preserved; Chromium/Firefox/WebKit layout checks pass | production Chromium screenshots, visual regression | BLOCKED — owner review | PENDING |
| UAT-02 | FR-001 / static two t glyphs | Distinct violet treatments, readable name | Source and rendered static wordmark inspected; final owner judgment pending | Wordmark.astro, screenshots | BLOCKED — owner review | PENDING |
| UAT-03 | FR-002 / workflow | Exactly Requirements → Design → Code → Test → Review | Stage-order assertions pass; matches pinned framework README | preview.spec.ts, qa-plan | BLOCKED — owner review | PENDING |
| UAT-04 | FR-002 / honest minimal claims | No invented runtime, metrics, stack lock-in or completed setup clip | Minimal copy source-reviewed; placeholder says Coming soon | index.astro, Gate 2 record | BLOCKED — owner review | PENDING |
| UAT-05 | FR-003 / Get started | Opens official current installation guide | Browser asserts exact official guide destination; external source check recorded separately | official-links.json, SEO/link test | BLOCKED — owner review | PENDING |
| UAT-06 | FR-003 / installation scope | No unavailable npm command or clipboard promise embedded | Long panel/clipboard intentionally removed under DEC-008 | current source, minimal layout tests | BLOCKED — owner review | PENDING |
| UAT-07 | FR-004 / navigation | Home, Docs, GitHub, MIT reach intended official destinations | URL assertions and keyboard focus checks pass; live publication still pending | browser report, official-links.json | BLOCKED — owner review | PENDING |
| UAT-08 | FR-004 / no JavaScript | Readable final tagline, visible essential links and all five stages | No-JS browser scenario passes | browser report | BLOCKED — owner review | PENDING |
| UAT-09 | FR-005 / animation | notth → nott → not → 500ms pause → noth → nothi → nothin → nothing; no displacement | Controlled-clock sequence/bounds and real-time pause (450–650ms tolerance) pass | browser report, motion spec | BLOCKED — owner review | PENDING |
| UAT-10 | FR-005 / reduced motion | Static final tagline, hidden caret; live preference change stops motion | Both reduced-motion scenarios pass | browser report | BLOCKED — owner review | PENDING |
| UAT-11 | NFR-001 / responsive and zoom | Usable 375/768/1440 layouts, desktop 200% browser zoom | Viewports and 720px equivalent reflow pass; actual 200% browser UI zoom NOT_RUN | screenshots; owner: Ctrl/Cmd + zoom to 200%, inspect links/headline/workflow | BLOCKED — manual zoom + review | PENDING |
| UAT-12 | NFR-002 / accessibility | Visible logical keyboard focus, labels, contrast, reduced motion; assistive reading usable | Chromium/Firefox/WebKit keyboard/axe pass; manual screen-reader NOT_RUN | browser report; owner: Tab all 6 links incl skip, use chosen screen reader | BLOCKED — manual AT + review | PENDING |
| UAT-13 | NFR-003 / static build and discovery | No build/runtime/missing assets; correct base, title/canonical/OG/sitemap/robots/favicon | Local build/typecheck/browser checks pass; deployed-origin verification NOT_RUN | logs, SEO test, production-verification.md | BLOCKED — owner review; live check after release | PENDING |
| UAT-14 | NFR-003 / quality budgets | Three mobile Lighthouse runs median P≥90/A≥95/SEO≥95 | Local and CI three-run medians 100/100/100; 35 browser cases pass, 4 engine-specific visual baselines deliberately skipped | lighthouse summary/raw reports | BLOCKED — owner review | PENDING |
| UAT-15 | NFR-004 / traceable handoff | Approved browser refs → components → tests; exceptions disclosed | Mapping and Gate 2 record supplied; editable external designs and clip deferred | traceability.md, handover.md | BLOCKED — owner review | PENDING |
| UAT-16 | NFR-005 / controlled delivery | No publication without owner approval; exact candidate and next steps recorded | Manual-only owner/main/SHA guarded workflow prepared; no publication executed | workflows, release checklist | BLOCKED — owner review | PENDING |

Owner disposition: APPROVE / REQUEST CHANGES. Reviewed candidate SHA: __________. Accepted exceptions/remaining manual results: __________. Approval reference/date: __________.

Gate 3 scope is this approved minimal website. Real setup video and editable Figma/Penpot are deferred by owner decision. Production-origin verification follows specifically authorized deployment and is never pre-marked PASS. Merge/publication permission is separate from UAT acceptance.
