import { Page } from '@playwright/test'
import config from '../actions/utils/config'

export const mockConversionFailure = async (page: Page) => {
  await page.route(`${config.apiUrl}/exchange_rates/convert`, route => {
    route.fulfill({
      status: 404,
      headers: {
        'Access-Control-Allow-Origin': `${config.baseUrl}`,
        'Access-Control-Allow-Headers': 'content-type,key-inflection',
        'Access-Control-Allow-Methods': 'POST',
      }
    })
  })
}