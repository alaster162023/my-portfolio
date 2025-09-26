## Repo snapshot — quick summary

- Stack: React + TypeScript + Vite. Tailwind for UI, Framer Motion for animation, Lucide icons.
- Entry: `src/main.tsx` → `src/App.tsx` (React Router routes) → `src/pages/*` and `src/components/*`.
- Build: `npm run dev` (vite), `npm run build` (`tsc -b && vite build`). Lint: `npm run lint`.

## What to know first (big picture)

- This is a single-page portfolio app with two top-level routes: `/portfolio` and `/documentation` declared in `src/App.tsx`.
- UI is component-driven: `src/components/portfolio/*` contains page sections (Hero, About, Projects, Skills, Contact, Navigation). Pages assemble these components (`src/pages/portfolio.tsx`).
- Styling is Tailwind-first: most visual rules live inline in JSX via utility classes (see `Hero.tsx`, `Projects.tsx`, `Navigation.tsx`). Minimal global CSS lives in `src/index.css` and `src/App.css`.
- Animations use `framer-motion` throughout; expect components to export React function components and rely on props for behavior (e.g., `Navigation` accepts `activeSection`).

## Dev & CI workflows (explicit)

- Start local dev server: `npm run dev` (runs `vite` with HMR).
- Build for production: `npm run build` — note it first runs `tsc -b` (composite build). If TS errors block build, run `npx tsc -b` to inspect errors.
- Preview built site: `npm run preview` (runs `vite preview`).
- Lint: `npm run lint` (runs `eslint .`). Use editor ESLint plugin configured in repo.

## Project-specific conventions and patterns

- File layout: small sections grouped under `src/components/portfolio/` and assembled in `src/pages/portfolio.tsx`. Add new sections there when adding features.
- Routing: App uses React Router in `src/App.tsx`. Add new pages under `src/pages` and wire them into `App.tsx` routes.
- Scrolling pattern: navigation buttons call `document.getElementById(id).scrollIntoView({ behavior: 'smooth' })` (see `Navigation.tsx`). Use element `id` values such as `hero`, `about`, `projects`, `skills`, `contact`.
- Data: many pages use inline/static arrays (e.g., `projects` array in `Projects.tsx`). Persisted or remote data is not present — mock or add data-fetching where needed.
- Images: project thumbnails are served via remote URLs in the sample data; static local assets go into `src/assets/` or `public/`.

## Integration points & external dependencies

- framer-motion: animations; components wrap sections with `motion.*`.
- lucide-react: icons used across components.
- react-markdown: present in dependencies (used in docs page if needed).
- react-router-dom: routing; links inside `Navigation` use `Link` to navigate to `/documentation`.
- `utils` package appears in dependencies — check for pinned APIs if used elsewhere.

## Key files to inspect when making changes

- `src/main.tsx` — app bootstrap
- `src/App.tsx` — routes and top-level composition
- `src/pages/portfolio.tsx` — assembly of portfolio sections
- `src/components/portfolio/Navigation.tsx` — scroll behavior, active section UI
- `src/components/portfolio/Hero.tsx` — example of local state + typing animation
- `src/components/portfolio/Projects.tsx` — grid pattern, images, CTA buttons
- `vite.config.ts`, `tsconfig.json`, `tsconfig.app.json` — build and TS composite settings
- `package.json` — npm scripts (dev/build/preview/lint) and deps

## Common gotchas & repair patterns (so an AI can fix fast)

- tsc step: `npm run build` runs `tsc -b` first — TypeScript composite errors will abort the build even if Vite would otherwise succeed. Fix type errors or run `vite build` alone for quick preview.
- Tailwind classes are used inline; don't expect many CSS rules. When styling looks off, check `tailwind.config.js` and `index.css` for base layer.
- Navigation/scroll issues: ensure element `id`s match names used in `Navigation.tsx`.
- Adding routes: update `src/App.tsx` and ensure imports from `src/pages/*` are correct. Use `Navigate` for root redirect as shown.

## Examples (how to implement common changes)

- Add a new section component: create `src/components/portfolio/Testimonials.tsx` exporting a default React component, add an anchor `id="testimonials"`, then import & include it in `src/pages/portfolio.tsx` and add a nav item in `Navigation.tsx`.
- Wire a new page: add `src/pages/blog.tsx`, import into `src/App.tsx`, and add `<Route path="/blog" element={<Blog/>} />`.

## When in doubt / where to look first

- For UI patterns and animation examples: open `src/components/portfolio/Hero.tsx`, `Projects.tsx`, `Navigation.tsx`.
- For routing and app flow: `src/App.tsx` and `src/pages/*`.
- For build/lint/runtime issues: `package.json` scripts, `tsconfig*.json`, `vite.config.ts`.

Please review — tell me any unclear sections or extra patterns you want surfaced and I will iterate.
