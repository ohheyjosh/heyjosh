import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [solid(), tailwind()],
  output: 'static',
  site: 'https://heyjo.sh/',
  adapter: netlify(),
});
