import test, { expect } from '@playwright/test'
import * as toDoApi from '../actions/api/toDo.api.actions'

type todoResult = { userId: number, id: number, title: string, completed: boolean }

test('Should be able to make an API call', async ({ page }) => {
  const result = await toDoApi.makeApiCall(page)
  expect(result.status()).toEqual(200)
  const respBody: todoResult = await result.json()
  expect(respBody.id).toEqual(1)
})