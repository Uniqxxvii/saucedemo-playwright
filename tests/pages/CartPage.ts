import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  // // Title "Your Cart" is always present on this page.
  get title() {
    return this.page.getByText(/your cart/i);
  }

  // // Proceed to checkout button.
  get checkoutButton() {
    return this.page.getByRole('button', { name: /checkout/i });
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}
