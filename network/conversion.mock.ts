import { Page } from "@playwright/test";

export const mockConversionFailure = async (page: Page) => {
  await page.route('https://cash-conversion-api.dev-tester.com/exchange_rates/convert', route => {
    route.fulfill({
      status: 404,
      headers: {
        'Access-Control-Allow-Origin': 'https://cash-conversion.dev-tester.com',
        'Access-Control-Allow-Headers': 'content-type,key-inflection',
        'Access-Control-Allow-Methods': 'POST',
      }
    })
  })
}