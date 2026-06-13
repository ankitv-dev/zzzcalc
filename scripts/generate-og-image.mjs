import { chromium } from 'playwright';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { width: 1200px; height: 630px; overflow: hidden; }
    .canvas { width: 1200px; height: 630px; background: #181715; position: relative; }
    .title {
      position: absolute; top: 190px; left: 0; width: 1200px; text-align: center;
      font-family: 'Cormorant Garamond', Georgia, serif; font-size: 72px; font-weight: 400;
      color: #faf9f5; letter-spacing: -0.5px;
    }
    .subtitle {
      position: absolute; top: 275px; left: 0; width: 1200px; text-align: center;
      font-family: Inter, sans-serif; font-size: 26px; font-weight: 400;
      color: #a09d96; letter-spacing: 0.3px;
    }
    .button {
      position: absolute; top: 340px; left: 500px; width: 200px; height: 50px;
      background: #cc785c; border-radius: 8px; text-align: center;
      line-height: 50px; font-family: Inter, sans-serif; font-size: 18px; font-weight: 500;
      color: #ffffff;
    }
    .dot { position: absolute; border-radius: 50%; }
  </style>
</head>
<body>
  <div class="canvas">
    <div class="title">Sleep Cycle Calculator</div>
    <div class="subtitle">Wake up refreshed. Every time.</div>
    <div class="button">zzzcalc.vercel.app</div>
    <div class="dot" style="left:180px; top:120px; width:16px; height:16px; background:#cc785c; opacity:0.6;"></div>
    <div class="dot" style="left:220px; top:100px; width:10px; height:10px; background:#cc785c; opacity:0.3;"></div>
    <div class="dot" style="left:160px; top:90px; width:8px; height:8px; background:#faf9f5; opacity:0.4;"></div>
    <div class="dot" style="left:1020px; top:510px; width:16px; height:16px; background:#cc785c; opacity:0.6;"></div>
    <div class="dot" style="left:1060px; top:530px; width:10px; height:10px; background:#cc785c; opacity:0.3;"></div>
    <div class="dot" style="left:1000px; top:540px; width:8px; height:8px; background:#faf9f5; opacity:0.4;"></div>
  </div>
</body>
</html>`;

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 2 });
  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  const outputPath = resolve(__dirname, '..', 'public', 'og-image.png');
  await page.screenshot({ path: outputPath, fullPage: true, type: 'png' });
  await browser.close();
  console.log(`OG image saved to ${outputPath}`);
}

main().catch(err => { console.error(err); process.exit(1); });
