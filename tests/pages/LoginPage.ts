import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  // // Locators structured as getters: clean, typed, and auto-waiting.
  get usernameInput() {
    return this.page.getByPlaceholder('Username');
  }

  get passwordInput() {
    return this.page.getByPlaceholder('Password');
  }

  get loginButton() {
    return this.page.getByRole('button', { name: /login/i });
  }

  // // Error message container that appears on wrong login attempts.
  get errorMessage() {
    return this.page.locator('[data-test="error"]');
  }

  async goto() {
    // // Using baseURL, so '/' resolves correctly.
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  // // Expected-to-fail login method for negative test cases.
  async loginExpectingError(username: string, password: string) {
    await this.login(username, password);
    return this.errorMessage;
  }
}
