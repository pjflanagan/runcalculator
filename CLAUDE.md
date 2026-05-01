# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # local dev server
npm run build        # production build (output: build/)
npm run preview      # preview production build
npm run check        # TypeScript + Svelte type checking
npm run format       # Prettier auto-format
npm run lint         # Prettier + ESLint check (no auto-fix)
npm run test         # run ts-mocha tests
```

**Testing gotcha:** Before running `npm run test`, temporarily change `"module"` in `tsconfig.json` from `"es2020"` to `"commonjs"`. Revert after. Tests live in `src/models/*.test.ts`.

Deployed to Netlify via `netlify.toml`. Local Netlify dev: `npm run netlify`.

## Architecture

Single-page SvelteKit app. One route (`src/routes/index.svelte`) renders `MainComponent`.

**Data flow:** All state lives in `MainComponent.svelte`. It reads/writes URL params on mount/update via the `URL` model, computes `timeOut` reactively via `Time.calcTime`, and passes props down to child components.

**`src/models/`** — pure TypeScript business logic (no Svelte):
- `distance.ts` — `Distance` namespace: event list (`EVENTS`), split list (`SPLITS`), unit conversions (meters ↔ miles/km). All distances stored internally as meters.
- `time.ts` — `Time` namespace: `calcTime` (core pace math), `makeDisplayTime` (seconds → `[h10,h1,m10,m1,s10,s1,decimal,error]` tuple), `makeTimeFromDisplayTime`.
- `url.ts` — URL param serialization/deserialization for shareable links.
- `error.ts` — `Error` namespace with error message constants.
- `util.ts` — `Loop` utility for circular array access.

**`src/components/main/`** — the five UI sections rendered by `MainComponent`:
- `DistanceComponent` — selects race event or enters custom distance/unit
- `TimeInputComponent` — enters goal time; toggle between time-input and pace-input mode
- `SplitComponent` — selects split distance (200m, 400m, 800m, 1K, mile)
- `TimeOutputComponent` — displays calculated split time
- `HeaderComponent` — title/branding

**`src/elements/`** — low-level reusable UI primitives (`Clock`, `Row`, `Container`, etc.) used by the components above.

**Two modes toggled in the UI:**
- `distanceMode` — use a custom distance instead of a preset race event
- `paceMode` — input is a per-split pace rather than a total race time
