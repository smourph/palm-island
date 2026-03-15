# Palm Island Web

Clean frontend starter for Palm Island, based on:

- Vue 3
- TypeScript
- Vite
- Vitest + Vue Test Utils
- Playwright
- ESLint + Prettier

## Requirements

- Node.js 20+
- Yarn 4 (pinned in `packageManager` and `.yarnrc.yml`)

## Install dependencies

```bash
yarn install
```

## Run the app

```bash
yarn dev
```

## Quality checks

```bash
yarn check
```

Or run them separately:

```bash
yarn lint
yarn format:check
yarn typecheck
yarn test:unit
yarn build
```

## End-to-end tests (Playwright)

Install browser binaries once:

```bash
yarn test:e2e:install
```

Run E2E tests:

```bash
yarn test:e2e
```

## Editor and OS compatibility

This project is configured to work consistently with:

- IntelliJ IDEA / JetBrains IDEs
- Visual Studio Code
- macOS
- Linux / Unix
- Windows

Formatting and line endings are enforced through `Prettier`, `ESLint`, `.editorconfig`, and `.gitattributes`.

## Functional documentation

The product and QA documentation is available in `docs/`:

- `docs/specifications/functional-specification.md`
- `docs/qa/qa-checklist.md`
- `docs/traceability/conventions-and-matrix.md`
