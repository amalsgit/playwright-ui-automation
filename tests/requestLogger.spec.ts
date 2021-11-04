import test from '@playwright/test'
import { HomePage } from '../actions/ui/homePage.objectOriented.ui.actions'
import * as conversionLogger from '../network/conversion.logger'

// To demonstrate how api calls can be caught and logged

test('Should be able to log api calls', async ({ page }) => {
  await page.goto('https://cash-conversion.dev-tester.com/')
  const homePage = new HomePage(page)
  await conversionLogger.conversionLogger(page)
  await homePage.enterConversionValue('100')
  await homePage.selectFromCurrency('AED')
  await homePage.selectToCurrency('EUR')
  await homePage.convertCurrency()
  await homePage.confirmConversionMessage('100 United Arab Emirates Dirham is about 25.23 Euro')

  // Check the api logs in the console
})