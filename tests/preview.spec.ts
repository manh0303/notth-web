import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const steps = ['Requirements', 'Design', 'Code', 'Test', 'Review'];
for (const width of [375, 768, 1440]) {
  test(`Minimal homepage and accessibility at ${width}px`, async ({ page }, testInfo) => {
    await page.setViewportSize({ width, height: 1000 });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    const errors: string[] = [];
    page.on('pageerror', e => errors.push(e.message));
    page.on('response', r => { if (r.url().includes('localhost') && r.status() >= 400) errors.push(`${r.status()} ${r.url()}`); });
    await page.goto('./');
    await page.evaluate(() => document.fonts.ready);
    await expect(page.getByRole('heading', { level: 1 })).toHaveAccessibleName('Nothing unnecessary.');
    await expect(page.locator('h1 [data-letters]')).toHaveText('nothing');
    await expect(page.locator('.step-name')).toHaveText(steps);
    await expect(page.locator('main section')).toHaveCount(2);
    await expect(page.locator('#features, #install, .compatibility, .docs-section')).toHaveCount(0);
    await expect(page.getByRole('link', { name: 'Get started' })).toHaveAttribute('href', 'https://github.com/manh0303/notth/blob/main/docs/getting-started.md');
    await expect(page.locator('.setup-preview')).toContainText('Coming soon');
    await expect(page.locator('.setup-preview button, .setup-preview video, .setup-preview [data-motion]')).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await expect(page.locator('link[rel=canonical]')).toHaveAttribute('href', 'https://manh0303.github.io/notth-web/');
    const axe = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
    expect(axe.violations.filter(v => ['critical', 'serious'].includes(v.impact ?? ''))).toEqual([]);
    await page.screenshot({ path: `docs/evidence/production/${testInfo.project.name}-${width}.png`, fullPage: true });
    expect(errors).toEqual([]);
  });
}

test('Headline motion preserves sequence, 500ms pause and layout', async ({ page }) => {
  const epoch = new Date('2026-01-01T00:00:00Z');
  await page.clock.install({ time: epoch });
  await page.clock.pauseAt(epoch);
  await page.goto('./');
  await page.evaluate(() => document.fonts.ready);
  const letters = page.locator('h1 [data-letters]');
  await expect(letters).toHaveText('notth');
  const initial = await page.locator('h1').boundingBox();
  const media = await page.locator('.setup-preview').boundingBox();
  await page.clock.runFor(1200); await expect(letters).toHaveText('nott');
  await page.clock.runFor(120); await expect(letters).toHaveText('not');
  await page.clock.runFor(499); await expect(letters).toHaveText('not');
  await page.clock.runFor(1); await expect(letters).toHaveText('noth');
  for (const value of ['nothi', 'nothin', 'nothing']) { await page.clock.runFor(140); await expect(letters).toHaveText(value); }
  expect(await page.locator('h1').boundingBox()).toEqual(initial);
  expect(await page.locator('.setup-preview').boundingBox()).toEqual(media);
  await page.clock.runFor(4000);
  await expect(letters).toHaveText('nothing');
  await expect(page.locator('[data-motion]')).not.toHaveClass(/playing/);
});

test('Reduced motion keeps static readable headline', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('./');
  await expect(page.locator('h1 [data-letters]')).toHaveText('nothing');
  await expect(page.locator('.caret')).toBeHidden();
});

test('Mobile keyboard navigation stays directly available', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('./');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'NOTTH home' })).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Docs' })).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'GitHub', exact: true })).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Get started' })).toBeFocused();
});

test.describe('Without JavaScript', () => {
  test.use({ javaScriptEnabled: false });
  test('No-JS homepage keeps tagline and installation/docs links', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('./');
    await expect(page.locator('h1 [data-letters]')).toHaveText('nothing');
    await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
    await expect(page.locator('.step-name')).toHaveText(steps);
  });
});

test('200% equivalent desktop reflow', async ({ page }) => {
  await page.setViewportSize({ width: 720, height: 450 });
  await page.goto('./');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
});

test('Portable HTML opens offline and animates the headline', async ({ page }, testInfo) => {
  const { pathToFileURL } = await import('node:url');
  const { resolve } = await import('node:path');
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(pathToFileURL(resolve('docs/design/notth-preview.html')).href);
  await expect(page.locator('h1 [data-letters]')).toHaveText('nothing');
  expect(await page.locator('body').evaluate(el => getComputedStyle(el).fontFamily)).toContain('Inter');
  await page.screenshot({ path: `docs/evidence/production/${testInfo.project.name}-desktop.png`, fullPage: true });
});

test('SEO, discovery files and base-path assets', async ({ page, request }) => {
  await page.goto('./');
  await expect(page).toHaveTitle('NOTTH — Nothing unnecessary.');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /Requirements|requirements/);
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', 'https://manh0303.github.io/notth-web/social-card.png');
  for (const [path, type] of [['sitemap.xml', 'application/xml'], ['robots.txt', 'text/plain'], ['favicon.svg', 'image/svg+xml'], ['social-card.png', 'image/png']]) {
    const response = await request.get(path);
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain(type);
    if (path === 'sitemap.xml') expect(await response.text()).toContain('<loc>https://manh0303.github.io/notth-web/</loc>');
    if (path === 'robots.txt') expect(await response.text()).toContain('Sitemap: https://manh0303.github.io/notth-web/sitemap.xml');
  }
  await expect(page.getByRole('link', { name: 'Docs' })).toHaveAttribute('href', 'https://github.com/manh0303/notth/tree/main/docs');
  await expect(page.getByRole('link', { name: 'GitHub', exact: true })).toHaveAttribute('href', 'https://github.com/manh0303/notth');
  await expect(page.getByRole('link', { name: 'MIT License' })).toHaveAttribute('href', 'https://github.com/manh0303/notth/blob/main/LICENSE');
});

test('Real-time headline timing and live reduced-motion preference', async ({ page }) => {
  await page.addInitScript(() => {
    const events: { text: string; time: number }[] = [];
    Object.defineProperty(window, '__motionEvents', { value: events });
    new MutationObserver(() => {
      const text = document.querySelector('[data-letters]')?.textContent;
      if (text && events.at(-1)?.text !== text) events.push({ text, time: performance.now() });
    }).observe(document, { subtree: true, childList: true, characterData: true });
  });
  await page.goto('./');
  await expect(page.locator('[data-letters]')).toHaveText('nothing');
  const events = await page.evaluate(() => (window as unknown as Window & { __motionEvents: { text: string; time: number }[] }).__motionEvents);
  const start = events.findIndex(event => event.text === 'notth');
  const animation = events.slice(start);
  expect(animation.map(event => event.text)).toEqual(['notth', 'nott', 'not', 'noth', 'nothi', 'nothin', 'nothing']);
  const pause = animation[3].time - animation[2].time;
  expect(pause).toBeGreaterThanOrEqual(450);
  expect(pause).toBeLessThanOrEqual(650);
  await page.reload();
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(page.locator('[data-letters]')).toHaveText('nothing');
  await expect(page.locator('.caret')).toBeHidden();
});
