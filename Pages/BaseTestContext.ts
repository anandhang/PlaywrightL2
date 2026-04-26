// BaseTestContext.ts
import { Page } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { ProductPage } from './searchproduct';
import { OrderDetailsPage } from './orderDetailsPage';
import {checkoutPage} from './checkoutPage';
import {PaymentPage} from './paymentPage';

export class BaseTestContext {
  readonly loginPage: LoginPage;
  readonly productPage: ProductPage;
  readonly orderDetailsPage: OrderDetailsPage;
  readonly checkoutPage1: checkoutPage;
  readonly paymentPage1: PaymentPage;

  constructor(page: Page) {
    this.loginPage = new LoginPage(page);
    this.productPage = new ProductPage(page);
    this.orderDetailsPage = new OrderDetailsPage(page);
    this.checkoutPage1 = new checkoutPage(page);
    this.paymentPage1 = new PaymentPage(page);
  }
}
