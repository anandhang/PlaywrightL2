import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch({ headless: false, slowMo: 500 }); 
  console.log("Global setup starting...");
  const page = await browser.newPage();

  // Perform login
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  console.log("Navigated to login page");
  await page.fill('#userEmail', 'anantsmail@gmail.com');
  await page.fill('#userPassword', 'Imagine@123');
  await page.click('#login');
  console.log("Login submitted");

  // Wait until network is idle (page fully loaded)
  await page.waitForLoadState('networkidle');
  console.log("Page loaded after login");

  // Save authentication state to file
  await page.context().storageState({ path: 'state.json' });
  console.log("Storage state saved to state.json");

  await browser.close();
  console.log("Global setup finished");
}

export default globalSetup;
