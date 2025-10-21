# Repository Guidelines

## Project Structure & Module Organization
This Vue 2 single-page app is organized around `src/`, where `main.js` boots the app and `App.vue` hosts layout. Reusable building blocks sit in `src/components/`, shared styling in `src/css/`, and chart assets under `src/assets/`. Client routes live in `src/router/index.js`. Webpack and environment profiles are defined in `build/` and `config/`. Production bundles land in `dist/`, while unprocessed public files belong in `static/`.

## Build, Test, and Development Commands
- `npm install`: install dependencies declared in `package.json`.
- `npm run dev`: launch the webpack dev server with hot reloading.
- `npm run build`: produce a minified, cache-busted bundle via `build/build.js` into `dist/`.

## Coding Style & Naming Conventions
Use two-space indentation and keep Vue single-file components focused and composable. Name components in PascalCase (e.g., `DashboardPanel.vue`) and align route names with their component IDs. Store reusable assets under folders that mirror their usage (`src/assets/charts/`). Prefer ES2015 modules, and scope CSS within components unless defining global utilities under `src/css/`.

## Testing Guidelines
Automated tests are not yet wired in. When adding coverage, create `tests/unit/` with Jest + Vue Test Utils (or an equivalent stack) and add an `npm run test` script that enforces the suite. Name test files `<Component>.spec.js`, keep fixtures in `tests/fixtures/`, and document any mock data sources alongside the tests.

## Commit & Pull Request Guidelines
Commits should be concise, present-tense summaries; the existing history uses short imperatives such as “Initial commit.” Reference related issues in the body when applicable. Pull requests should include a problem statement, screenshots or GIFs for UI changes, testing notes (`npm run build` or manual smoke checks), and links to tracking tickets. Request review from someone familiar with the touched area and ensure the branch is rebased before merging.

## Configuration Notes
Environment-specific tweaks live in `config/*.js`. Update `config/index.js` when changing public paths or proxy settings, and capture required `.env` variables in the pull request description so deployers can mirror the setup.
