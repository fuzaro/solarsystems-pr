import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  site: 'https://luizsolarsystems.github.io/solarsystems-pr',
  base: '/solarsystems-pr',
  integrations: [tailwind()],
});
