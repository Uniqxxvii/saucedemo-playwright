import { test, expect } from '../../fixtures/test';

// // This test validates that our loggedInPage fixture works correctly.

test.describe('@smoke login', () => {
  test('logs in successfully', async ({ loggedInPage }) => {
    // // After login, we must be on the inventory page.
    await expect(
      loggedInPage.getByText(/products/i)
    ).toBeVisible();
  });
});
