import {Page} from "@playwright/test"

export class ProductPage
{
    page;
    products;
    addToCardBtn;
    //it accespts the page object as a parameter and intializa the group page property of the class
    constructor(page : Page)
    {
        this.page = page
        this.products = this.page.locator(".card-body");
        this.addToCardBtn = this.page.locator("//button[@routerlink='/dashboard/cart']");
    }

    async addProduct(productName : string)
    {
        const count = await this.products.count();
        for(let i = 0; i < count; i++)
        {
            const product = this.products.nth(i);
            const name = await product.locator('h5').textContent();
            if(name?.trim() === productName)
            {
                await product.locator("//button[@class='btn w-10 rounded']").click();
                break;
            }
        }
    }

    async addToCard()
    {
        await this.addToCardBtn.click();
    }
}