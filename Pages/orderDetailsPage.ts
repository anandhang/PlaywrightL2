import { Page, expect, Locator } from "@playwright/test";

export class OrderDetailsPage {
  readonly page: Page;
  readonly successMessage: Locator;
  readonly downloadbtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.successMessage = this.page.locator("//h1[normalize-space(.)='Thankyou for the order.']");
    this.downloadbtn = this.page.locator("//button[normalize-space(.)='Click To Download Order Details in CSV']");
  }

  async expectedMessage(message: string) {
    await expect(this.successMessage).toHaveText(message);
  }

  async downloadOrderDetails(filename: string) {
    const [download] = await Promise.all(
      [
        this.page.waitForEvent('download'),
        this.downloadbtn.click()
      ]);
      const suggestedFileName = download.suggestedFilename();  
      console.log("Suggested File NAme"+ suggestedFileName);
      download.saveAs("C:\\Users\\anang\\Downloads\\"+filename);
  }
}
