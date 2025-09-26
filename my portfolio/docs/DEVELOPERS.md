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
- Props: `activeSection?: string`
- `navItems` controls visible links; update ids to match `<section id="...">`.
- `scrollToSection(id)` smooth scrolls to the element with `id`.
- Active link underline uses `Framer Motion` `layoutId` to animate between items.

#### `Hero.tsx`
- Typing effect: an interval increments a substring of `fullText` into `displayedText`.
- `scrollToAbout()` finds `#about` and calls `scrollIntoView`.

#### `About.tsx`
- `highlights` array drives the right-side capability cards; each entry has `icon`, `title`, `description`.

#### `Projects.tsx`
- `projects` array defines the cards. Update `title`, `description`, `tech`, `image`, `github`, `demo`, `category` per project.

#### `Skills.tsx`
- `skillCategories` defines groups. Each skill has a `level` 0–100 used to animate the progress bar width.

#### `Contact.tsx`
- `contactInfo`/`socialLinks` arrays render contact methods and social icons.
- `handleSubmit` simulates async submission; wire it to a backend by replacing the timeout with a fetch.

### Tailwind Notes
- Colors and gradients use Tailwind classes such as `from-blue-500 to-purple-500`.
- The overall theme is dark (`bg-black`, light text colors, translucent panels).

### Accessibility
- Buttons and links use focusable elements. Consider adding `aria-label`s to icon buttons if labels are hidden.

### Deployment
- Static hosting works for the built assets. Run `npm run build`, then serve `dist/` with any static host.



