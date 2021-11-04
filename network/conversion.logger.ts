import { Page } from '@playwright/test'

export const conversionLogger = async (page: Page) => {
  await page.route('https://cash-conversion-api.dev-tester.com/exchange_rates/convert', async route => {
    route.continue()
    console.log(await (await route.request().response()).json())
    console.log(await route.request().allHeaders())
    console.log(await route.request().postDataJSON())
  })
}