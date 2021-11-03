import { Page } from '@playwright/test'

export const makeApiCall = async (page: Page) => {
  return await page.request.get('https://jsonplaceholder.typicode.com/todos/1')
}
