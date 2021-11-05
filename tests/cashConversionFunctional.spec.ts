import test from '@playwright/test'
import * as homePage from '../actions/ui/homePage.functional.ui.actions'
import config from '../actions/utils/config'

// Automated test making use of the functional page object pattern

test('Should be able to convert currency', async ({ page }) => {
  await page.goto(config.baseUrl)
  await homePage.enterConversionValue(page, '100')
  await homePage.selectFromCurrency(page, 'AED')
  await homePage.selectToCurrency(page, 'EUR')
  await homePage.convertCurrency(page)
  await homePage.confirmConversionMessage(page, '100 United Arab Emirates Dirham is about 25.23 Euro')
})