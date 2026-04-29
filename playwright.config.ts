import { defineConfig, devices } from '@playwright/test';

const ENV = process.env.ENV || 'dev';
const baseURLMap: Record<string, string> = {
  dev: 'https://rahulshettyacademy.com/client/#/auth/login',
  staging:'https://rahulshettyacademy.com/client',
  prod:'https://rahulshettyacademy.com/',
};
const baseURL = baseURLMap[ENV] ?? baseURLMap.dev;

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 2,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 3 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['line'],
    ['html', {open: 'always'}],
    ['allure-playwright']
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  /* Global setup */
  globalSetup: './global-setup.ts',
  
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
     baseURL,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    video: 'on',
    actionTimeout: 15_000,
    navigationTimeout: 30_000,
    headless:true,
    launchOptions: {
      slowMo: 1000,
    },
    storageState: 'state.json'
  },

  /* Configure projects for major browsers */
  projects: [
    //  {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'], storageState: 'state-chromium.json' },
    // },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'], storageState: 'state-firefox.json' },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'], storageState: 'state-webkit.json' },
    // }, 

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    {
       name: 'Google Chrome',
       use: { ...devices['Desktop Chrome'], channel: 'chrome',headless:false }
       
     },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
