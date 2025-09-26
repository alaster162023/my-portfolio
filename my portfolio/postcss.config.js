// PostCSS config for Vite + Tailwind (ESM)
// package.json uses "type": "module" so this file should be ESM.
export default {
  plugins: {
    // Tailwind's PostCSS plugin moved to `@tailwindcss/postcss` in newer versions.
    // Install `@tailwindcss/postcss` and use it here to avoid runtime errors.
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
}
