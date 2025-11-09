import { Page } from '@playwright/test';

export class CheckoutCompletePage {
  constructor(private page: Page) {}

  // // Final confirmation message.
  get completeHeader() {
    return this.page.getByText(/thank you for your order/i);
  }
}
