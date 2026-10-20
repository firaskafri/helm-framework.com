import { test, expect } from '@playwright/test';

test('home offers the six principles and direct guidance paths', async ({
  page,
}) => {
  await page.goto('/');
  await expect(
    page.getByRole('heading', { level: 1, name: 'HELM', exact: true }),
  ).toBeVisible();
  const principles = page.locator('.principles-grid a');
  await expect(principles).toHaveCount(6);
  await principles
    .filter({ hasText: 'Agents Execute, Humans Are Accountable' })
    .click();
  await expect(
    page.locator('#principle-3-agents-execute-humans-are-accountable'),
  ).toBeVisible();
  await page.goBack();
  await page
    .locator('#guides')
    .getByRole('link', { name: /Read the Practitioner Guide/ })
    .click();
  await expect(page.locator('#the-operating-loop')).toBeVisible();
});

test('the proposal example remains keyboard accessible without JavaScript', async ({
  browser,
  browserName,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4322/#work');
  const example = page.locator('#work');
  await example.locator('summary').focus();
  await page.keyboard.press('Enter');
  await expect(example).toHaveAttribute('open', '');
  await expect(
    example.getByText('Accountable throughout: the sales lead.'),
  ).toBeVisible();
  await expect(example.getByText(/without permission to send/)).toBeVisible();
  // WebKit's default macOS preference uses Option-Tab to include links.
  await page.keyboard.press(browserName === 'webkit' ? 'Alt+Tab' : 'Tab');
  await expect(
    example.getByRole('link', { name: /Discuss the human-agent boundary/ }),
  ).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('#the-human-agent-boundary')).toBeVisible();
  await context.close();
});
