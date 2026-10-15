import { test, expect } from '@playwright/test';
for (const width of [375, 1440]) {
  test(`Approved Gate 2 composition ${width}`, async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium', 'Approved baseline exists for Chromium/Linux only');
    await page.setViewportSize({ width, height: 1000 });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('./');
    await page.evaluate(() => document.fonts.ready);
    await expect(page).toHaveScreenshot(`home-${width}.png`, { fullPage: true, animations: 'disabled', maxDiffPixelRatio: 0.005 });
  });
}
