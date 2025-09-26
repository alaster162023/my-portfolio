## Developer Guide

This project is a Vite + React + TypeScript single-page portfolio with animated sections using Framer Motion and styled with Tailwind CSS. The codebase is organized into reusable components under `src/components/portfolio` and a single page container under `src/pages/portfolio.tsx`.

### Tech Overview
- React 19 with TypeScript
- Framer Motion for scroll/hover animations
- Tailwind CSS utility classes
- Lucide icons for SVGs
- Vite for dev server and build

### Project Structure
- `src/pages/portfolio.tsx`: Top-level page that renders all sections and manages active section and scroll progress.
- `src/components/portfolio/Navigation.tsx`: Fixed navigation bar with smooth-scrolling and active-link highlight.
- `src/components/portfolio/Hero.tsx`: Landing section with typing effect and social links.
- `src/components/portfolio/About.tsx`: Bio and highlights grid.
- `src/components/portfolio/Projects.tsx`: Project cards grid with code/demo buttons and category tags.
- `src/components/portfolio/Skills.tsx`: Skill categories with animated progress bars.
- `src/components/portfolio/Contact.tsx`: Contact info, social links, and form with simulated submit.

### Data Flow and State
- `portfolio.tsx` keeps two pieces of UI state:
  - `activeSection`: which section is currently near the top of the viewport. Used by `Navigation` for active link styles.
  - `scrollY`: current scroll position used to compute the top progress bar width.

### Scrolling and Section Detection
- Each section has an `id` (`hero`, `about`, `projects`, `skills`, `contact`).
- `Navigation` calls `scrollIntoView({ behavior: "smooth" })` to jump to sections.
- `portfolio.tsx` listens to `scroll` events and checks `getBoundingClientRect()` of each section to determine `activeSection`.

### Animations
- Entrance animations use `whileInView` or `initial`/`animate` pairs.
- Hover/tap interactions use `whileHover`/`whileTap`.
- Progress bars in `Skills` animate width on entering the viewport.

### Adding a New Section
1. Create a component in `src/components/portfolio`.
2. Add a `<section id="new-section">` wrapper in `src/pages/portfolio.tsx` and render the component.
3. Add an item to `navItems` in `Navigation.tsx` with the same `id`.
4. Add the id to the `sections` array in `portfolio.tsx` for active detection.

### Local Development
- Start dev: `npm run dev`
- Lint: `npm run lint`
- Build: `npm run build`

### Conventions
- Use PascalCase for components, camelCase for variables.
- Prefer meaningful names over abbreviations.
- Keep comments short and explain "why" and intent, not trivial syntax.

### File-by-File Notes

#### `Navigation.tsx`
## Developer Guide — Complete

This document describes the project architecture, developer workflows, conventions, and a detailed changelog of fixes made on the working session dated 2025-09-26. It aims to let another developer quickly understand the codebase and reproduce the fixes.

Summary
- Stack: React 19 + TypeScript, Vite, Tailwind CSS, Framer Motion, lucide-react icons.
- App type: Single-page portfolio. Top-level routes: `/portfolio` and `/documentation` configured in `src/App.tsx`.

Quick start

1. Install dependencies:

```powershell
npm install
```

2. Start dev server with HMR:

```powershell
npm run dev
```

3. Build production bundle:

```powershell
npm run build
```

4. Preview production build locally:

```powershell
npm run preview
```

Important scripts (in `package.json`)
- dev: `vite` (HMR)
- build: `tsc -b && vite build` (note: TypeScript composite build runs first and will fail on type errors)
- preview: `vite preview`
- lint: `eslint .`

Project architecture (big picture)
- Entry point: `src/main.tsx` renders `App`.
- `src/App.tsx` sets up React Router and routes to `src/pages/portfolio.tsx` and `src/pages/Documentation.tsx`.
- `src/pages/portfolio.tsx` is a page-level container that composes small section components from `src/components/portfolio/` (Hero, About, Projects, Skills, Contact, Navigation).
- Components are UI-driven and mostly stateless except where local interaction or animation state is required (e.g., `Hero` typing effect).
- Styling: Tailwind utility classes inline in JSX + global rules in `src/App.css` and `src/index.css` (Tailwind directives).
- Animations: framer-motion used liberally for entrance, hover, and layout animations.

Key files and responsibilities
- `src/main.tsx` — application bootstrap, imports `index.css`.
- `src/App.tsx` — Router and top-level route wiring.
- `src/pages/portfolio.tsx` — assembles portfolio sections and manages page-level state (active section, scroll progress).
- `src/components/portfolio/*` — UI sections. Each exports a default React function component.
- `src/index.css` — includes Tailwind directives (`@tailwind base; @tailwind components; @tailwind utilities;`).
- `src/App.css` — global CSS variables and utility layers (the project uses Tailwind layers and some custom CSS variables for theming).
- `postcss.config.js`, `tailwind.config.js` — build-time configs for postcss/tailwind processing.

Data flow and patterns
- The `portfolio` page tracks `activeSection` and `scrollY`. `activeSection` is passed to `Navigation` for highlighting.
- Most content (projects array, skills, highlights) is defined inline as arrays inside components. Replace with API calls or external JSON if you want dynamic content.
- Navigation triggers `document.getElementById(id).scrollIntoView({ behavior: 'smooth' })` for section navigation.

Common conventions & gotchas specific to this project
- Tailwind-first: visual rules are mostly inline utility classes; minimal custom CSS lives in `src/App.css` and `src/index.css`.
- TypeScript `tsconfig.app.json` uses `jsx: react-jsx` — do NOT rely on `import React from 'react'` unless you need the value; importing only hooks is preferred (e.g., `import { useState } from 'react'`).
- Build runs `tsc -b` first; TypeScript errors will block `vite build` even if Vite dev server works.
- `postcss.config.js` must be authored in the correct module format (ESM vs CJS) depending on `package.json` `type` field.

Troubleshooting (common errors and fixes)

- Error: "Failed to load PostCSS config ... Cannot find module '@tailwindcss/postcss'"
  - Cause: incorrect PostCSS plugin key or missing package.
  - Fix applied in this repo: installed `@tailwindcss/postcss` and configured `postcss.config.js` to use the plugin.
  - Command used:

```powershell
npm install -D @tailwindcss/postcss
```

- Error: "module is not defined in ES module scope" when PostCSS config is CommonJS while package.json has `type: "module"`.
  - Cause: Node treats `.js` as ESM when `type: module` is present.
  - Two options:
    1. Keep `postcss.config.js` as ESM (`export default {...}`) — what this project uses.
    2. Or rename to `postcss.config.cjs` and use `module.exports = {...}` if you prefer CommonJS.

- Error: missing `tw-animate-css` import
  - Cause: `src/App.css` referenced `@import "tw-animate-css"` but the package wasn't installed.
  - Fix applied: installed `tw-animate-css` and restored the import. Commands:

```powershell
npm install -D tw-animate-css
```

- Error: `React` declared but value never read (TS6133)
  - Cause: with `jsx: react-jsx`, default React import is unnecessary unless you reference the `React` symbol.
  - Fix applied: removed unused default imports from `Hero.tsx` and `pages/portfolio.tsx`, leaving hook imports only (e.g., `import { useState } from 'react'`).

Changelog — exact corrections made during the session (2025-09-26)

1. Cleaned `src/index.css`
   - Removed accidental Markdown fences. Now contains only Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

2. Fixed PostCSS configuration
   - Ensured `postcss.config.js` is ESM to match `package.json` `type: "module"`.
   - Configured PostCSS plugins to use the Tailwind PostCSS bridge and autoprefixer.
   - Final content (excerpt):

```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
}
```

3. Installed required dev dependencies
   - `tailwindcss`, `postcss`, `autoprefixer` (basic Tailwind stack)
   - `@tailwindcss/postcss` (PostCSS bridge)
   - `tw-animate-css` (animation utility; restored import in `src/App.css`)

Commands used:

```powershell
npm install -D tailwindcss postcss autoprefixer
npm install -D @tailwindcss/postcss
npm install -D tw-animate-css
```

4. Restored `@import "tw-animate-css"` in `src/App.css`
   - `src/App.css` originally imported the package. I removed it temporarily to diagnose the build error and then re-added it after installing the package.

5. Removed unused default React imports to satisfy TypeScript
   - Files changed:
     - `src/components/portfolio/Hero.tsx`: `import React, { ... }` -> `import { ... }`
     - `src/pages/portfolio.tsx`: `import React, { ... }` -> `import { ... }`

6. Verified full production build
   - Ran `npm run build` and confirmed `dist/` assets were generated.
   - Note: Vite dev server auto-picked port 5174 when 5173 was busy.

Dev server notes
- Run `npm run dev` — Vite will try the default port 5173 and fall back to another free port if 5173 is busy. When I started the server it reported "Port 5173 is in use, trying another one..." and served the app at `http://localhost:5174/`.

Linting and editor diagnostics
- The editor's CSS linter may flag Tailwind-specific at-rules (`@apply`, `@layer`, `@theme`, `@custom-variant`) as unknown — this is expected; Tailwind/PostCSS processes them during build.

Recommendations / next improvements

- Add a CI workflow (GitHub Actions) for PRs that runs:

```yaml
- name: Build
  run: |
    npm ci
    npm run build
```

- Add `postcss.config.cjs` alternative if contributors sometimes use editors/tools that require CommonJS PostCSS config.
- Consider moving repeated arrays (projects, skills) to `src/data/` or a JSON file for easier editing and testing.
- Add unit tests (Jest or Vitest) for pure logic (e.g., section detection helper functions) and a small e2e smoke test to launch the dev server and hit `/`.

How to reproduce the fixes locally

1. Pull the repository and ensure Node >= 18 (recommended).
2. Install dependencies:

```powershell
npm ci
```

3. If you see PostCSS plugin errors, run:

```powershell
npm install -D @tailwindcss/postcss tailwindcss postcss autoprefixer
```

4. If `src/App.css` imports `tw-animate-css` and the build complains, install it:

```powershell
npm install -D tw-animate-css
```

5. Run the dev server:

```powershell
npm run dev
```

Appendix — file-by-file quick summary

- `src/main.tsx` — React entry. Renders `App` and imports `index.css`.
- `src/App.tsx` — Router and top-level route mapping to `Portfolio` and `Documentation` pages.
- `src/pages/portfolio.tsx` — Page-level container; composes sections, manages `activeSection` and `scrollY`.
- `src/components/portfolio/Navigation.tsx` — Fixed top nav; uses `scrollIntoView` and receives `activeSection`.
- `src/components/portfolio/Hero.tsx` — Typing effect, social icons, and scroll indicator.
- `src/components/portfolio/Projects.tsx` — Static `projects` array used to render featured project cards.
- `src/components/portfolio/Skills.tsx` — Static `skillCategories` + progress bar animations.
- `src/components/portfolio/About.tsx`, `Contact.tsx` — Content and contact form (simulated submit).
- `src/App.css` — global theme variables, Tailwind layer rules. Imports `tw-animate-css` for additional animations.
- `src/index.css` — Tailwind directive entry.
- `tailwind.config.js` — content paths and Tailwind options.
- `postcss.config.js` — PostCSS plugins used by Vite during CSS processing.

If anything in this document is unclear or you want me to expand a specific area (for example: add a CI workflow, create `src/data` and move projects into it, or add a simple smoke test), tell me which and I will implement it and validate.



