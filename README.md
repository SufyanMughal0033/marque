# MARQUE — Premium Event Marquee & Wedding Venue Website

A production-quality marketing website for a premium Pakistani event marquee / wedding
venue, built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

This is a placeholder brand ("MARQUE"). All content is written to be realistic and
professional, but every phone number, address, price, testimonial, and photo is a
placeholder — see **Replacing Placeholder Content** below.

---

## Getting Started

Requires Node.js 18.18+ (Node 20/22 recommended).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> **Note on fonts:** This project uses `next/font/google` (Cormorant Garamond + Inter),
> which fetches font files from Google Fonts at build time. This requires normal internet
> access — it will work automatically the first time you run `npm run dev` or
> `npm run build` on a machine with internet access. No API key is needed.

### Other scripts

```bash
npm run build      # production build
npm run start      # run the production build
npm run lint       # ESLint
npm run typecheck  # TypeScript, no emit
```

---

## Project Structure

```
app/                  Routes (App Router). One folder per top-level page.
  about/ venue/ services/ events/[slug]/ packages/ menu/ gallery/
  contact/ booking/ faq/ blog/[slug]/ privacy/ terms/
  layout.tsx          Root layout: fonts, metadata, Navbar/Footer/WhatsApp button
  page.tsx            Homepage
  sitemap.ts robots.ts

components/
  layout/             Navbar, MobileMenu, Footer, WhatsAppButton, Logo, PageHero
  ui/                 Button, Container, SectionHeading, Motion primitives, etc.
  sections/           Homepage sections (Hero, Intro, VenueOverview, ...)
  gallery/ forms/ events/ packages/ services/ faq/ testimonials/ contact/

lib/
  siteConfig.ts       ALL brand/contact/business info lives here
  data/               Structured content (venue features, packages, menu, gallery, etc.)
  validations/        Zod schemas for every form
  actions/            Server actions (booking, contact, newsletter) — Supabase-ready
  types.ts            Shared TypeScript interfaces
  fonts.ts            next/font configuration
  icons.tsx           Maps icon name strings (from data files) to lucide-react icons

public/
  images/placeholders/  Generated abstract brand-toned placeholder imagery (SVG)
  downloads/            Placeholder downloadable full-menu PDF
```

---

## Replacing Placeholder Content

**Almost everything can be changed without touching component code.**

| What to change | Where |
|---|---|
| Brand name, tagline, phone, WhatsApp, email, address, hours, socials, stats | `lib/siteConfig.ts` |
| Venue features (Main Hall, Bridal Room, etc.) | `lib/data/venueFeatures.ts` |
| Services list | `lib/data/services.ts` |
| Event/occasion types | `lib/data/eventTypes.ts` |
| Packages & pricing | `lib/data/packages.ts` |
| Menu categories & dishes | `lib/data/menu.ts` (also regenerate the PDF, see below) |
| Gallery images | `lib/data/gallery.ts` |
| Recent event stories (`/events/[slug]`) | `lib/data/events.ts` |
| Testimonials | `lib/data/testimonials.ts` — **replace demo quotes with real, permission-cleared reviews before launch** |
| FAQs | `lib/data/faqs.ts` |
| Blog posts (`/blog/[slug]`) | `lib/data/blog.ts` |
| Nav links / footer links | `lib/data/navigation.ts` |

### Photography

All images currently point to `/public/images/placeholders/*.svg` — abstract, on-brand
gradient placeholders (not stock photos), each with a real, descriptive `alt` text
matching its intended context. To swap in real photography:

1. Add your images to `public/images/venue`, `public/images/events`, etc.
2. Update the relevant `src` field in the matching `lib/data/*.ts` file (or inline in a
   component, for one-off images like the hero).
3. Keep `alt` text descriptive — it's used for accessibility and SEO.

### Full Menu PDF

`public/downloads/marque-full-menu.pdf` is a generated placeholder matching
`lib/data/menu.ts`. To regenerate it after editing the menu data, edit
`scripts/generate_menu_pdf.py` to match, then run:

```bash
pip install reportlab
python3 scripts/generate_menu_pdf.py
```

Or replace the file directly with a real designed PDF — just keep the same filename or
update the two `href="/downloads/marque-full-menu.pdf"` references (`MenuPreview.tsx` and
`app/menu/page.tsx`).

---

## Forms & Backend Readiness

`BookingForm` and `ContactForm` (React Hook Form + Zod) call server actions in
`lib/actions/`. These currently validate input and log it server-side in development —
there is no database yet. Each action file has inline comments showing exactly where to
add:

- A Supabase insert (`bookings` / `messages` tables)
- An email/WhatsApp notification (e.g. via Resend)

See `.env.example` for the environment variables reserved for this. **Never** prefix a
secret key with `NEXT_PUBLIC_` — only values safe to expose in the browser should use
that prefix.

---

## SEO

- Per-page `metadata` exports (title, description, canonical, Open Graph)
- `app/sitemap.ts` and `app/robots.ts` (dynamic, include all events & blog posts)
- JSON-LD structured data: `EventVenue` (root layout), `BreadcrumbList` (every interior
  page), `FAQPage` (`/faq`), `Article` (each blog post)

## Accessibility

Semantic landmarks, visible focus states, keyboard-navigable gallery lightbox and FAQ
accordion, `aria-label`/`aria-expanded`/`aria-current` where relevant, and full
`prefers-reduced-motion` support in every animated component.
