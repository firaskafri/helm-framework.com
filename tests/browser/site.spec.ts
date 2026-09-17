import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { readdir } from 'node:fs/promises';
import path from 'node:path';

const root = process.env.BASELINE_DIST ?? 'dist';
const files = await readdir(root, { recursive: true });
const routes = files
  .filter(
    (file) => file.endsWith('.html') && !file.startsWith(`checks${path.sep}`),
  )
  .map(
    (file) =>
      `/${file
        .split(path.sep)
        .join('/')
        .replace(/index\.html$/, '')}`,
  );

for (const route of routes) {
  test(`accessibility and responsive layout: ${route}`, async ({
    page,
  }, testInfo) => {
    test.skip(
      testInfo.project.name !== 'chromium',
      'Full route audit runs on Chromium; interaction coverage runs across engines.',
    );
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto(route);
    await expect(page.locator('main')).toBeVisible();
    for (const width of [1280, 390, 320]) {
      await page.setViewportSize({ width, height: 900 });
      // Render all deferred entrance animations before checking text contrast.
      await page.locator('footer').scrollIntoViewIfNeeded();
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(400);
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
        .analyze();
      expect(
        results.violations.map(({ id, nodes }) => ({
          id,
          targets: nodes.map(({ target }) => target),
        })),
      ).toEqual([]);
      const overflow = await page.evaluate(() => ({
        width: window.innerWidth,
        total: document.documentElement.scrollWidth,
        elements: [...document.querySelectorAll('main *')]
          .filter(
            (element) =>
              element.getBoundingClientRect().right > window.innerWidth + 1 &&
              element.getBoundingClientRect().width > 0,
          )
          .slice(0, 8)
          .map((element) => element.className),
      }));
      expect(overflow.total, JSON.stringify(overflow)).toBeLessThanOrEqual(
        width + 1,
      );
    }
    expect(errors).toEqual([]);
  });
}

test('updates are discoverable and link to changed content without JavaScript', async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    reducedMotion: 'reduce',
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4322/');
  const latest = page.locator('section[aria-labelledby="latest-updates"]');
  const link = latest.getByRole('link', { name: /See what changed/ }).first();
  const destination = await link.getAttribute('href');
  await link.click();
  await page.waitForLoadState('load');
  await expect
    .poll(() => page.evaluate(() => document.fonts.status))
    .toBe('loaded');
  expect(new URL(page.url()).pathname).toBe('/updates');
  const entry = page.locator(
    `[data-update-id="${destination?.split('#')[1]}"]`,
  );
  await expect(entry).toBeVisible();
  const changedContent = entry.locator('.update-links a[href^="/"]').first();
  const target = await changedContent.getAttribute('href');
  await changedContent.click();
  expect(new URL(page.url()).pathname).toBe(
    new URL(target!, 'http://127.0.0.1:4322').pathname,
  );
  await expect(page.locator('main h1')).toBeVisible();
  await context.close();
});

test('mobile menu supports Escape and ordinary keyboard navigation', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const button = page.getByRole('button', { name: 'Toggle menu' });
  await button.click();
  await expect(button).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Escape');
  await expect(button).toHaveAttribute('aria-expanded', 'false');
  await expect(button).toBeFocused();
  await page.keyboard.press('Tab');
  const focused = await page.evaluate(() => document.activeElement?.outerHTML);
  await page.keyboard.press('Escape');
  expect(await page.evaluate(() => document.activeElement?.outerHTML)).toBe(
    focused,
  );
});

test('no JavaScript: mobile navigation and all substantive panels remain available', async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4322/');
  await page
    .locator('nav')
    .first()
    .getByRole('link', { name: 'Practitioners', exact: true })
    .filter({ visible: true })
    .click();
  for (const selector of [
    '.ps-panel',
    '.ms-panel',
    '.ol-panel',
    '.tm-detail',
    '.gs-detail-wrap',
  ]) {
    for (const panel of await page.locator(selector).all())
      await expect(panel).toBeVisible();
  }
  await page.goto('http://127.0.0.1:4322/leadership');
  for (const selector of [
    '.at-panel',
    '.kd-panel',
    '.fd-content-wrap',
    '.os-shift-card',
  ]) {
    for (const panel of await page.locator(selector).all())
      await expect(panel).toBeVisible();
  }
  await page.goto('http://127.0.0.1:4322/roles/competency-map');
  for (const panel of await page.locator('.ce-role').all())
    await expect(panel).toBeVisible();
  await context.close();
});

test('tabs, matrix, accordions and deep links work by keyboard', async ({
  page,
}) => {
  await page.goto('/practitioners');
  for (const selector of ['.ps-wrap', '.ms-wrap', '.ol-wrap']) {
    const wrap = page.locator(selector);
    const tabs = wrap.getByRole('tab');
    await tabs.first().focus();
    await page.keyboard.press('End');
    await expect(tabs.last()).toHaveAttribute('aria-selected', 'true');
    await expect(wrap.getByRole('tabpanel')).toHaveCount(1);
    await page.keyboard.press('Home');
    await expect(tabs.first()).toHaveAttribute('aria-selected', 'true');
  }
  const cells = page.locator('.tm-cell');
  await cells.first().focus();
  await page.keyboard.press('ArrowDown');
  await expect(cells.nth(3)).toBeFocused();
  await expect(page.locator('.tm-detail:visible')).toHaveCount(1);
  const guard = page.locator('.gs-layer-header').first();
  await guard.focus();
  await page.keyboard.press('Enter');
  await expect(guard).toHaveAttribute('aria-expanded', 'true');
  const target = await page.locator('.ps-panel').last().getAttribute('id');
  await page.goto(`/practitioners#${target}`);
  await expect(page.locator('.ps-panel').last()).toBeVisible();
  await page.goto('/roles/competency-map#product-designer');
  await expect(page.locator('#product-designer')).toBeVisible();
});

test('both tables of contents track the active heading', async ({ page }) => {
  await page.goto('/foundation');
  const target = page.locator('article h3').nth(2);
  const id = await target.getAttribute('id');
  await target.evaluate((element) =>
    window.scrollTo(
      0,
      window.scrollY + element.getBoundingClientRect().top - 100,
    ),
  );
  await expect(
    page.locator(`.toc a[href="#${id}"][aria-current="location"]`),
  ).toHaveCount(2);
});

test('reduced motion and print preserve content', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/practitioners');
  await expect(page.locator('.ms-node').first()).toHaveCSS(
    'animation-name',
    'none',
  );
  await page.emulateMedia({ media: 'print' });
  for (const panel of await page
    .locator('.ps-panel, .ms-panel, .gs-detail-wrap')
    .all())
    await expect(panel).toBeVisible();
});

test('repeated interactive components keep independent state and unique IDs', async ({
  page,
}) => {
  await page.goto('/checks/components');
  const ids = await page
    .locator('[id]')
    .evaluateAll((elements) => elements.map((element) => element.id));
  expect(new Set(ids).size).toBe(ids.length);
  for (const selector of [
    '.ps-wrap',
    '.ms-wrap',
    '.at-wrap',
    '.kd-wrap',
    '.ol-wrap',
  ]) {
    const first = page.locator('[data-instance="1"]').locator(selector);
    const second = page.locator('[data-instance="2"]').locator(selector);
    await second.getByRole('tab').first().focus();
    await page.keyboard.press('End');
    await expect(second.getByRole('tab').last()).toHaveAttribute(
      'aria-selected',
      'true',
    );
    await expect(first.getByRole('tab').first()).toHaveAttribute(
      'aria-selected',
      'true',
    );
  }
  for (const selector of ['.gs-layer-header', '.fd-card-header']) {
    const first = page.locator('[data-instance="1"]').locator(selector).first();
    const second = page
      .locator('[data-instance="2"]')
      .locator(selector)
      .first();
    await second.click();
    await expect(second).toHaveAttribute('aria-expanded', 'true');
    await expect(first).toHaveAttribute('aria-expanded', 'false');
  }
  await page.locator('[data-instance="2"] .tm-cell').last().click();
  await expect(
    page.locator('[data-instance="1"] .tm-cell').first(),
  ).toHaveAttribute('aria-pressed', 'true');
});

test('all interactive states pass accessibility checks', async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name !== 'chromium');
  test.setTimeout(240000);
  for (const route of [
    '/practitioners',
    '/leadership',
    '/roles/competency-map',
  ]) {
    await page.goto(route);
    await page.emulateMedia({ reducedMotion: 'reduce' });
    for (const control of await page
      .locator('[role="tab"], .gs-layer-header, .fd-card-header, .tm-cell')
      .all()) {
      await control.click();
      const result = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
        .analyze();
      expect(
        result.violations.map(({ id, nodes }) => ({
          id,
          targets: nodes.map(({ target }) => target),
        })),
      ).toEqual([]);
    }
  }
});
