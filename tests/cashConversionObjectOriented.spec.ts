import test from '@playwright/test'
import { HomePage } from '../actions/ui/homePage.objectOriented.ui.actions'
import config from '../actions/utils/config'

// Automated test making use of the traditional page object pattern

test('Should be able to convert currency', async ({ page }) => {
  await page.goto(config.baseUrl)
  const homePage = new HomePage(page)
  await homePage.enterConversionValue('100')
  await homePage.selectFromCurrency('AED')
  await homePage.selectToCurrency('EUR')
  await homePage.convertCurrency()
  await homePage.confirmConversionMessage('100 United Arab Emirates Dirham is about 25.23 Euro')
})