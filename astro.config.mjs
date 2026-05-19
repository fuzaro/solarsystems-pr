import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  site: 'https://fuzaro.github.io/solarsystems-pr',
  base: '/solarsystems-pr',
  integrations: [tailwind()],
});
