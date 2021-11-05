import dotenv from 'dotenv'

dotenv.config()

const config = {
  local: {
    baseUrl: "https://cash-conversion.dev-tester.com",
    apiUrl: 'https://cash-conversion-api.dev-tester.com',
    toDoUrl: 'https://jsonplaceholder.typicode.com',
  },
  production: {
    baseUrl: "https://cash-conversion.dev-tester.com",
    apiUrl: 'https://cash-conversion-api.dev-tester.com',
    toDoUrl: 'https://jsonplaceholder.typicode.com',
  },
}

// Resolve the test environment
const testEnv = process.env.TEST_ENV as keyof typeof config || ('local' as keyof typeof config)

// eslint-disable-next-line no-console
console.log(`Test will be run against ${config[testEnv].baseUrl}`)

export default config[testEnv]
