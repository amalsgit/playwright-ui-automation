import test from '@playwright/test'
import { HomePage } from '../actions/ui/homePage.objectOriented.ui.actions'
import * as conversionMocks from '../network/conversion.mock'

test('Should throw error when conversion fails', async ({ page }) => {
  await page.goto('https://cash-conversion.dev-tester.com/')
  const homePage = new HomePage(page)
  conversionMocks.mockConversionFailure(page)
  await homePage.enterConversionValue('100')
  await homePage.selectFromCurrency('AED')
  await homePage.selectToCurrency('EUR')
  await homePage.convertCurrency()
  await homePage.confirmConversionErrorMessage('There was an error performing the conversion. Please try again.')
})