import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('proposal handoffs explain responsibility and support keyboard navigation', async ({
  page,
}) => {
  await page.goto('/');
  const explorer = page.locator('[data-proposal-explorer]');
  const tabs = explorer.getByRole('tab');
  await expect(explorer).toHaveAttribute('data-enhanced', 'true');
  await expect(tabs).toHaveCount(4);
  await tabs.first().focus();
  for (let i = 0; i < 4; i++) {
    await expect(tabs.nth(i)).toHaveAttribute('aria-selected', 'true');
    await expect(explorer.getByRole('tabpanel')).toHaveCount(1);
    await expect(explorer.locator('.stage-node.active')).toHaveAttribute(
      'data-node',
      String(i),
    );
    await expect(
      explorer.getByRole('tabpanel').getByText('Person owns', { exact: true }),
    ).toBeVisible();
    await expect(
      explorer.getByRole('tabpanel').getByText('Agent does', { exact: true }),
    ).toBeVisible();
    if (i < 3) await page.keyboard.press('ArrowRight');
  }
  await page.keyboard.press('Home');
  await expect(tabs.first()).toBeFocused();
  await page.keyboard.press('ArrowLeft');
  await expect(tabs.last()).toHaveAttribute('aria-selected', 'true');
  await page.keyboard.press('Home');
  await page.keyboard.press('End');
  await expect(tabs.last()).toBeFocused();
  await explorer.getByRole('button', { name: 'Back to direction' }).click();
  await expect(explorer.getByRole('tabpanel')).toBeFocused();
  await expect(tabs.first()).toHaveAttribute('aria-selected', 'true');
  await tabs.nth(2).click();
  await explorer.locator('summary').click();
  await expect(explorer.locator('details')).toHaveAttribute('open', '');
  await expect(
    explorer.getByText(/The date has not been confirmed/),
  ).toBeVisible();
  await expect(
    explorer.getByText('Accountable throughout: the sales lead.'),
  ).toBeVisible();
});

test('proposal content works without JavaScript and remains complete in print', async ({
  browser,
  page,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const nojs = await context.newPage();
  await nojs.goto('http://127.0.0.1:4322/');
  await expect(nojs.locator('.stage-tabs')).toBeHidden();
  await expect(nojs.locator('.stage-panel:visible')).toHaveCount(4);
  await nojs.locator('.review-disclosure summary').click();
  await expect(nojs.locator('.review-disclosure')).toHaveAttribute('open', '');
  await expect(
    nojs.getByRole('link', { name: 'Practitioners', exact: true }).first(),
  ).toBeVisible();
  await context.close();
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await expect(page.locator('.route-stroke')).toHaveCSS(
    'animation-name',
    'none',
  );
  await expect(page.locator('.route-stroke')).toHaveCSS(
    'stroke-dashoffset',
    '0px',
  );
  await page.emulateMedia({ media: 'print' });
  await expect(page.locator('.stage-panel:visible')).toHaveCount(4);
  await expect(page.locator('.next-stage')).toBeHidden();
});

test('proposal states are accessible at desktop and mobile widths', async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name !== 'chromium',
    'Audit states once; keyboard and fallback tests run across engines.',
  );
  await page.goto('/');
  for (const width of [1440, 390, 320]) {
    await page.setViewportSize({ width, height: 900 });
    for (const tab of await page.locator('.stage-tab').all()) {
      await tab.click();
      const results = await new AxeBuilder({ page })
        .include('[data-proposal-explorer]')
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
        .analyze();
      expect(
        results.violations.map(({ id, nodes }) => ({
          id,
          targets: nodes.map(({ target }) => target),
        })),
      ).toEqual([]);
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth),
      ).toBeLessThanOrEqual(width + 1);
    }
  }
});
