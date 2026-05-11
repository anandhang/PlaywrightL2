import { test, expect } from '@playwright/test';
import { BaseTestContext } from '../Pages/BaseTestContext';

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

    if(testInfo.retry > 0)
    {
      console.log("running retry, Clearing cache"+testInfo.retry);
    }
    await UIObject.loginPage.goTo(page);
    
    const productName: string = "iphone 13 pro";
    await UIObject.productPage.addProduct(productName);
    await UIObject.productPage.addToCard();
    await page.waitForLoadState('networkidle');
    await page.waitForLoadState('load');
    await UIObject.checkoutPage1.checkoutProduct();
    await UIObject.paymentPage1.selectCountry("India");
    await UIObject.paymentPage1.clickOnPlaceOrder();
    await UIObject.orderDetailsPage.expectedMessage("Thankyou for the order.");
    
    await UIObject.orderDetailsPage.downloadOrderDetails("order1");
  });

  test('@Adidas @Smoke Test case 2 Tag ', async ({ page }, testInfo) => {
    if(testInfo.retry > 0)
    {
      console.log("running retry, Clearing cache"+testInfo.retry);
    }

    await UIObject.loginPage.goTo(page);
    
    const productName: string = "ADIDAS ORIGINAL";
    await UIObject.productPage.addProduct(productName);
    await UIObject.productPage.addToCard();
    await page.waitForLoadState('networkidle');
    await page.waitForLoadState('load');
    await UIObject.checkoutPage1.checkoutProduct();
    await UIObject.paymentPage1.selectCountry("India");
    await UIObject.paymentPage1.clickOnPlaceOrder();
    await UIObject.orderDetailsPage.expectedMessage("Thankyou for the order.");
    
    await UIObject.orderDetailsPage.downloadOrderDetails("order1");
  });


  test('@Coat Test case 3 Tag ', async ({ page }, testInfo) => {
    if(testInfo.retry > 0)
    {
      console.log("running retry, Clearing cache"+testInfo.retry);
    }
    await UIObject.loginPage.goTo(page);
    
    const productName: string = "ZARA COAT 3";
    await UIObject.productPage.addProduct(productName);
    await UIObject.productPage.addToCard();
    await page.waitForLoadState('networkidle');
    await page.waitForLoadState('load');
    await UIObject.checkoutPage1.checkoutProduct();
    await UIObject.paymentPage1.selectCountry("India");
    await UIObject.paymentPage1.clickOnPlaceOrder();
    await UIObject.orderDetailsPage.expectedMessage("Thankyou for the order.");
    
    await UIObject.orderDetailsPage.downloadOrderDetails("order1");
  });
//});