import { PlaywrightTestConfig } from '@playwright/test'

const testConfig: PlaywrightTestConfig = {
  use: {
    video: 'retry-with-video',
    trace: 'retry-with-trace',
  },
  reporter: process.env.CI ? [['github'], ['dot']] : 'html',
  outputDir: './test-results',
  retries: 1
}

export default testConfig