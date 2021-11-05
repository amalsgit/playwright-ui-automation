import { Page } from '@playwright/test'
import config from '../actions/utils/config'

export const conversionLogger = async (page: Page) => {
  await page.route(`${config.apiUrl}/exchange_rates/convert`, async route => {
    route.continue()
    console.log(await (await route.request().response()).json())
    console.log(await route.request().allHeaders())
    console.log(await route.request().postDataJSON())
  })
}