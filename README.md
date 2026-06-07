# ZzzCalc — Wake Up Refreshed

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

## Comparison

| Feature | ZzzCalc | calculator.net | sleepcalculator.com | sleepytime.cc |
|---|---|---|---|---|
| Dual-mode calc | ✓ | ✓ | ✓ | ✓ |
| Power nap timer | ✓ | ✗ | ✗ | ✗ |
| Visual cycle timeline | ✓ | ✗ | ✗ | ✗ |
| Adjustable latency | ✓ (5–45 min) | ✓ | ✗ | ✗ |
| Dark/light theme | ✓ | ✗ | ✗ | ✗ |
| Open source | ✓ (GPL v3) | ✗ | ✗ | ✗ |
| Privacy-first | ✓ (opt-in GA) | ✗ (ads) | ✗ (no info) | unknown |
| Age-based guidelines | ✗ | ✓ | ✗ | ✗ |
| Hours-based calculator | ✗ | ✓ | ✗ | ✗ |
| Skip-to-content / a11y | ✓ | ✗ | ✗ | ✗ |
| Mobile-friendly | ✓ | partial | ✓ | ✓ |

## Tech Stack

- [Astro](https://astro.build) v6 — static site generation, MPA for SEO
- [Tailwind CSS](https://tailwindcss.com) v4 via `@tailwindcss/vite` plugin
- Vanilla JS for interactivity (no React/Vue/Svelte/client directives)
- [Playwright](https://playwright.dev) for OG image generation
- [Vercel](https://vercel.com) — hosting and deployment (Vercel toolbar disabled)
- [Google Analytics 4](https://analytics.google.com) — anonymized, opt-in page-view analytics

## Performance

- LCP: ~600ms | CLS: ~0.001 | TTFB: ~11ms
- Fully static HTML output (8 pages)
- No client-side framework overhead

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

## Project Structure

```
src/
├── components/       # 9 reusable Astro components
│   ├── Calculator.astro      — Dual-mode sleep cycle calculator
│   ├── ConsentBanner.astro   — GA opt-in/opt-out consent banner
│   ├── FAQ.astro             — 7-item FAQ with JSON-LD structured data
│   ├── Features.astro        — Feature cards grid
│   ├── Footer.astro          — 4-column site footer
│   ├── Hero.astro            — Landing page hero section
│   ├── Nav.astro             — Navigation with theme toggle
│   ├── PowerNapTimer.astro   — Countdown timer with SVG ring
│   └── ScienceCard.astro     — Sleep science explainer
├── layouts/
│   └── Layout.astro          — HTML shell, OG tags, fonts, GA, no-flash theme
├── lib/
│   └── cycles.js             — Cycle constants, quality ratings, quick ref
├── pages/                    # 8 static routes
│   ├── index.astro           — Home (calculator + features + FAQ + science)
│   ├── nap.astro             — Power Nap Timer page
│   ├── about.astro           — About page
│   ├── contact.astro         — Contact page
│   ├── privacy.astro         — Privacy Policy
│   ├── terms.astro           — Terms & Conditions
│   ├── 404.astro             — Custom 404
│   └── 500.astro             — Custom 500 error page
└── styles/
    └── global.css            — CSS variables, Tailwind utilities, dark/light themes
public/
├── favicon.svg               — SVG favicon
├── favicon.ico               — ICO fallback
├── favicon-96x96.png         — PNG favicon 96px
├── apple-touch-icon.png      — Apple touch icon
├── web-app-manifest-192x192.png  — PWA icon
├── web-app-manifest-512x512.png  — PWA icon
├── site.webmanifest          — PWA manifest (dark theme)
├── og-image.png              — Open Graph preview image (2400×1260 @2x)
├── robots.txt                — Allows all, points to sitemap
└── google5f771b203862e07b.html — Google Search Console verification
```

## License

GNU General Public License v3. See [LICENSE](LICENSE).
