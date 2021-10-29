import test from "@playwright/test";

test('my first test', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/intro')
})