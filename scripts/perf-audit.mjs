import { chromium } from 'playwright';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const url = process.argv[2] || 'http://localhost:4321/';

async function main() {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 375, height: 812 } });

  await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
  await page.waitForTimeout(2000);

  const title = await page.title();
  const viewportMeta = await page.evaluate(() => {
    const m = document.querySelector('meta[name="viewport"]');
    return m ? m.content : null;
  });
  const metaDesc = await page.evaluate(() => {
    const m = document.querySelector('meta[name="description"]');
    return m ? m.content : null;
  });

  const headings = await page.evaluate(() => {
    return ['h1','h2','h3','h4','h5','h6'].flatMap(tag =>
      Array.from(document.querySelectorAll(tag)).map(h => ({
        level: tag, text: h.textContent.trim().slice(0, 60),
      }))
    );
  });

  const images = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img')).map(i => ({
      src: i.src.slice(0, 80), alt: !!i.alt,
    }));
  });

  const links = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('a')).map(a => ({
      href: a.getAttribute('href') || '', text: a.textContent.trim().slice(0, 40),
      hasText: !!a.textContent.trim(),
    }));
  });

  const html = await page.content();
  const pageWeightKB = (new TextEncoder().encode(html).length / 1024).toFixed(1);

  // Count resource requests
  const resources = JSON.parse(await page.evaluate(() => {
    return JSON.stringify(performance.getEntriesByType('resource').map(r => ({
      name: r.name.split('/').pop().slice(0, 40),
      size: r.transferSize || r.encodedBodySize || 0,
    })));
  }));
  const totalResourceBytes = resources.reduce((s, r) => s + r.size, 0);

  // Font check
  const fontsLoaded = await page.evaluate(() => document.fonts.status);

  // Collect Web Vitals using PerformanceObserver
  const vitals = await page.evaluate(() => {
    return new Promise((resolve) => {
      const results = {};
      let done = 0;
      const finish = () => { if (++done >= 4) resolve(results); };

      try {
        const obs = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          if (entries.length) {
            results.LCP = Math.round(entries[entries.length - 1].renderTime || entries[entries.length - 1].loadTime);
          }
        });
        obs.observe({ type: 'largest-contentful-paint', buffered: true });
        setTimeout(() => { try { obs.disconnect(); } catch {} finish(); }, 3000);
      } catch { finish(); }

      try {
        const obs = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          if (entries.length) {
            results.FCP = Math.round(entries[0].startTime);
          }
        });
        obs.observe({ type: 'first-contentful-paint', buffered: true });
        setTimeout(() => { try { obs.disconnect(); } catch {} finish(); }, 1000);
      } catch { finish(); }

      try {
        let cls = 0;
        const obs = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) cls += entry.value;
          }
        });
        obs.observe({ type: 'layout-shift', buffered: true });
        setTimeout(() => { try { obs.disconnect(); } catch {} results.CLS = Math.round(cls * 1000) / 1000; finish(); }, 3000);
      } catch { finish(); }

      try {
        const obs = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'navigation') {
              results.TTFB = Math.round(entry.responseStart);
            }
          }
        });
        obs.observe({ type: 'navigation', buffered: true });
        setTimeout(() => { try { obs.disconnect(); } catch {} finish(); }, 1000);
      } catch { finish(); }

      setTimeout(() => resolve(results), 5000);
    });
  });

  const navTiming = await page.evaluate(() => {
    const n = performance.getEntriesByType('navigation')[0];
    if (!n) return {};
    return {
      domContentLoaded: Math.round(n.domContentLoadedEventEnd),
      loadEvent: Math.round(n.loadEventEnd),
      domInteractive: Math.round(n.domInteractive),
    };
  });

  const report = {
    url, title,
    checks: {
      viewport: { pass: !!viewportMeta && viewportMeta.includes('width=device-width'), value: viewportMeta },
      title: { pass: !!title, value: title },
      metaDescription: { pass: !!metaDesc, value: metaDesc },
      h1Count: { value: headings.filter(h => h.level === 'h1').length },
      imagesMissingAlt: { value: images.filter(i => !i.alt).length },
      emptyLinks: { value: links.filter(l => !l.hasText).length },
      fontsStatus: fontsLoaded,
    },
    vitals,
    navigationTiming: navTiming,
    resources,
    pageWeight: { html: `${pageWeightKB} KB`, resources: `${(totalResourceBytes / 1024).toFixed(1)} KB` },
  };

  console.log('═══════════════════════════════════════');
  console.log('  PERFORMANCE & QUALITY AUDIT');
  console.log(`  ${url}`);
  console.log('═══════════════════════════════════════');

  console.log(`\nTitle:           ${report.checks.title.value}`);
  console.log(`Meta Description: ${report.checks.metaDescription.pass ? '✓' : '✗'} ${report.checks.metaDescription.value?.slice(0, 80) || '(missing)'}`);
  console.log(`Viewport:        ${report.checks.viewport.pass ? '✓' : '✗'} ${report.checks.viewport.value}`);
  console.log(`H1 tags:         ${report.checks.h1Count.value}${report.checks.h1Count.value === 1 ? ' ✓' : ' (expected 1)'}`);
  console.log(`Images:          ${images.length} total, ${report.checks.imagesMissingAlt.value} missing alt`);
  console.log(`Links:           ${links.length} total, ${report.checks.emptyLinks.value} empty`);
  console.log(`Fonts loaded:    ${fontsLoaded}`);

  console.log(`\n── Web Vitals ──`);
  if (vitals.LCP) console.log(`LCP:             ${vitals.LCP}ms`);
  if (vitals.FCP) console.log(`FCP:             ${vitals.FCP}ms`);
  if (vitals.CLS) console.log(`CLS:             ${vitals.CLS}`);
  if (vitals.TTFB) console.log(`TTFB:            ${vitals.TTFB}ms`);
  if (navTiming.domContentLoaded) console.log(`DOM Content:     ${navTiming.domContentLoaded}ms`);
  if (navTiming.loadEvent) console.log(`Load Event:      ${navTiming.loadEvent}ms`);

  console.log(`\n── Page Weight ──`);
  console.log(`HTML:            ${report.pageWeight.html}`);
  console.log(`Resources:       ${report.pageWeight.resources} (${resources.length} requests)`);

  console.log(`\n── Heading Structure ──`);
  headings.forEach(h => console.log(`  ${h.level}: ${h.text}`));

  const altMissing = images.filter(i => !i.alt);
  if (altMissing.length) {
    console.log(`\n── Images Missing Alt Text ──`);
    altMissing.forEach(i => console.log(`  ⚠️  ${i.src}`));
  }

  const emptyL = links.filter(l => !l.hasText);
  if (emptyL.length) {
    console.log(`\n── Empty Links ──`);
    emptyL.forEach(l => console.log(`  ⚠️  href="${l.href}"`));
  }

  writeFileSync(resolve(__dirname, '..', 'dist', 'perf-audit.json'), JSON.stringify(report, null, 2));
  console.log(`\nReport saved to dist/perf-audit.json`);
  await browser.close();
}

main().catch(err => { console.error(err); process.exit(1); });
