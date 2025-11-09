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

  async goto() {
    // // Using baseURL, so '/' resolves correctly.
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
