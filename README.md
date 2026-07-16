# ZzzCalc — Free Sleep Calculator & Bedtime Calculator

A privacy-first, open-source sleep cycle calculator based on 90-minute REM cycles. Built with Astro + Tailwind CSS v4.

**→ [zzzcalc.vercel.app](https://zzzcalc.vercel.app)**

## Features

- **Dual-mode calculator** — "I want to wake up at" (finds bedtimes) or "I'm going to bed now" (finds wake times)
- **Power nap timer** — 15 min coffee nap, 20 min power nap, 90 min full cycle with countdown ring animation and wake-up alert
- **Visual cycle timeline** — color-coded sleep stages (N3 deep, N2 light, N1 dozing, REM) with hover tooltips
- **Personalized latency** — adjustable sleep onset (5–45 min, default 14 min)
- **Dark/light theme** — warm dark (#181715) by default, cream (#faf9f5) toggle, persisted in localStorage
- **No ads, no accounts** — zero ads, no sign-up required
- **Privacy-first** — sleep data stays on your device (localStorage). Google Analytics with anonymized IP and opt-in consent banner
- **Open source** (GPL v3) and fully auditable
- **Keyboard accessible** — focus-visible rings, skip-to-content link, screen-reader labels
- **Responsive** — mobile-first layout works on all screen sizes

## SEO & Search Compliance

Optimized for Google and Bing:

| Requirement | Status |
|---|---|
| Unique page titles | ✅ Every page |
| Meta descriptions | ✅ Unique per page |
| Canonical URLs | ✅ All pages |
| OG tags (title, desc, image, url, type, site_name, locale) | ✅ |
| Twitter Cards (summary_large_image) | ✅ |
| JSON-LD: WebApplication | ✅ All pages |
| JSON-LD: WebSite | ✅ All pages |
| JSON-LD: Organization | ✅ All pages |
| JSON-LD: FAQPage | ✅ Homepage (18 Qs), Nap page (6 Qs) |
| JSON-LD: BreadcrumbList | ✅ All pages |
| robots.txt | ✅ Allows all, disallows /404 /500 |
| XML Sitemap | ✅ Auto-generated, 6 URLs |
| OG image | ✅ 2400×1260 @2x |
| Favicons (SVG, ICO, PNG, Apple touch) | ✅ Complete set |
| PWA manifest | ✅ Dark theme, standalone |
| Google Search Console | ✅ Verified |
| H1 headings | ✅ Keyword-optimized per page |
| Semantic heading structure | ✅ H1 → H2 → H3 |
| Static calculator examples | ✅ 4 example cards in HTML |
| Content depth | ✅ 1500+ words on homepage |
| `lang="en"` | ✅ |
| `meta author` | ✅ |
| `meta robots` | ✅ index,follow (noindex on 404/500) |
| `meta keywords` | ✅ Page-specific |
| Skip-to-content | ✅ |
| `aria-label` on nav | ✅ |
| `prefers-reduced-motion` | ✅ |
| Internal links | ✅ All nav + footer + content CTAs |

## Tech Stack

- [Astro](https://astro.build) v6 — static site generation, MPA for SEO
- [Tailwind CSS](https://tailwindcss.com) v4 via `@tailwindcss/vite` plugin
- Vanilla JS for interactivity (no React/Vue/Svelte/client directives)
- [Playwright](https://playwright.dev) for OG image generation
- [Vercel](https://vercel.com) — hosting and deployment
- [Google Analytics 4](https://analytics.google.com) — anonymized, opt-in page-view analytics

## Performance

- LCP: ~600ms | CLS: ~0.001 | TTFB: ~11ms
- Fully static HTML output (8 pages)
- No client-side framework overhead
- Google Fonts preloaded with preconnect hints

## Accessibility

- Skip-to-content link
- Focus-visible outlines on all interactive elements
- `aria-label`, `aria-hidden`, `aria-live` on dynamic regions
- `prefers-reduced-motion` respected
- Screen-reader friendly nav and results
- Dynamic `theme-color` meta tag

## Commands

| Command | Action |
| :------ | :----- |
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview production build |
| `npm run format` | Format with Prettier |
| `npm run format:check` | Check formatting |

## Project Structure

```
src/
├── components/       # 9 active Astro components
│   ├── Calculator.astro         — Dual-mode sleep cycle calculator
│   ├── ConsentBanner.astro      — GA opt-in/opt-out consent banner
│   ├── FAQ.astro                — Reusable FAQ accordion
│   ├── Features.astro           — Feature cards grid
│   ├── Footer.astro             — Site footer with nav
│   ├── Hero.astro               — Landing page hero (H1)
│   ├── PowerNapTimer.astro      — Countdown timer with SVG ring
│   └── ScienceCard.astro        — Sleep science explainer
├── layouts/
│   └── Layout.astro             — HTML shell, meta, OG, JSON-LD, fonts, GA
├── lib/
│   ├── cycles.js                — Cycle constants, quality ratings, quick ref
│   ├── faq-data.js              — FAQ content + JSON-LD builders (18 homepage Qs, 6 nap Qs)
│   └── format.js                — Time formatting utilities
├── pages/                       # 8 static routes
│   ├── index.astro              — Homepage (expanded content + calculator + FAQ)
│   ├── nap.astro                — Power Nap Timer page
│   ├── about.astro              — About page
│   ├── contact.astro            — Contact page
│   ├── privacy.astro            — Privacy Policy
│   ├── terms.astro              — Terms & Conditions
│   ├── 404.astro                — Custom 404
│   └── 500.astro                — Custom 500 error page
└── styles/
    └── global.css               — Tailwind v4, CSS vars, dark/light themes, utilities
public/
├── favicon.svg / .ico / -96x96.png
├── apple-touch-icon.png
├── web-app-manifest-*.png / site.webmanifest
├── og-image.png                 — Open Graph preview image
├── robots.txt                   — Allows all, points to sitemap
└── google5f771b203862e07b.html  — GSC verification
scripts/
├── generate-og-image.mjs        — Playwright-based OG image generator
└── perf-audit.mjs               — Playwright-based performance audit
```

## License

GNU General Public License v3. See [LICENSE](LICENSE).
