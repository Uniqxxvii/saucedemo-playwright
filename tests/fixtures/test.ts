// tests/fixtures/test.ts
import { test as base, expect as baseExpect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

// // 1. Define the type for our new fixtures.
// //    loggedInPage returns a Playwright Page that is already authenticated.
type Fixtures = {
  loggedInPage: Page;
};

// // 2. Extend the Playwright base test with typed fixtures.
// //    Now TS knows exactly the types of (page, use) and will not complain.
export const test = base.extend<Fixtures>({
  loggedInPage: async ({ page }, use) => {
    const login = new LoginPage(page);

    // // Open the login page.
    await login.goto();

    // // Log in using valid credentials.
    await login.login('standard_user', 'secret_sauce');

    // // Expose the authenticated page to the test.
    await use(page);
  },
});

// // 3. Re-export expect for convenience.
export const expect = baseExpect;
