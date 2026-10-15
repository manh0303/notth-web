import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

for (const width of [375, 768, 1440]) {
  test(`FR-001/002/004 NFR-001/002/003 layout ${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 1000 });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    const failures: string[] = [];
    page.on('pageerror', e => failures.push(e.message));
    page.on('response', r => { if (r.url().includes('localhost') && r.status() >= 400) failures.push(`${r.status()} ${r.url()}`); });
    await page.goto('./'); await page.evaluate(() => document.fonts.ready);
    await expect(page.locator('h1')).toHaveText('Nothingunnecessary.');
    await expect(page.locator('.workflow-steps h3')).toHaveText(['Requirements','Design','Code','Test','Review']);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.screenshot({ path: `docs/evidence/preview/${width}.png`, fullPage: true });
    const axe = await new AxeBuilder({ page }).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze();
    expect(axe.violations.filter(v => ['critical','serious'].includes(v.impact ?? ''))).toEqual([]);
    await expect(page.locator('link[rel=canonical]')).toHaveAttribute('href','https://manh0303.github.io/notth-web/');
    for (const href of await page.locator('a[href^="#"]').evaluateAll(els => els.map(e => e.getAttribute('href')!))) await expect(page.locator(href)).toHaveCount(1);
    expect(failures).toEqual([]);
  });
}
test('FR-005 exact motion sequence, 500ms pause, stable bounds', async ({ page }) => {
  const epoch = new Date('2026-01-01T00:00:00Z'); await page.clock.install({ time: epoch }); await page.clock.pauseAt(epoch); await page.goto('./');
  const word = page.locator('[data-letters]');
  await expect(word).toHaveText('notth');
  const initial = await page.locator('.motion-stage').boundingBox();
  await page.clock.runFor(1200); await expect(word).toHaveText('nott');
  await page.clock.runFor(120); await expect(word).toHaveText('not');
  await page.clock.runFor(499); await expect(word).toHaveText('not');
  await page.clock.runFor(1); await expect(word).toHaveText('noth');
  for (const value of ['nothi','nothin','nothing']) { await page.clock.runFor(140); await expect(word).toHaveText(value); }
  expect(await page.locator('.motion-stage').boundingBox()).toEqual(initial);
  await page.clock.runFor(4000); await expect(word).toHaveText('nothing');
  await expect(page.locator('[data-motion]')).not.toHaveClass(/playing/);
});
test('FR-005 reduced motion remains static', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' }); const epoch = new Date('2026-01-01T00:00:00Z'); await page.clock.install({ time: epoch }); await page.clock.pauseAt(epoch); await page.goto('./'); await page.clock.runFor(5000);
  await expect(page.locator('[data-letters]')).toHaveText('notth');
  expect(await page.locator('.caret').evaluate(el => getComputedStyle(el).animationName)).toBe('none');
});
test('FR-004 NFR-002 mobile menu keyboard and Escape', async ({ page }) => {
  await page.setViewportSize({width:375,height:812}); await page.goto('./');
  const menu = page.getByRole('button', {name:'Menu'}); await menu.focus(); await page.keyboard.press('Enter');
  await expect(menu).toHaveAttribute('aria-expanded','true'); await expect(page.getByRole('navigation', {name:'Main navigation'})).toBeVisible();
  await page.screenshot({path:'docs/evidence/preview/mobile-menu.png'});
  await page.keyboard.press('Escape'); await expect(menu).toBeFocused(); await expect(menu).toHaveAttribute('aria-expanded','false');
  await menu.click(); await page.getByRole('navigation', {name:'Main navigation'}).getByRole('link', {name:'Get started'}).click();
  await expect(menu).toHaveAttribute('aria-expanded','false'); await expect(page).toHaveURL(/#install$/);
});
test('FR-003 copy failure and selectable source command', async ({ page }) => {
  await page.addInitScript(() => Object.defineProperty(navigator,'clipboard',{value:{writeText:async()=>{throw Error('denied')}}}));
  await page.goto('./'); await page.getByRole('button',{name:'Copy command'}).click();
  await expect(page.getByRole('status')).toHaveText('Copy unavailable. Select and copy the command manually.');
  await expect(page.locator('#install-command')).toContainText('--host codex --adapters astro --capabilities uiux,product,architecture,delivery');
});
test('FR-003 real clipboard success', async ({page, context}) => {
  await context.grantPermissions(['clipboard-read','clipboard-write']); await page.goto('./');
  await page.getByRole('button',{name:'Copy command'}).click();
  await expect(page.getByRole('status')).toContainText('Command copied.');
  expect(await page.evaluate(() => navigator.clipboard.readText())).toContain('--host codex');
});
test('FR-004/005 no JavaScript keeps essential navigation and brand', async ({browser}) => {
  const context = await browser.newContext({javaScriptEnabled:false, viewport:{width:375,height:812}}); const page = await context.newPage();
  await page.goto('http://localhost:4173/notth-web/');
  await expect(page.getByRole('navigation',{name:'Main navigation'})).toBeVisible();
  await expect(page.locator('[data-letters]')).toHaveText('notth');
  await page.getByRole('navigation',{name:'Main navigation'}).getByRole('link',{name:'Get started'}).click(); await expect(page).toHaveURL(/#install$/);
  await context.close();
});
test('NFR-001 200% equivalent desktop reflow', async ({page}) => {
  await page.setViewportSize({width:720,height:450}); await page.goto('./');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await expect(page.locator('#install')).toBeVisible();
});
test('Gate 2 portable HTML opens offline with responsive design and animation', async ({page}) => {
  const { pathToFileURL } = await import('node:url');
  const { resolve } = await import('node:path');
  await page.setViewportSize({width:1440,height:1000});
  await page.goto(pathToFileURL(resolve('docs/design/notth-preview.html')).href);
  await expect(page.locator('h1')).toHaveText('Nothingunnecessary.');
  await expect(page.locator('[data-letters]')).toHaveText('nothing');
  expect(await page.locator('body').evaluate(el => getComputedStyle(el).fontFamily)).toContain('Inter');
  await page.screenshot({path:'docs/evidence/preview/desktop-hero.png'});
});
