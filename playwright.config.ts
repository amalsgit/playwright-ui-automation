import { PlaywrightTestConfig } from '@playwright/test'

const testConfig: PlaywrightTestConfig = {
  use: {
    trace: 'retry-with-trace',
  },
  reporter: process.env.CI ? [['github'], ['dot']] : 'list',
  outputDir: './test-results',
  retries: 1
}

export default testConfig