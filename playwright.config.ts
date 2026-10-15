import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests', timeout: 15000, globalTimeout: 180000, fullyParallel: false, workers: 1,
  webServer: { command: 'node scripts/serve-build.mjs', url: 'http://127.0.0.1:4173/notth-web/', reuseExistingServer: false },
  reporter: [['list'], ['json', { outputFile: 'docs/evidence/production/playwright-final.json' }]],
  use: { baseURL: 'http://localhost:4173/notth-web/', trace: 'retain-on-failure' },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'firefox', use: { browserName: 'firefox' } },
    { name: 'webkit', use: { browserName: 'webkit' } },
  ],
});
