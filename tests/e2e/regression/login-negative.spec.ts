import { test, expect } from '../../fixtures/test';
import { LoginPage } from '../../pages/LoginPage';

// // Negative cases must not reuse loggedInPage fixture.
// // They test login itself, so we use fresh "page".

test.describe('@regression login-negative', () => {
  test('shows error on wrong credentials', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();

    // // Try logging in with invalid credentials.
    const error = await login.loginExpectingError('invalid', 'invalid');

    await expect(error).toBeVisible();
    await expect(error).toContainText(/username and password do not match/i);
  });

  test('shows error for locked out user', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();

  const error = await login.loginExpectingError('locked_out_user', 'secret_sauce');

  await expect(error).toBeVisible();
  await expect(error).toContainText(/sorry, this user has been locked out/i);
 });
});
