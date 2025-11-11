import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
testDir: './tests',
timeout: 30_000, // Global test timeout — fail fast instead of hanging forever
expect: { timeout: 5_000 }, // Assertions shouldn't wait too long; keeps failures actionable
retries: 2, // Flake-resistance without masking real issues
reporter: [['list'], ['html', { open: 'never' }]],
use: {
baseURL: 'https://www.saucedemo.com', // So we can `page.goto('/')`
headless: true,
trace: 'on-first-retry', // Collect trace only when needed; speeds up happy path
screenshot: 'only-on-failure',
video: 'retain-on-failure',
viewport: { width: 1280, height: 800 },
actionTimeout: 10_000, // Reasonable upper bound for user actions
navigationTimeout: 15_000,
},
projects: [

{
name: 'chromium',
use: { ...devices['Desktop Chrome'] }, // Known-good baseline; we can add Firefox/WebKit later
},

{
  name: 'chromium-auth',
  use: {
    ...devices['Desktop Chrome'],
    storageState: 'storage/auth.json', // // Reuse logged-in session
  },
},

],
});