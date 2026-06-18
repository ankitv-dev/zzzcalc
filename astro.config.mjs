import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://zzzcalc.vercel.app',
  integrations: [sitemap({
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
