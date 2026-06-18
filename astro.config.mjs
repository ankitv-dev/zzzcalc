import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://zzzcalc.vercel.app',
  integrations: [sitemap({
    filter: (page) => !page.includes('/404') && !page.includes('/500'),
    namespaces: {
      news: false,
      xhtml: false,
      image: false,
      video: false,
    },
  })],
  vite: {
    plugins: [tailwindcss()],
  },
});
