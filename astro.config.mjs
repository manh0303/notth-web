import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://manh0303.github.io',
  base: '/notth-web/',
  output: 'static',
  server: { host: '0.0.0.0', port: 4173 },
  devToolbar: { enabled: false },
});
