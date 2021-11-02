import { expect, Locator, Page } from '@playwright/test'

export class HomePage {
  readonly page: Page
  readonly conversionBtn: Locator
  readonly convertFrom: Locator
  readonly convertTo: Locator
  readonly conversionValue: Locator
  readonly conversionMsg: Locator

  constructor(page: Page) {
    this.page = page
    this.conversionBtn = page.locator('#convert_btn')
    this.convertFrom = page.locator('#from_currency')
    this.convertTo = page.locator('#to_currency')
    this.conversionValue = page.locator('#base_amount')
    this.conversionMsg = page.locator('.conversion-response')
  }

  //Actions

  async enterConversionValue(value: string) {
    await this.conversionValue.type(value)
  }

  async selectFromCurrency(currency: string) {
    await this.convertFrom.click()
    await this.convertFrom.selectOption(currency)
  }

  async selectToCurrency(currency: string) {
    await this.convertTo.click()
    await this.convertTo.selectOption(currency)
  }

  async convertCurrency() {
    await this.conversionBtn.click()
  }

  // Assertions

  async confirmConversionMessage(message: string) {
    await expect(this.conversionMsg).toContainText(message)
  }
}

