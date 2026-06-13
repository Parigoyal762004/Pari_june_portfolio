# Pari Goyal Portfolio (Next.js, multi-page)

An immersive, multi-page portfolio. The home page is a full-viewport scroll-cinema
where each panel is a generated animation with overlaid type. Work, About, and
Contact are their own routes, and every project has its own case-study page.

Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm start
```

Fonts (Fraunces and Inter) load from Google Fonts at runtime, so the build needs no network.

## Routes

- /                  Home, scroll-cinema (snap panels, animation per panel, side dots)
- /work              Editorial index of projects
- /work/[slug]       Dynamic case-study page per project (problem, build, result, stack, next)
- /about             About, experience timeline, kintsugi band, early-stage lessons (boat)
- /contact           Contact plus FAQ
- /robots.txt, /sitemap.xml   Generated

Case-study pages are statically generated from lib/projects.ts via generateStaticParams,
and each gets its own title and Open Graph metadata via generateMetadata.

## Tech leverage

- App Router with nested and dynamic routes
- Static generation of project pages from a single data file (lib/projects.ts)
- Per-page metadata, plus app/template.tsx for a fade-in transition on navigation
- Client interactivity: scroll-snap cinema with IntersectionObserver-driven nav dots (components/Cinema.tsx)
- Persistent nav with active-route highlighting (usePathname)

## SEO and GEO

- JSON-LD: Person and FAQPage schemas (components/JsonLd.tsx)
- Keyword-aware metadata, Open Graph, Twitter cards (app/layout.tsx)
- app/robots.ts and app/sitemap.ts (sitemap lists every route, including case studies)
- Descriptive alt text and a clean heading hierarchy
- FAQ written as plain question-and-answer pairs, which answer engines lift directly

## Structure

- app/ : layout, template, globals.css, page (home), robots.ts, sitemap.ts, work/, about/, contact/
- components/ : Nav, Footer, Cinema, JsonLd, Reveal
- lib/projects.ts : single source of truth for all project content
- public/media/ : animations and images served to the site
- assets/ : original source media (animations, images, docs)

## Writing rules

- Pari's voice: asks questions, cares about ROI over output, would rather look less smart than build the wrong thing
- No em dashes or en dashes anywhere, including date ranges (uses "to")

## Before deploy

- Set the real domain in app/layout.tsx, app/robots.ts, app/sitemap.ts, components/JsonLd.tsx (currently https://parigoyal.com)
- Add LinkedIn and GitHub links (not on the resume yet); they slot into components/Footer.tsx and components/Nav.tsx
- Optional: convert GIFs to MP4 or WebM for lighter load
