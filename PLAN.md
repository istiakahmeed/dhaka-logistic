# DLSS Website — Implementation Plan

## Overview

Complete redesign of dhaka-logistic.com from a single-page dark theme to a 6-page light-themed "Structured Authority" design. Brand colors: `#1a4d2e` (deep forest green), `#7dc142` (lime green). Fonts: Plus Jakarta Sans (display), Inter (body), JetBrains Mono (numbers).

---

## Phase 0 — Project Foundation & Design System

### 0.1 — Brand Tokens & Tailwind Config
- Replace existing `tailwind.config.ts` with new brand tokens:
  - `green-primary: #1a4d2e`, `green-accent: #7dc142`
  - `neutral-dark: #111111`, `neutral-mid: #4a4a4a`
  - `surface-light: #f5f5f3`, `white: #ffffff`, `divider: #e2e2de`
- Update `globals.css` variables, remove old charcoal/green-dark theme
- Remove `@theme inline` block, replace with standard Tailwind v4 `@theme` directive

### 0.2 — Font Configuration
- Update `layout.tsx`: replace Barlow with **Plus Jakarta Sans** (weights 400, 500, 600, 700, 800) + **Inter** (400, 500) + **JetBrains Mono** (400, 700)
- Set CSS variables: `--font-display`, `--font-body`, `--font-mono`

### 0.3 — Data Layer Restructure
- Extend `types/dlss.ts` to cover all new shapes (service details with accent stats, deep service data, business performance data, org chart, etc.)
- Update `data/dlss-data.json` with ALL content from the spec (8 expanded services, sub-services, accent stats, partner details, business data 2025, team members, org chart)

### 0.4 — Global Animation Config
- Update `lib/animations.ts` with spec-aligned values:
  - `fadeUp`: translateY 24px → 0, opacity 0 → 1, 400ms ease-out
  - Remove unused variants (scaleIn, etc.)

### 0.5 — Project Structure Reset
- Clear existing `components/sections/*` (all 7 will be rewritten per new specs)
- Keep `components/layout/` structure but rewrite Navbar & Footer
- Keep `components/ui/` utilities for shared pieces

---

## Phase 1 — Shared Components & Layout Shell

### 1.1 — Navigation (Sticky)
**File:** `components/layout/Navbar.tsx`
- Full-width sticky bar, 68px height, `#ffffff` bg, 1px bottom `#e2e2de` border
- Backdrop blur on scroll
- Left: DLSS logo text, Center: nav links, Right: "Get In Touch" CTA button
- On scroll past 100px: bg → `#1a4d2e`, all links → white, logo inverts
- Mobile hamburger menu

### 1.2 — Footer
**File:** `components/layout/Footer.tsx`
- 4-column grid on `#111111` bg
- Col 1: Logo + tagline + social icons
- Col 2: Quick Links
- Col 3: Services
- Col 4: Contact info
- Bottom bar: `#0d0d0d` with copyright

### 1.3 — Shared UI Primitives
**Directory:** `components/ui/`
- `SectionWrapper` — standard section padding (96px/120px vertical), optional bg toggle, fade-up on scroll
- `AnimatedCounter` — counts up from 0 on viewport entry (JetBrains Mono, `#7dc142`)
- `GrayscaleLogo` — client/partner logo with grayscale → color on hover
- `ServiceRow` — horizontal service list row with hover effect (bg → `#1a4d2e`, text → white, arrow animates right)
- `SplitSection` — two-column layout helper (configurable ratio, bg colors)

### 1.4 — App Router Pages Setup
- `app/page.tsx` → Home
- `app/about/page.tsx` → About
- `app/services/page.tsx` → Services
- `app/clients/page.tsx` → Clients & Partners
- `app/capability/page.tsx` → Capability
- `app/contact/page.tsx` → Contact

---

## Phase 2 — Home Page (9 Sections)

### 2.1 — Hero (Section 1.2)
**File:** `components/sections/home/Hero.tsx`
- Two-column asymmetric grid (58%/42%), full viewport height
- Left: small caps label (#7dc142), 72px headline, 17px subhead, two CTAs
- Right: 2×2 asymmetric rectangle grid (#1a4d2e + #7dc142 tones + real photo)
- Bottom trust bar: static logo strip (#f5f5f3, grayscale logos, color on hover)

### 2.2 — Numbers That Speak (Section 1.3)
**File:** `components/sections/home/StatsBar.tsx`
- Full-width band, `#111111` background, 80px vertical padding
- 4 stat columns separated by 1px `#2a2a2a` vertical lines
- Numbers: 80px JetBrains Mono #7dc142, AnimatedCounter
- Labels: 13px Inter, white/#888888

### 2.3 — What We Do / Services List (Section 1.4)
**File:** `components/sections/home/ServicesList.tsx`
- Two-zone: sticky left label (25%) + scrollable right service list (75%)
- Left: "Our Services" heading with #7dc142 vertical accent line
- Right: 8 service rows (01-08), each with number, title, description, arrow
- Hover: bg → #1a4d2e, text → white, arrow animates right

### 2.4 — Vision Statement (Section 1.5)
**File:** `components/sections/home/VisionQuote.tsx`
- Full-width, `#1a4d2e` bg, 120px vertical padding, centered max-width 860px
- 200px opening quote mark (`#7dc142`, opacity 0.2)
- 32px quote text (Plus Jakarta Sans 600, white)
- Attribution line (#7dc142)

### 2.5 — Why DLSS (Section 1.6)
**File:** `components/sections/home/WhyDLSS.tsx`
- 3-column asymmetric grid: 40%/30%/30%
- Col 1 (#f5f5f3): heading + body text
- Col 2 (#111111): 15 years / 35 years stats
- Col 3 (#7dc142): "Nationwide Coverage" with cities

### 2.6 — Partners Snapshot (Section 1.7)
**File:** `components/sections/home/PartnersGrid.tsx`
- Header row + 5×2 logo grid with 1px #e2e2de borders
- 10 client logos, grayscale → color on hover

### 2.7 — IFM Teaser (Section 1.8)
**File:** `components/sections/home/IFMTeaser.tsx`
- Split screen: left 50% #f5f5f3, right 50% #1a4d2e
- Left: "What's Next" heading + IFM description
- Right: 5 IFM pillars with 2px #7dc142 left border

### 2.8 — Footer (Section 1.9)
Already in Phase 1.2.

---

## Phase 3 — About Page (5 Sections)

### 3.1 — Page Hero (Section 2.1)
**File:** `components/sections/about/Hero.tsx`
- White bg, 140px top padding
- Left (60%): label + 64px heading "Built on Experience. Driven by Results."
- Right (40%): "Est. 2010" watermark + short paragraph

### 3.2 — Who We Are (Section 2.2)
**File:** `components/sections/about/WhoWeAre.tsx`
- 55/45 split: text left, visual grid right
- Right: 2×3 grid (photos + color blocks + stat "5 Cities")

### 3.3 — What We Have / Capabilities (Section 2.3)
**File:** `components/sections/about/CapabilitiesProse.tsx`
- Full-width, #f5f5f3 bg, two columns
- Left: "What We Have" with #7dc142 left border accent
- Right: body paragraphs

### 3.4 — Mission & Values (Section 2.4)
**File:** `components/sections/about/MissionValues.tsx`
- 4-column grid: heading row spans all 4
- 3 mission blocks (#111111 bg, white text, numbered 01-03)
- 5 value items in horizontal strip (#f5f5f3, separated by 1px lines, #7dc142 dots)

### 3.5 — Organization Structure (Section 2.5)
**File:** `components/sections/about/OrgChart.tsx`
- Full-width, centered, white bg
- Typographic org chart with #1a4d2e rectangular nodes, #7dc142 connecting lines
- Full hierarchy: Advisory Board → Chairman → CEO/COO → 6 Department Heads

---

## Phase 4 — Services Page (3 Sections)

### 4.1 — Page Hero (Section 3.1)
**File:** `components/sections/services/Hero.tsx`
- Full-width, #1a4d2e bg, 140px top padding
- Small label + 64px white heading + subtext
- Bottom: horizontal marquee of 8 service names in #7dc142

### 4.2 — Service Deep Dives (Section 3.2)
**File:** `components/sections/services/ServiceDetail.tsx` (reused per service)
- 8 alternating two-column sections
- Odd: content left (#f5f5f3) + accent right (#1a4d2e)
- Even: accent left (#7dc142/#111111) + content right (white)
- Each: service number (100px watermark), name (40px), description, sub-services list, accent detail box

### 4.3 — Services Summary Strip (Section 3.3)
**File:** `components/sections/services/SummaryStrip.tsx`
- Full-width #111111 band, 4×2 grid
- Each cell: service number (#7dc142) + name (white)

---

## Phase 5 — Clients & Partners Page (3 Sections)

### 5.1 — Page Hero (Section 4.1)
**File:** `components/sections/clients/Hero.tsx`
- White bg, typographic hero
- Heading + scrolling client names marquee

### 5.2 — Client Grid (Section 4.2)
**File:** `components/sections/clients/ClientGrid.tsx`
- 4×6 precision bordered grid (1px #e2e2de per cell)
- 22 clients, grayscale logos, hover → #1a4d2e bg + white logo
- "Several additional..." note below

### 5.3 — Business Performance (Section 4.3)
**File:** `components/sections/clients/BusinessPerformance.tsx`
- Two columns, #f5f5f3 bg
- Left: Companywise Business 2025 — horizontal bar chart (Recharts)
- Right: Areawise Breakdown — 3 stacked percentage blocks

### 5.4 — Project Partners (Section 4.4)
**File:** `components/sections/clients/ProjectPartners.tsx`
- 2×2 grid, each block: 1px #e2e2de border
- Partner logo + name + description + area label (#7dc142 small caps)

---

## Phase 6 — Capability Page (4 Sections)

### 6.1 — Page Hero (Section 5.1)
**File:** `components/sections/capability/Hero.tsx`
- Full-width, #1a4d2e bg

### 6.2 — Management & Administration (Section 5.2)
**File:** `components/sections/capability/Management.tsx`
- Split: left #f5f5f3 (addresses), right white (team description)

### 6.3 — Resource Table (Section 5.3)
**File:** `components/sections/capability/ResourceTable.tsx`
- Clean typographic table, 1px #e2e2de row dividers
- Header: #1a4d2e bg, white text
- 22 resource rows, numbers in JetBrains Mono
- Total row: #111111 bg
- Below: bar visualization of top 5 categories

### 6.4 — IFM Next Chapter (Section 5.4)
**File:** `components/sections/capability/IFMNext.tsx`
- Full-width, #111111 bg, two columns
- Left: heading + description
- Right: 5 IFM pillars (numbered, #7dc142 numbers)

---

## Phase 7 — Contact Page (3 Sections)

### 7.1 — Contact Hero (Section 6.1)
**File:** `components/sections/contact/Hero.tsx`

### 7.2 — Contact Block (Section 6.2)
**File:** `components/sections/contact/ContactBlock.tsx`
- Two columns: details left, inquiry form right
- Form: React Hook Form, underline-style inputs (1px bottom border), dropdown for services, full-width #1a4d2e submit button
- No shadows, no rounded corners

### 7.3 — Office Locations Strip (Section 6.3)
**File:** `components/sections/contact/OfficeLocations.tsx`
- 5 city blocks in horizontal row, #1a4d2e bg
- Separated by 1px #2a4d2e vertical lines

---

## Phase 8 — Polish & QA

### 8.1 — Scroll Animations
- Framer Motion `whileInView` on all major sections
- Consistent: translateY 24px → 0, opacity 0 → 1, 400ms ease-out

### 8.2 — Hover States Audit
- Service rows: bg #1a4d2e, text white (200ms)
- Client logos: grayscale → color (150ms)
- CTA buttons: bg #145c24 (150ms)
- Nav links: color #7dc142 (100ms)

### 8.3 — Responsive Pass
- Mobile: single-column, reduced heading sizes, stacked layouts
- Tablet: preserve grid where possible
- Desktop: full spec

### 8.4 — Performance & Build
- `next build` — verify no errors
- Lint: `npm run lint`
- Check image optimization, font loading strategy

---

## File & Folder Architecture (Final)

```
app/
├── globals.css
├── layout.tsx                  # Root layout (fonts, metadata)
├── page.tsx                    # Home page
├── about/page.tsx              # About page
├── services/page.tsx           # Services page
├── clients/page.tsx            # Clients & Partners page
├── capability/page.tsx         # Capability page
└── contact/page.tsx            # Contact page

components/
├── layout/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── sections/
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── StatsBar.tsx
│   │   ├── ServicesList.tsx
│   │   ├── VisionQuote.tsx
│   │   ├── WhyDLSS.tsx
│   │   ├── PartnersGrid.tsx
│   │   └── IFMTeaser.tsx
│   ├── about/
│   │   ├── Hero.tsx
│   │   ├── WhoWeAre.tsx
│   │   ├── CapabilitiesProse.tsx
│   │   ├── MissionValues.tsx
│   │   └── OrgChart.tsx
│   ├── services/
│   │   ├── Hero.tsx
│   │   ├── ServiceDetail.tsx
│   │   └── SummaryStrip.tsx
│   ├── clients/
│   │   ├── Hero.tsx
│   │   ├── ClientGrid.tsx
│   │   ├── BusinessPerformance.tsx
│   │   └── ProjectPartners.tsx
│   ├── capability/
│   │   ├── Hero.tsx
│   │   ├── Management.tsx
│   │   ├── ResourceTable.tsx
│   │   └── IFMNext.tsx
│   └── contact/
│       ├── Hero.tsx
│       ├── ContactBlock.tsx
│       └── OfficeLocations.tsx
└── ui/
    ├── SectionWrapper.tsx
    ├── AnimatedCounter.tsx
    ├── GrayscaleLogo.tsx
    ├── ServiceRow.tsx
    └── SplitSection.tsx

lib/
├── animations.ts               # Framer Motion variants
└── data.ts                     # Data import

types/
└── dlss.ts                     # TypeScript interfaces

data/
└── dlss-data.json              # All content data
```

---

## Execution Order

| Phase | Est. Effort | Dependencies |
|-------|-------------|-------------|
| 0 — Foundation | Medium | None |
| 1 — Shell | Medium | Phase 0 |
| 2 — Home | Large | Phase 1 |
| 3 — About | Medium | Phase 1 |
| 4 — Services | Large | Phase 1 |
| 5 — Clients | Medium | Phase 1 |
| 6 — Capability | Medium | Phase 1 |
| 7 — Contact | Small | Phase 1 |
| 8 — Polish | Medium | Phases 2-7 |

Each phase is self-contained. Phases 2-7 can be parallelized.
