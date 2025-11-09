# Saucedemo E2E (Playwright + TypeScript)


## Quick start
```bash
npm i
npx playwright install
npx playwright test --reporter=list

## Test Conventions
- Все тесты используют кастомный раннер: `import { test, expect } from '../fixtures/test'`.
- Тестовые теги: `@smoke`, `@regression`, `@critical`.
- Имена файлов: `<name>.spec.ts` только в `tests/**`.
- Структура: smoke → быстрые проверки; regression → сценарии; pages → POM; fixtures → глобальные фикстуры.
