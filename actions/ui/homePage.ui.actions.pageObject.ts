import { expect, Locator, Page, request } from '@playwright/test'

export class HomePage {
  private readonly page: Page
  private readonly conversionBtn: Locator
  private readonly convertFrom: Locator
  private readonly convertTo: Locator
  private readonly conversionValue: Locator
  private readonly conversionMsg: Locator

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
    await this.convertFrom.selectOption(currency)
  }

  async selectToCurrency(currency: string) {
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

