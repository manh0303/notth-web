Version: 0.1 | Status: PENDING OWNER REVIEW | Owner: Nguyễn Đức Mạnh | Date: 2026-10-15

# Acceptance criteria

Specifications only; no tests executed. All cases require the matching requirements above.

## US-001

Linked requirements: FR-001

### AC-US-001-01

**Given** a visitor opens the homepage. **When** they inspect the first viewport. **Then** NOTTH, the tagline, a concise value proposition and Get started/GitHub actions are visible.

### AC-US-001-02

**Given** the static logo is rendered. **When** the visitor compares the two t glyphs. **Then** the t glyphs have visibly distinct treatments and the name remains readable.

## US-002

Linked requirements: FR-002

### AC-US-002-01

**Given** the pinned source register. **When** a reviewer compares each feature/workflow claim. **Then** each claim is supported and the five workflow stages appear in order.

### AC-US-002-02

**Given** a user evaluates compatibility. **When** they read execution boundaries. **Then** the page explains host-controlled execution and contains no CRM-only, Kiro-only or self-running-runtime promise.

## US-003

Linked requirements: FR-003

### AC-US-003-01

**Given** npm still returns E404. **When** a visitor opens Install. **Then** Node 22+, target-root context, reviewed source path, Codex/Astro/UIUX options and harness-start are present; npx is not labeled verified.

### AC-US-003-02

**Given** registry state changes or copy fails. **When** release review or clipboard interaction occurs. **Then** setup is revalidated before changing claims; any copy failure preserves selectable text and manual fallback.

## US-004

Linked requirements: FR-004

### AC-US-004-01

**Given** the deployed /notth-web/ base path. **When** the visitor follows each navigation/resource link. **Then** internal anchors resolve and external destinations match verified official docs/source.

### AC-US-004-02

**Given** JavaScript is disabled. **When** the visitor uses essential navigation. **Then** all primary sections and official resources remain reachable.

## US-005

Linked requirements: FR-005

### AC-US-005-01

**Given** normal motion preference. **When** the logo animation runs. **Then** observed strings are notth → nott → not → noth → nothi → nothin → nothing, with 500ms pause after not within approved tolerance.

### AC-US-005-02

**Given** reduced motion is enabled or the animation fails. **When** the page renders. **Then** static notth is readable without typing/blinking; reserved width prevents surrounding content displacement.

## US-006

Linked requirements: NFR-001, NFR-002

### AC-US-006-01

**Given** 375, 768, 1440px viewports and 200% zoom. **When** a visitor navigates and reads. **Then** essential actions/content remain usable without unintended horizontal overflow.

### AC-US-006-02

**Given** keyboard-only use and accessibility scan. **When** each interaction receives focus. **Then** focus order/visibility and semantics work; no serious/critical axe violations; contrast and reduced-motion checks are recorded.

## US-007

Linked requirements: NFR-003

### AC-US-007-01

**Given** production static build at target base. **When** browser and link/metadata checks run. **Then** no missing local assets, build/runtime errors; title/description/canonical/OG/sitemap/robots and favicon are correct.

### AC-US-007-02

**Given** a repeatable Lighthouse setup. **When** three mobile runs execute. **Then** median meets the owner-approved targets, with tool/config/raw reports and any failure retained.

## US-008

Linked requirements: NFR-004, NFR-005

### AC-US-008-01

**Given** approved requirements and design. **When** a release candidate is reviewed. **Then** each requirement links actual frames/components/tests; unresolved cases are FAIL/BLOCKED and owner UAT approval remains distinct.

### AC-US-008-02

**Given** Gate 3 and release approval are absent. **When** delivery reaches a gated action. **Then** no auto-merge/release or acceptance claim occurs; checkpoint, remaining work and next executable action exist.

Permission/auth/data concurrency cases are not applicable to this public static, non-input product. Review gates still require owner authorization. Runtime results: NOT_RUN.
