# AGENTS.md

## Project map (what matters first)
- This is a **Next.js + TypeScript** UI that embeds a **boardgame.io** game client.
- Entry page: `pages/index.tsx` creates `PalmIslandClient` with `Client({ game, numPlayers, board })` and renders it inside `components/Layout.tsx`.
- Game rules/state live in `module/game/PalmIsland.ts` (pure game logic + boardgame.io config).
- Rendering logic lives in `components/Board.tsx` (reads `G`/`ctx`, calls `moves.clickCell`).
- Utility helpers are minimal; currently `utils.ts` exposes `range` used by board rendering loops.

## Data flow and boundaries
- **Source of truth for gameplay** is `G.cells` (`PalmIslandState`) in `module/game/PalmIsland.ts`.
- `clickCell` is the critical move function; it rejects occupied cells via `INVALID_MOVE`.
- `endIf` computes terminal state (`{ winner }` or `{ draw: true }`) from board state.
- UI should not mutate state directly; UI triggers `moves.*` only (see `components/Board.tsx`).
- Board winner banner depends on `ctx.gameover` (memoized in `Board.tsx`).

## Working commands (use Yarn 3 in this repo)
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
- Run tests (watch mode by default in `package.json`):
```bash
yarn test
```
- For CI-like one-shot tests, use:
```bash
yarn jest --runInBand
```

## Testing patterns already used
- Unit + scenario tests for game logic in `module/game/PalmIsland.test.ts`.
- UI behavior + snapshot tests in `pages/index.test.tsx` and `pages/__snapshots__/index.test.tsx.snap`.
- Testing stack is Jest + Testing Library (`jest.config.js`, `jest.setup.js`).
- When changing DOM structure in `Board`/`Layout`, update snapshot expectations intentionally.

## Conventions to preserve
- TypeScript strictness is enabled (`strict`, `noUnusedLocals`, `noUnusedParameters` in `tsconfig.json`): avoid unused vars and implicit any.
- Formatting baseline comes from `.editorconfig`: 2 spaces, LF, max line length 120.
- ESLint config is intentionally minimal (`next/core-web-vitals` in `.eslintrc.json`): follow existing code style in touched files.
- Keep naming consistent with existing boardgame.io terms (`G`, `ctx`, `moves`, `gameover`).

## Change strategy for agents
- For gameplay changes: edit `module/game/PalmIsland.ts` first, then adapt `module/game/PalmIsland.test.ts`.
- For board/UI changes: update `components/Board.tsx`, then verify `pages/index.test.tsx` (roles/table structure are asserted).
- Prefer small, incremental diffs; this codebase is compact and tightly coupled around the game loop.

