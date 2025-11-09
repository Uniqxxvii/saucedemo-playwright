import { test, expect } from '../../fixtures/test';

// // Using our custom test ensures that all tests share the same fixtures and conventions.

test.describe('@smoke login page', () => {
  test('loads and shows login form', async ({ page }) => {
    // // baseURL is used, so '/' points to https://www.saucedemo.com
    await page.goto('/');

    await expect(page.getByText(/swag labs/i)).toBeVisible();
    await expect(page.getByPlaceholder('Username')).toBeVisible();
    await expect(page.getByPlaceholder('Password')).toBeVisible();
    await expect(page.getByRole('button', { name: /login/i })).toBeEnabled();
  });
});
