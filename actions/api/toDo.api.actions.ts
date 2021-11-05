import { Page } from '@playwright/test'
import config from '../utils/config'

export const makeApiCall = async (page: Page) => {
  return await page.request.get(`${config.toDoUrl}/todos/1`)
}
