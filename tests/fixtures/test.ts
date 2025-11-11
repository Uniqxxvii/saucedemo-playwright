import { test as base, expect as baseExpect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ENV } from '../config/env';

type Fixtures = {
  loggedInPage: Page;
};

export const test = base.extend<Fixtures>({
  loggedInPage: async ({ page }, use) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login(ENV.users.standard.username, ENV.users.standard.password);

    await use(page);
  },
});

export const expect = baseExpect;
