import { PlaywrightTestConfig } from "@playwright/test";

const testConfig: PlaywrightTestConfig = {
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  }
}