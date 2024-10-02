import { test, expect } from '@playwright/test';

test('Basic Test: Example Domain', async ({ page }) => {
  await page.goto('https://example.com');
  const title = page.locator('h1');
  await expect(title).toHaveText('Example Domain');
});
