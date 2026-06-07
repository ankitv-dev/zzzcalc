# ZzzCalc — Wake Up Refreshed

A local-first sleep cycle calculator based on 90-minute REM cycles. Built with Astro + Tailwind CSS v4.

**→ [zzzcalc.vercel.app](https://zzzcalc.vercel.app)**

## Features

- **Dual-mode calculator** — "I want to wake up at" (finds bedtimes) or "I'm going to bed now" (finds wake times)
- **Power nap timer** — 15 min coffee nap, 20 min power nap, 90 min full cycle with countdown ring
- **Visual cycle timeline** — color-coded sleep stages (N3 deep, N2 light, N1 dozing, REM) with tooltips
- **Personalized latency** — adjustable sleep onset (5–45 min, default 14 min)
- **Dark/light theme** — warm dark (#181715) by default, cream (#faf9f5) toggle
- **No ads, no tracking, no accounts** — all data stays in localStorage

## Tech Stack

- [Astro](https://astro.build) v6 — static site generation, MPA for SEO
- [Tailwind CSS](https://tailwindcss.com) v4 via `@tailwindcss/vite` plugin
- Vanilla JS for interactivity (no React/Vue/Svelte)
- Playwright for OG image generation and audits

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
├── components/     # Astro components (Calculator, PowerNapTimer, Nav, etc.)
├── layouts/        # Layout.astro (HTML shell, OG tags, fonts)
├── pages/          # Routes: /, /nap, /about, /contact, /privacy, /terms
├── styles/         # global.css (theme variables, utilities)
└── utils/          # sleepCycle.js (cycle math, formatting)
public/             # Static assets (favicons, manifest, OG image)
scripts/            # Build utilities (OG generation, performance audit)
```

## License

GNU General Public License v3. See [LICENSE](LICENSE).
