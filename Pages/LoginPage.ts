import {Page, expect} from "@playwright/test"

export class LoginPage
{
    page;
    username;
    password;
    loginBtn;

    //it accespts the page object as a parameter and intializa the group page property of the class
    constructor(page : Page)
    {
        this.page = page
        this.username = this.page.locator("#userEmail");
        this.password=this.page.locator("#userPassword");
        this.loginBtn = this.page.locator("#login");

    }

    async goTo(page:Page)
    {
        await this.page.goto("https://rahulshettyacademy.com/client/");
        await page.waitForLoadState('networkidle');
    }

    async login(username:string, password:string)
    {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();
    }
}