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

test('Assignment 2 Test case', async ({ page }) => {
  await UIObject.loginPage.goTo(page);
  
  const productName: string = "iphone 13 pro";
  await UIObject.productPage.addProduct(productName);
  await UIObject.productPage.addToCard();
  await UIObject.checkoutPage1.checkoutProduct();
  //await page.pause();
  await UIObject.paymentPage1.selectCountry("India");
  await UIObject.paymentPage1.clickOnPlaceOrder();
  await UIObject.orderDetailsPage.expectedMessage("Thankyou for the order.");
  await UIObject.orderDetailsPage.downloadOrderDetails("order1");
});
