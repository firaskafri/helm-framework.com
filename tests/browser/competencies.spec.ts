import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const competencies = [
  'Judgment',
  'Communication',
  'Evaluation',
  'Ownership',
  'Learning',
];
const themes = [
  ['Content', 'Preparing an email campaign for a new service'],
  ['Engineering', 'Adding a report-download feature with a coding agent'],
  ['Sales', 'Drafting a proposal after a discovery call'],
  ['Account Management', 'Preparing a customer review before renewal'],
];

test('every role and competency has focused guidance, an example and a practice task', async ({
  page,
}, testInfo) => {
  test.setTimeout(60_000);
  await page.goto('/competencies');
  const examples = page.locator('.skill-examples');
  const select = examples.getByLabel('I want to improve');
  const tabs = examples.getByRole('tab');
  await expect(tabs).toHaveCount(4);
  await expect(page.locator('.skill-definitions h3')).toHaveCount(5);

  for (const [theme, situation] of themes) {
    const tab = examples.getByRole('tab', { name: theme, exact: true });
    await tab.click();
    await expect(tab).toHaveAttribute('aria-selected', 'true');
    const panel = examples.getByRole('tabpanel');
    await expect(panel).toHaveCount(1);
    await expect(panel.getByRole('heading', { name: situation })).toBeVisible();
    for (const competency of competencies) {
      await select.selectOption(competency.toLowerCase());
      const guide = panel.locator('.skill-guide:visible');
      await expect(guide).toHaveCount(1);
      await expect(guide.getByRole('heading', { level: 4 })).toHaveText(
        competency,
      );
      await expect(guide.locator('.skill-steps li')).toHaveCount(2);
      await expect(guide.locator('.skill-worked-example p')).toContainText(
        /\S/,
      );
      await expect(guide.locator('.skill-practice')).toContainText(/\S/);
      await expect(guide.locator('.skill-self-check')).toBeVisible();
      if (testInfo.project.name === 'chromium') {
        const result = await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
          .analyze();
        expect(result.violations).toEqual([]);
      }
    }
  }

  await tabs.first().focus();
  await page.keyboard.press('ArrowRight');
  await expect(tabs.nth(1)).toBeFocused();
  await expect(tabs.nth(1)).toHaveAttribute('aria-selected', 'true');
  await page.keyboard.press('End');
  await expect(tabs.last()).toBeFocused();
  await expect(tabs.last()).toHaveAttribute('aria-selected', 'true');
  await page.keyboard.press('Home');
  await expect(tabs.first()).toHaveAttribute('aria-selected', 'true');
  await expect(select).toHaveValue('learning');
  await expect(page.locator('#content-learning')).toBeVisible();
});

test('practice links preserve the role and guide links restore both choices', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/competencies#engineering-evaluation');
  const examples = page.locator('.skill-examples');
  const select = examples.getByLabel('I want to improve');
  await expect(
    examples.getByRole('tab', { name: 'Engineering', exact: true }),
  ).toHaveAttribute('aria-selected', 'true');
  await expect(select).toHaveValue('evaluation');
  await expect(page.locator('#engineering-evaluation')).toBeVisible();
  await expect(page.locator('#engineering-judgment')).toBeHidden();

  await page
    .getByRole('link', { name: 'Practice Judgment', exact: true })
    .click();
  await expect(page).toHaveURL(/#engineering-judgment$/);
  await expect(page.locator('#engineering-judgment')).toBeFocused();
  await expect(select).toHaveValue('judgment');
  await expect(page.locator('#engineering-judgment')).toContainText(
    'Split your next change',
  );
  await page.goBack();
  await expect(page.locator('#engineering-evaluation')).toBeVisible();
  await expect(select).toHaveValue('evaluation');
  await page.goForward();
  await expect(page.locator('#engineering-judgment')).toBeVisible();

  await select.selectOption('learning');
  await examples.getByRole('tab', { name: 'Sales', exact: true }).click();
  await expect(page).toHaveURL(/#sales-learning$/);
  await page.reload();
  await expect(select).toHaveValue('learning');
  await expect(
    examples.getByRole('tab', { name: 'Sales', exact: true }),
  ).toHaveAttribute('aria-selected', 'true');
  await expect(page.locator('#sales-learning')).toBeVisible();

  await page.evaluate(() => {
    window.location.hash = 'content';
  });
  await expect(page.locator('#content-learning')).toBeVisible();
  await expect(page.locator('#sales')).toBeHidden();
  await page.evaluate(() => {
    window.location.hash = '%E0';
  });
  await expect(page.locator('#content-learning')).toBeVisible();
  expect(errors).toEqual([]);

  await page.emulateMedia({ media: 'print' });
  await expect(examples.getByRole('tablist')).toBeHidden();
  await expect(select).toBeHidden();
  for (const panel of await examples.locator('.skill-panel').all()) {
    await expect(panel).toBeVisible();
    await expect(panel.locator('.skill-guide:visible')).toHaveCount(5);
    await expect(panel.locator('.skill-guide h4')).toHaveText(competencies);
  }
});

test('shared skills remain discoverable and all themed examples readable without JavaScript', async ({
  browser,
  baseURL,
}) => {
  const context = await browser.newContext({
    baseURL,
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
    reducedMotion: 'reduce',
  });
  const page = await context.newPage();
  await page.goto('/');
  await page
    .getByRole('navigation', { name: 'Main navigation', exact: true })
    .getByRole('link', { name: 'Shared skills', exact: true })
    .filter({ visible: true })
    .click();
  await expect(page).toHaveURL(/\/competencies\/?$/);
  await expect(
    page.getByRole('heading', {
      name: 'Shared skills for working with AI',
      exact: true,
    }),
  ).toBeVisible();
  await expect(
    page.getByRole('tablist', { name: 'Role or team' }),
  ).toBeHidden();
  await expect(page.getByLabel('I want to improve')).toBeHidden();
  await expect(
    page.getByRole('navigation', { name: 'Jump to role guides' }),
  ).toBeVisible();
  const panels = page.locator('.skill-panel');
  await expect(panels).toHaveCount(4);
  for (const panel of await panels.all()) {
    await expect(panel).toBeVisible();
    await expect(panel.locator('.skill-guide:visible')).toHaveCount(5);
    await expect(panel.locator('.skill-guide h4')).toHaveText(competencies);
    await expect(panel.locator('.skill-steps li:visible')).toHaveCount(10);
    await expect(panel.locator('.skill-practice:visible')).toHaveCount(5);
  }
  await expect(page.locator('#content')).toContainText('outdated price');
  await expect(page.locator('#engineering')).toContainText(
    'two customer accounts',
  );
  await expect(page.locator('#sales')).toContainText('discovery question');
  await expect(page.locator('#account-management')).toContainText(
    'onboarding confusion',
  );
  await page
    .getByRole('link', { name: 'Practice Evaluation', exact: true })
    .click();
  await expect(page).toHaveURL(/#content-evaluation$/);
  await expect(page.locator('#content-evaluation')).toBeInViewport();
  await context.close();
});
