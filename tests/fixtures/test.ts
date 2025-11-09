import { test as base } from '@playwright/test';

// // This is our custom test object.
// // We will extend it with fixtures later, e.g. loggedInPage.
// // For now it simply re-exports the default Playwright test.

export const test = base;
export const expect = test.expect;
