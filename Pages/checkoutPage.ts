import {Page} from "@playwright/test"

export class checkoutPage
{
    page;
    checkoutBtn;
    //it accespts the page object as a parameter and intializa the group page property of the class
    constructor(page : Page)
    {
        this.page = page
        this.checkoutBtn = this.page.locator("//button[text()='Checkout']");
    }

    async checkoutProduct()
    {
        await this.checkoutBtn.click();
    }

}