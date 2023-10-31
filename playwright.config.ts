import { defineConfig } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests/',
  /* Snapshot to compare - path  */
  snapshotPathTemplate: '{testDir}/visual/screenshots/{projectName}/{testFilePath}/{arg}{ext}',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://magento.softwaretestingboard.com/',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Google Chrome',
      grep: /@desktop/,
      use: {
        viewport: {
          width: 1920,
          height: 1440,
        },
        channel: 'chrome',
      },
    },
    /* Test against mobile viewports. */
    {
      name: 'Mobile Chrome',
      grep: /@mobile/,
      use: {
        userAgent:
          'Mozilla/5.0 (Linux; Android 9; Pixel 3 Build/PQ1A.181105.017.A1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.5359.29 Mobile Safari/537.36',
        viewport: {
          width: 393,
          height: 1440,
        },
        deviceScaleFactor: 2.75,
        isMobile: true,
        hasTouch: true,
        channel: 'chrome',
      },
    },
    {
      name: 'api',
      testDir: './tests/api/',
      fullyParallel: false,
      retries: 1,
      timeout: 300_000,
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
