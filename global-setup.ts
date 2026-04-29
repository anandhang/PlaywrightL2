import { FullConfig, chromium, firefox, webkit } from '@playwright/test';

/* async function globalSetup(config: FullConfig) 
{
  for (const browserType of [chromium, firefox, webkit]) 
    {
    const browser = await browserType.launch({ headless: false, slowMo: 500 }); 
    console.log("Global setup starting...");
    const page = await browser.newPage();

    const baseURL = config.projects[0].use?.baseURL;
    if (!baseURL) {
      throw new Error("No baseURL defined in config.projects[0].use");
    }

    // Perform login
    await page.goto(baseURL);
    
    console.log("Navigated to login page");
    await page.fill('#userEmail', 'anantsmail@gmail.com');
    await page.fill('#userPassword', 'Imagine@123');
    await page.click('#login');

    // Wait until network is idle (page fully loaded)
    await page.waitForLoadState('networkidle');

    // Save authentication state to file
    await page.context().storageState({ path: `state-${browserType.name()}.json` });
    console.log(`Storage state saved to - ${browserType.name()}.json`);
    await page.close();
  }
} */

async function globalSetup(config: FullConfig) 
{
    const browser = await chromium.launch({ headless: false, slowMo: 500 }); 
    console.log("Global setup starting...");
    const page = await browser.newPage();

    const baseURL = config.projects[0].use?.baseURL;
    if (!baseURL) {
      throw new Error("No baseURL defined in config.projects[0].use");
    }

    // Perform login
    await page.goto(baseURL);
    
    console.log("Navigated to login page");
    await page.fill('#userEmail', 'anantsmail@gmail.com');
    await page.fill('#userPassword', 'Imagine@123');
    await page.click('#login');

    // Wait until network is idle (page fully loaded)
    await page.waitForLoadState('networkidle');

    // Save authentication state to file
    await page.context().storageState({ path: `state-${chromium.name()}.json` });
    console.log(`Storage state saved to - ${chromium.name()}.json`);
    await page.close();
}

export default globalSetup;
