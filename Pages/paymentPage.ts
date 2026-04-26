import {Page} from "@playwright/test"

export class PaymentPage
{
    page;
    paymentMethodBtn;
    placeOrderBtn;
    country;

    //it accespts the page object as a parameter and intializa the group page property of the class
    constructor(page : Page)
    {
        this.page = page
        this.paymentMethodBtn = this.page.locator("div.payment__type.payment__type--cc.active");
        this.placeOrderBtn = this.page.locator("//a[text()='Place Order ']");
        this.country = this.page.locator("//input[@placeholder='Select Country']");
    }

    async checkoutProduct()
    {
        await this.paymentMethodBtn.click();
    }

    async clickOnPlaceOrder()
    {
        await this.placeOrderBtn.click();
    }

    async selectCountry(strCoutry: string)
    {
        await this.country.type(strCoutry,{ delay: 500 });
        await this.page.keyboard.press("Tab");
        await this.page.keyboard.press("Tab");
        await this.page.keyboard.press("Enter"); 
    }

}