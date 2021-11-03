import test from '@playwright/test'
import * as homePage from '../actions/ui/homePage.ui.actions.functional'

test('Should be able to convert currency', async ({ page }) => {
  await page.goto('https://cash-conversion.dev-tester.com/')
  await homePage.enterConversionValue(page, '100')
  await homePage.selectFromCurrency(page, 'AED')
  await homePage.selectToCurrency(page, 'EUR')
  await homePage.convertCurrency(page)
  await homePage.confirmConversionMessage(page, '100 United Arab Emirates Dirham is about 25.23 Euro')
})