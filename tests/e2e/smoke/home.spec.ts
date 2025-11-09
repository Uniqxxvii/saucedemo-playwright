import { test, expect } from '@playwright/test';

test.describe('@smoke login page', () => {
    test('loads and shows login form', async ({ page }) => {
    // Thanks to baseURL in config, '/' resolves to https://www.saucedemo.com
    await page.goto('/');

    // Prefer role-based and placeholder-based locators: resilient and readable.
    await expect(page.getByRole('heading', { name: /swag labs/i })).toBeVisible();
    await expect(page.getByPlaceholder('Username')).toBeVisible();
    await expect(page.getByPlaceholder('Password')).toBeVisible();
    await expect(page.getByRole('button', { name: /login/i })).toBeEnabled();
    });
});