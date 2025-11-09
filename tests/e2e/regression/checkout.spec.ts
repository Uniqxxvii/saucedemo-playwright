import { test, expect } from '../../fixtures/test';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutStepOnePage } from '../../pages/CheckoutStepOnePage';
import { CheckoutStepTwoPage } from '../../pages/CheckoutStepTwoPage';
import { CheckoutCompletePage } from '../../pages/CheckoutCompletePage';

// // Full end-to-end checkout flow. This is the primary regression scenario.

test.describe('@regression checkout', () => {
  test('completes full purchase flow', async ({ loggedInPage }) => {
    const inventory = new InventoryPage(loggedInPage);

    // // Step 1: Add product to cart.
    await inventory.addToCart('Sauce Labs Backpack');

    // // Step 2: Open cart page.
    await inventory.openCart();
    const cart = new CartPage(loggedInPage);

    // // Wait for the cart page to load.
    await expect(cart.title).toBeVisible();

    // // Step 3: Continue to checkout step one.
    await cart.proceedToCheckout();
    const step1 = new CheckoutStepOnePage(loggedInPage);

    await step1.fillUserInfo();
    await step1.continue();

    // // Step 4: Verify overview page and finish order.
    const step2 = new CheckoutStepTwoPage(loggedInPage);
    await expect(step2.title).toBeVisible();

    await step2.finish();

    // // Step 5: Validate final confirmation page.
    const complete = new CheckoutCompletePage(loggedInPage);
    await expect(complete.completeHeader).toBeVisible();
  });
});
