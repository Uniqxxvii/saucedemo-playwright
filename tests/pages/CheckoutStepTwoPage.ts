import { Page } from '@playwright/test';

export class CheckoutStepTwoPage {
  constructor(private page: Page) {}

  // // Title "Checkout: Overview" always appears here.
  get title() {
    return this.page.getByText(/checkout: overview/i);
  }

  get finishButton() {
    return this.page.getByRole('button', { name: /finish/i });
  }

  async finish() {
    await this.finishButton.click();
  }
}
