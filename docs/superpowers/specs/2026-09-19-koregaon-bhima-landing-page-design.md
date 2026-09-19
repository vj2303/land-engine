# Koregaon Bhima Landing Page — Design

**Date:** 2026-09-19
**Status:** Approved

## Goal

Replace the internal 5-stage demo homepage with a public-facing, mobile-responsive
landing page for a single land project: the Koregaon Bhima plots near Pune. The page
follows a hand-drawn wireframe supplied by the user and must work well on phones,
where most visitors will arrive from ad clicks.

## Scope

In scope: a new homepage at `/`, its section components, and the plot data backing it.

Out of scope: deleting the demo pages (`/capture`, `/crm`, `/nurture`, `/dashboard`).
They stay on disk and keep building; they are simply removed from navigation. The
existing plot detail page at `/plot/[id]` is kept, including its brochure panel.

## Page structure

Six sections, top to bottom, matching the wireframe:

### 1. Site header

Brand mark "Land Leads" on the left, hamburger button on the right. The menu holds
in-page anchor links: Properties, Amenities, Location, Contact. On desktop the links
render inline and the hamburger is hidden; on mobile the hamburger toggles a drawer.

Client component — it owns the open/closed state.

### 2. Hero

- H1: "Find the Right Land. Build Your Future."
- Subhead: "Discover Verified Property Opportunities With Land Lead Engine"
- Two body paragraphs supplied by the user, describing the platform and what it shows.
- Two CTAs: "Explore Properties →" (anchors to Properties) and "Contact Us →"
  (anchors to Contact).

### 3. Properties

Three plot cards. Each shows the plot image, area, price, per-sq-ft rate, location,
and two action buttons:

- **Contact** — `tel:` link to 7796466969
- **Enquire** — WhatsApp deep link (`https://wa.me/917796466969`) with a pre-filled
  message naming that specific plot

The card body links through to `/plot/<id>` for the full detail page.

### 4. Amenities & Facilities

Six tiles, from the wireframe: Hospital, Gym, Grocery Shop, Highway, Sewage Line,
Water/Electricity. Two columns on mobile, three on desktop. Each tile is an icon plus
a label.

Note: the wireframe replaces the original flyer's "School Nearby" with "Gym". The
wireframe wins.

### 5. Location

- Contact numbers: 7796466969 and 8329474141
- Address: Vadagaon Phata, Koregaon Bhima, Taluka Shirur, Pune 412216
- Live Google Maps iframe centred on the plot pin
- A short list of nearby landmarks (highway, CBSE school, petrol pump, shops,
  Sanaswadi, Dingrajwadi)
- "Open in Maps" button linking out to Google Maps

### 6. Footer

Brand line, both phone numbers, address.

## Data model

Replace the four Bangalore demo plots in `src/data/dummy.ts` with three Koregaon Bhima
plots that share one location, one map URL and one amenity set:

| id       | Area        | Price       | Rate        | Source     |
| -------- | ----------- | ----------- | ----------- | ---------- |
| plot-001 | 2,000 sq ft | ₹14,99,999  | ₹750/sq ft  | Real flyer |
| plot-002 | 1,500 sq ft | ₹11,24,999  | ₹750/sq ft  | Generated  |
| plot-003 | 2,500 sq ft | ₹18,74,999  | ₹750/sq ft  | Generated  |

Plot 1 carries the brochure image; 2 and 3 are priced at the same ₹750/sq ft rate and
are placeholders until real numbers arrive.

The `Lead` records' `plotInterest` strings are updated to reference the new plot
titles so the unlinked demo pages stay internally coherent.

**Map pin:** 18.6505429, 74.0795237 — resolved from the user's
`maps.app.goo.gl/VWukNA5bV3MsbauR9` short link. On the Pune–Ahmednagar highway
between Koregaon Bhima and Sanaswadi.

## Component boundaries

The page would run ~450 lines inline, so sections become components under
`src/components/`:

| Component      | Responsibility                               | Type   |
| -------------- | -------------------------------------------- | ------ |
| `SiteHeader`   | Brand, hamburger, anchor nav, drawer state    | Client |
| `Hero`         | Headline, description, two CTAs              | Server |
| `PlotCard`     | One plot: image, figures, Contact + Enquire   | Server |
| `Amenities`    | Six-tile facilities grid                      | Server |
| `LocationMap`  | Contact, address, map embed, Open in Maps     | Server |
| `SiteFooter`   | Brand line, numbers, address                  | Server |

`src/app/page.tsx` composes them and stays thin. Only `SiteHeader` needs
`"use client"`; everything else stays a server component.

## Next.js 16 constraints

This project runs Next.js 16.2.10. Relevant breaking changes, confirmed in
`node_modules/next/dist/docs`:

- **`next/image`:** the `priority` prop is deprecated in favour of `preload`. Use
  `preload` on the first plot image; leave the rest lazy.
- **Scroll behaviour:** Next 16 no longer overrides a global CSS
  `scroll-behavior: smooth`. Add `data-scroll-behavior="smooth"` to `<html>` so
  in-page anchors scroll smoothly while route transitions stay instant.
- Images are local files under `public/`, so no `remotePatterns` config is needed.
  No query strings on image sources, so no `localPatterns` config either.

## Responsive behaviour

Mobile-first. Single column on phones, widening at the `md` breakpoint:

- Header: hamburger drawer below `md`, inline links at and above it
- Plot cards: one per row on mobile, three across on desktop
- Amenities: two columns on mobile, three on desktop
- Map: wrapped in an aspect-ratio box so the iframe never overflows its container
- Tap targets: minimum 44px on all buttons and links

## Verification

- `npm run build` passes with no type or lint errors
- Page renders correctly at 375px (phone), 768px (tablet) and 1280px (desktop)
- `tel:` and `wa.me` links carry the correct numbers and plot names
- The map embed loads and the Open in Maps link resolves to the right pin
