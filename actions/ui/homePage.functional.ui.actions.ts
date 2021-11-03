import { expect, Page } from '@playwright/test'

// This file is designed without using the traditional page object class model.
// Instead a more functional programming approach is used

// Locators

const conversionBtn = '#convert_btn'
const convertFrom = '#from_currency'
const convertTo = '#to_currency'
const conversionValue = '#base_amount'
const conversionMsg = '.conversion-response'

// Actions
export const enterConversionValue = async (page: Page, value: string) => {
  await page.type(conversionValue, value)
}

export const selectFromCurrency = async (page: Page, currency: string) => {
  await page.locator(convertFrom).selectOption(currency)
}

export const selectToCurrency = async (page: Page, currency: string) => {
  await page.locator(convertTo).selectOption(currency)
}

export const convertCurrency = async (page: Page) => {
  await page.click(conversionBtn)
}

// Assertions

export const confirmConversionMessage = async (page: Page, message: string) => {
  await expect(page.locator(conversionMsg)).toContainText(message)
}


