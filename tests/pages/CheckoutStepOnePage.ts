import { Page } from '@playwright/test';

export class CheckoutStepOnePage {
  constructor(private page: Page) {}

  get firstName() {
    return this.page.getByPlaceholder('First Name');
  }

  get lastName() {
    return this.page.getByPlaceholder('Last Name');
  }

  get zip() {
    return this.page.getByPlaceholder('Zip/Postal Code');
  }

  get continueButton() {
    return this.page.getByRole('button', { name: /continue/i });
  }

  async fillUserInfo() {
    // // Saucedemo allows any valid strings. Using fixed test data is OK.
    await this.firstName.fill('Test');
    await this.lastName.fill('User');
    await this.zip.fill('12345');
  }

  async continue() {
    await this.continueButton.click();
  }
}
