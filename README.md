<div align="center">
  <h1>Dhaka Logistics Services & Solution</h1>
  <p>
    <strong>One Point of Contact. Every Operation Covered.</strong>
  </p>
  <p>
    Corporate website for DLSS — a premier operational support and logistics company based in Bangladesh, serving enterprise clients since 2010.
  </p>
  <p>
    <a href="https://www.dhakalogistic.com">www.dhakalogistic.com</a>
  </p>
</div>

<br />

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Pages & Routes](#pages--routes)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Data Architecture](#data-architecture)
- [Deployment](#deployment)
- [Services](#services)

<br />

## Overview

Dhaka Logistics Services & Solution (DLSS) provides end-to-end operational support across Bangladesh. This website is a complete brand redesign — moving from a single-page dark theme to a polished, multi-page light-themed corporate presence. Built with **Next.js 16** (App Router) and **Tailwind CSS v4**, the site delivers a modern, responsive, and highly animated experience.

<br />

## Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js](https://nextjs.org/) 16 (App Router) | React framework |
| [React](https://react.dev/) 19 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) v4 | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) 12 | Animations & scroll-triggered transitions |
| [Lucide React](https://lucide.dev/) | Icon library |
| [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) + [Inter](https://fonts.google.com/specimen/Inter) | Typography |

<br />

## Pages & Routes

| Route | Page |
|---|---|
| `/` | Home — Hero, stats counter, services list, vision quote, client logos, IFM teaser |
| `/about` | About — Company story, mission & values, capabilities, organizational chart |
| `/services` | Services — 8 detailed service blocks with alternating layout |
| `/services/[id]` | Service Detail — Dynamic per-service page with prev/next navigation |
| `/clients` | Clients & Partners — Client grid, revenue performance charts, partner cards |
| `/capability` | Capability — Management addresses, deployed resources table with bar charts, IFM future |
| `/contact` | Contact — Enquiry form, office locations (5 cities), executive contacts |
| `/career` | Career — Job application form with CV upload |

<br />

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

<br />

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (fonts, metadata)
│   ├── globals.css         # Tailwind v4 + brand design tokens
│   ├── page.tsx            # Home page
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── services/[id]/page.tsx
│   ├── clients/page.tsx
│   ├── capability/page.tsx
│   ├── contact/page.tsx
│   └── career/page.tsx
│
├── components/
│   ├── layout/             # Navbar & Footer
│   ├── sections/           # Page-specific section components
│   │   ├── home/
│   │   ├── about/
│   │   ├── services/
│   │   ├── clients/
│   │   ├── capability/
│   │   └── contact/
│   └── ui/                 # Reusable primitives (counter, logo, wrappers)
│
├── data/
│   └── dlss-data.json      # Single source of truth for all content
│
├── lib/
│   ├── data.ts             # Data loader
│   └── animations.ts       # Framer Motion variants
│
├── types/
│   └── dlss.ts             # TypeScript interfaces
│
└── public/
    ├── services/            # Service imagery
    └── client-logo/         # Partner & client logos
```

<br />

## Key Features

### Animations & Interactivity
- **Scroll-triggered fade-up sections** via Framer Motion `useInView`
- **Animated stat counters** — spring-animated numbers (2,234+ resources, 15+ years, etc.)
- **Service row hover** — expanding cards with sliding arrow on the home page
- **Marquee text** — scrolling service/client name banners
- **Navbar transformation** — white-to-green background transition on scroll, with backdrop blur
- **Animated bar charts** — revenue comparison and resource deployment visualizations

### Design System
- **Brand colors**: Deep forest green (`#1a4d2e`) with lime green accent (`#7dc142`)
- **Light theme** with warm surface (`#f5f5f3`) and high-contrast typography
- **Responsive** — fully adaptive layout from mobile to widescreen
- **Typography hierarchy** — Plus Jakarta Sans for headings, Inter for body, JetBrains Mono for numerical data

### Content
- **8 core services** with detailed descriptions, sub-services, and accent stats
- **23+ enterprise clients** across diverse sectors (pharma, FMCG, telecom, banking, govt.)
- **Org chart** — visual hierarchy from Advisory Board to Department Heads
- **5-city office network** across Bangladesh
- **Revenue performance dashboard** with top clients and area breakdown

<br />

## Data Architecture

All content is managed through a single **`data/dlss-data.json`** file — no database, no CMS, no API routes. TypeScript interfaces in `types/dlss.ts` enforce the schema, and `lib/data.ts` provides typed imports to every component.

```
dlss-data.json
├── company (name, tagline, offices, regions)
├── about (hero, who-we-are, mission, values, capabilities)
├── home (stats, why-us, vision)
├── services (8 services × title, description, sub-services, stats)
├── clients (23 entries with sector metadata)
├── partners (4 partners)
├── business (revenue data, area breakdown)
├── contacts (CEO, COO)
├── orgChart (hierarchical structure)
├── resources (22 categories, total deployment counts)
└── ifmPlan (5 pillars of future IFM strategy)
```

<br />

## Services

| # | Service |
|---|---|
| 01 | Human Resource Outsourcing |
| 02 | Payroll Management |
| 03 | HR / IR Consultancy & Audit |
| 04 | Logistics Services & Solutions |
| 05 | Vehicle Tracking & Telematics (VTS) |
| 06 | Engineering & Construction |
| 07 | Facility & Catering Management |
| 08 | Event Management |

<br />

## Deployment

**Recommended**: Deploy on [Vercel](https://vercel.com/) — zero configuration, automatic Next.js detection.

### Alternative platforms

| Platform | Notes |
|---|---|
| Vercel | One-click deploy. Build: `npm run build` |
| Cloudflare Pages | Requires `nodejs_compat` compatibility flag in Dashboard |
| Netlify | Zero-config, auto-detects Next.js |

```bash
# Production build
npm run build

# Cloudflare Pages build
npm run pages:build
```

For detailed deployment guides, see:
- [`DEPLOYMENT.md`](./DEPLOYMENT.md)
- [`DEPLOYMENT_QUICK.md`](./DEPLOYMENT_QUICK.md)
- [`CLOUDFLARE_FIX.md`](./CLOUDFLARE_FIX.md)

<br />

---

<div align="center">
  <p>
    <strong>Dhaka Logistics Services & Solution</strong><br />
    Established 2010 · Bangladesh
  </p>
</div>
