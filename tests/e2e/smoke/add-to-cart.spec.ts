import { test, expect } from '../../fixtures/test';
import { InventoryPage } from '../../pages/InventoryPage';

// // This test ensures that the InventoryPage POM works correctly.
// // It also ensures the cart badge updates when adding a product.

test.describe('@smoke cart', () => {
  test('adds one item to cart', async ({ loggedInPage }) => {
    const inventory = new InventoryPage(loggedInPage);

    // // Add one known item (Saucedemo always has consistent product names).
    await inventory.addToCart('Sauce Labs Backpack');

    // // After adding, cart badge should show “1”.
    await expect(
      loggedInPage.locator('.shopping_cart_badge')
    ).toHaveText('1');
  });
});
