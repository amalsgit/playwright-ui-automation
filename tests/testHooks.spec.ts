import test from '@playwright/test'
import faker from 'faker'

// Sample test showcasing before and after hooks and sharing of variables

test.describe('Testing test hooks', () => {
  let user: string

  console.log('---------------INSIDE DESCRIBE-----------------')
  test.beforeAll(() => {
    console.log('---------------INSIDE BEFORE ALL-----------------')
    console.log('Creating user')
    user = `AwesomeUser ${faker.name.firstName()}`
  })
  test.afterAll(() => {
    console.log('---------------INSIDE AFTER ALL-----------------')
    console.log('Deleting User')
    console.log(`User ${user} is deleted`)
  })
  test.beforeEach(() => {
    console.log('---------------INSIDE BEFORE EACH-----------------')
    console.log(`Login in as ${user}`)
  })
  test('Inside the 1st test', () => {
    console.log('---------------INSIDE 1st TEST-----------------')
    console.log(`Running test 1 as user ${user}`)
  })
  test('Inside the 2nd test', () => {
    console.log('---------------INSIDE 2nd TEST-----------------')
    console.log(`Running test 2 as user ${user}`)
  })
})