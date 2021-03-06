import test, { expect } from '@playwright/test'
import * as toDoApi from '../actions/api/toDo.api.actions'

// Test to demonstrate how API calls can be made in e2e tests

test('Should be able to make an API call', async ({ page }) => {
  const result = await toDoApi.makeApiCall(page)
  expect(result.status()).toEqual(200)
  const respBody = await result.json()
  expect(respBody.id).toEqual(1)
})