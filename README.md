[![Netlify Status](https://api.netlify.com/api/v1/badges/f2e0fcd1-074a-4c09-9c07-bc8f91e1d830/deploy-status)](https://app.netlify.com/sites/runcalculator/deploys)

# [Run Calculator](https://runcalculator.flanny.app)

## Setup

```bash
npm install
```

## Running locally

```bash
npm run dev
```

Opens at `http://localhost:5173`.

## Building

```bash
npm run build    # production build → build/
npm run preview  # serve the production build locally
```

## Testing

Before running tests, temporarily change `"module"` in `tsconfig.json` from `"es2020"` to `"commonjs"`. Revert after.

```bash
npm run test
```

## Other commands

```bash
npm run check   # TypeScript + Svelte type checking
npm run lint    # lint check (no auto-fix)
npm run format  # auto-format with Prettier
```