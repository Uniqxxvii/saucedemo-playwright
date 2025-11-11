// // This script logs in once and saves the storage state to a file,
// // so tests can reuse it for instant authenticated sessions.

import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ENV } from '../config/env';

test('prepare auth state', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login(ENV.users.standard.username, ENV.users.standard.password);

  // // Save authenticated session to file.
  await page.context().storageState({
    path: 'storage/auth.json',
  });
});
