// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: 'https://yuya-0928.github.io',
  base: '/sandbox-astro-satellite-spiral',
  output: 'static'
});