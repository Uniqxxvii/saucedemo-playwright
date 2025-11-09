// tests/pages/InventoryPage.ts
import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  // // Product cards on the inventory page.
  get inventoryItems() {
    return this.page.locator('.inventory_item');
  }

  // // Cart icon in the top-right corner.
  get cartLink() {
    return this.page.locator('.shopping_cart_link');
  }

  // // Returns a specific product card by its name.
  // // This helps avoid copy-pasting selectors.
  getItemCard(name: string): Locator {
    return this.page
      .locator('.inventory_item')
      .filter({ hasText: name });
  }

  // // Clicks “Add to cart” inside a specific product card.
  async addToCart(name: string) {
    const item = this.getItemCard(name);
    await item.getByRole('button', { name: /add to cart/i }).click();
  }

  // // Opens the shopping cart page.
  async openCart() {
    await this.cartLink.click();
  }
}
