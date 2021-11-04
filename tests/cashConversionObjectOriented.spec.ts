import test from '@playwright/test'
import { HomePage } from '../actions/ui/homePage.objectOriented.ui.actions'

// Automated test making use of the traditional page object pattern

test('Should be able to convert currency', async ({ page }) => {
  await page.goto('https://cash-conversion.dev-tester.com/')
  const homePage = new HomePage(page)
  await homePage.enterConversionValue('100')
  await homePage.selectFromCurrency('AED')
  await homePage.selectToCurrency('EUR')
  await homePage.convertCurrency()
  await homePage.confirmConversionMessage('100 United Arab Emirates Dirham is about 25.23 Euro')
})