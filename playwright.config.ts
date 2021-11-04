import { PlaywrightTestConfig } from "@playwright/test";

const testConfig: PlaywrightTestConfig = {
  use: {
    screenshot: 'only-on-failure',
    video: 'retry-with-video',
    trace: 'retry-with-trace',
  },
  reporter: process.env.CI ? [['github'], ['dot']] : 'html',
  outputDir: './test-results',
  retries: 1
}