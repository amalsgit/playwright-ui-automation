import { chromium } from 'playwright'
import { Browser } from 'playwright'
import { playAudit } from 'playwright-lighthouse'
import { test as base } from '@playwright/test'
import findFreePorts from 'find-free-ports'


export const lighthouseTest = base.extend<
  // eslint-disable-next-line @typescript-eslint/ban-types
  {},
  { port: number; browser: Browser }
>({
  port: [
    async ({ }, use) => {
      // Assign a unique port for each playwright worker to support parallel tests
      const port = await findFreePorts(1)
      await use(port[0])
    },
    { scope: 'worker' },
  ],

  browser: [
    async ({ port }, use) => {
      const browser = await chromium.launch({
        args: [`--remote-debugging-port=${port}`],
      })
      await use(browser)
    },
    { scope: 'worker' },
  ],
})

lighthouseTest.describe('Lighthouse performance test', () => {
  lighthouseTest('Should pass lighthouse test', async ({ page, port }) => {
    await page.goto('https://playwright.dev/')
    await playAudit({
      page,
      thresholds: {
        performance: 20,
        accessibility: 20,
        'best-practices': 20,
        seo: 20,
        pwa: 20,
      },
      port,
    })
  })
})