import { test, expect } from '@playwright/test';
import { BaseTestContext } from '../Pages/BaseTestContext';
import { step, attachment, label } from 'allure-js-commons';

let UIObject : BaseTestContext;

test.beforeEach(async ({ page }) => {
  // Create fresh context before each test
  UIObject = new BaseTestContext(page);
});

test.afterEach(async () => {
  UIObject = null as any; 
});
//test.describe.serial("Reties Test case", () => {
  test('@Iphone @Smoke Test case 1 Tag ', async ({ page }, testInfo) => {
    label('feature', 'Login Module');
    label('owner', 'QA Team');

    if(testInfo.retry > 0)
    {
      console.log("running retry, Clearing cache"+testInfo.retry);
    }
    await step('Navigate to login page', async () => 
    {
        await UIObject.loginPage.goTo(page);
    });
    
    
    const productName: string = "iphone 13 pro";
    await step('Add Product', async () => 
    {
        await UIObject.productPage.addProduct(productName);
    });

    await step('Add To Card', async () => 
    {
        await UIObject.productPage.addToCard();
        await page.waitForLoadState('networkidle');
        await page.waitForLoadState('load');
    });

    await step('checkout Product', async () => 
    {
        await UIObject.checkoutPage1.checkoutProduct();
    });

    await step('select Country', async () => 
    {
        await UIObject.paymentPage1.selectCountry("India");
    });

    await step('Place Order', async () => 
    {
        await UIObject.paymentPage1.clickOnPlaceOrder();
        await UIObject.orderDetailsPage.expectedMessage("Thankyou for the order.");
    });
    
    await step('Download Order Details', async () => 
    {
        await UIObject.orderDetailsPage.downloadOrderDetails("order1");
    }); 
    
    
  });

//});