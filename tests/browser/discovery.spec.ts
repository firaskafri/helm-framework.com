import { test, expect } from '@playwright/test';

test('published pages expose readable guidance and local fonts without JavaScript', async ({
  browser,
}, testInfo) => {
  test.skip(
    testInfo.project.name !== 'chromium',
    'Static discovery is identical across engines.',
  );
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  const externalFonts: string[] = [];
  page.on('request', (request) => {
    if (/fonts\.(googleapis|gstatic)\.com/.test(request.url()))
      externalFonts.push(request.url());
  });
  await page.goto('/practitioners');
  await page.evaluate(() => document.fonts.ready);
  expect(externalFonts).toEqual([]);
  const markdownPath = await page
    .locator('link[rel="alternate"][type="text/markdown"]')
    .getAttribute('href');
  const markdown = await context.request.get(markdownPath!);
  expect(markdown.status()).toBe(200);
  expect(markdown.headers()['content-type']).toContain('text/markdown');
  const text = await markdown.text();
  expect(text).toContain('Source: https://helmframework.com/practitioners');
  expect(text).toContain('## Agent Architecture Patterns');
  expect(text).toContain('#### Decentralized Handoff');
  expect(text).toContain('Products combine these parts differently.');
  expect(text).not.toContain('Table of contents');
  const index = await context.request.get('/llms.txt');
  expect(index.status()).toBe(200);
  expect(index.headers()['content-type']).toContain('text/plain');
  expect(await index.text()).toContain(
    `https://helmframework.com${markdownPath}`,
  );
  const imageUrl = await page
    .locator('meta[property="og:image"]')
    .getAttribute('content');
  const image = await context.request.get(new URL(imageUrl!).pathname);
  expect(image.status()).toBe(200);
  expect(image.headers()['content-type']).toBe('image/png');
  const body = await image.body();
  expect(body.subarray(0, 8).toString('hex')).toBe('89504e470d0a1a0a');
  expect(body.readUInt32BE(16)).toBe(1200);
  expect(body.readUInt32BE(20)).toBe(630);
  await context.close();
});
