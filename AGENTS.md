# AGENTS.md

## Project map (what matters first)

- This is a **Vue 3 + TypeScript** app bootstrapped with **Vite**.
- Entry point: `src/main.ts` mounts the app with `createApp(App).mount('#app')`.
- Main UI lives in `src/App.vue` (current starter screen with title/subtitle).
- Global app styles are in `src/style.css`; component-scoped styles remain in each `.vue` file.
- Product/QA references for Palm Island live in `docs/specifications/`, `docs/qa/`, and `docs/traceability/`.

## Data flow and boundaries

- Current UI state is local to `src/App.vue` (`title` and `subtitle` in `<script setup lang="ts">`).
- DOM mount boundary is `index.html` (`#app`) + `src/main.ts`; avoid bypassing this bootstrap path.
- Unit tests assert rendered output through Vue Test Utils (`mount(App)`) instead of direct DOM mutation.
- E2E smoke test validates user-visible behavior from the browser (`e2e/smoke.spec.ts`).
- No central store/API layer exists yet; keep changes simple and colocated unless a real need appears.

## Working commands (use Yarn 4 in this repo)

- Package manager is pinned (`packageManager` + `.yarnrc.yml`): prefer Yarn commands.
- Install deps:

```bash
yarn install
```

- Run dev server:

```bash
yarn dev
```

- Run lint:

```bash
yarn lint
```

- Run formatting check:

```bash
yarn format:check
```

- Run type-check:

```bash
yarn typecheck
```

- Run unit tests:

```bash
yarn test:unit
```

- Run end-to-end tests:

```bash
yarn test:e2e
```

- Run full CI-like local check:

```bash
yarn check
```

## Testing patterns already used

- Unit tests live in `src/**/*.spec.ts` (example: `src/App.spec.ts`).
- Unit testing stack is Vitest + Vue Test Utils with `jsdom` (`vitest.config.ts`).
- E2E tests live in `e2e/**/*.ts` (example: `e2e/smoke.spec.ts`) and run with Playwright.
- Playwright uses a local web server (`yarn dev --host 127.0.0.1 --port 4173 --strictPort`) from `playwright.config.ts`.

## Conventions to preserve

- TypeScript strictness is enabled in both app/node configs (`tsconfig.app.json`, `tsconfig.node.json`): avoid unused vars and implicit any.
- Formatting baseline comes from `.editorconfig`: 2 spaces, LF, max line length 120.
- ESLint uses flat config in `eslint.config.mjs` with TypeScript + Vue rules and `eslint-config-prettier`.
- Keep file placement consistent: app code in `src/`, browser tests in `e2e/`, product docs in `docs/`.

## Change strategy for agents

- For UI changes: update `src/App.vue` first, then adapt `src/App.spec.ts` assertions.
- For bootstrap or mount changes: edit `src/main.ts` / `index.html`, then re-run `e2e/smoke.spec.ts`.
- For toolchain updates: keep scripts/config aligned across `package.json`, `vitest.config.ts`, `playwright.config.ts`, and `eslint.config.mjs`.
- Prefer small, incremental diffs; this codebase is currently a compact starter and easy to validate quickly.
