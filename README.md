# Saucedemo E2E Tests (Playwright + TypeScript)

Automation test suite for [SauceDemo](https://www.saucedemo.com/) built with Playwright and TypeScript.


# Quick Start

```bash
npm install
npx playwright install
npx playwright test
```


# Run Tagged Tests

```bash
npx playwright test --grep @smoke
npx playwright test --grep @regression
```


## Test Conventions

- All test use custom runner: `import { test, expect } from '../fixtures/test'`.
- Tags: `@smoke`, `@regression`.
- Structure: smoke - quick check; regression - scenarios; pages - POM; fixtures - global fixtures.


# Features

- Playwright + TypeScript + ESLint + Prettier
- Custom fixtures (loggedInPage)
- Page Object Model (LoginPage, InventoryPage, etc.)
- Tags (@smoke, @regression) for selective runs
- Retry & trace on first retry (anti-flaky)
- CI via GitHub Actions with artifacts
