# Chesslol Landing Site

A lightweight Astro + Tailwind landing experience for Chesslol. This project serves as the public starting point for the brand with quick access to social channels and featured game links.

## Tech stack

- [Astro](https://astro.build/) with TypeScript (strict mode)
- [Tailwind CSS](https://tailwindcss.com/) (dark mode via class, JIT enabled)
- ESLint + Prettier for linting and formatting
- Optional sitemap/robots generation via `@astrojs/sitemap`

## Getting started

```bash
npm install
npm run dev
```

- `npm run dev` – start the local dev server
- `npm run build` – generate the production build
- `npm run preview` – preview the production build locally
- `npm run lint` – run ESLint across the project
- `npm run format` – check formatting with Prettier
- `npm run format:write` – format files in-place

## Editing core content

Most of the site content lives in two TypeScript files:

- [`src/config/site.ts`](src/config/site.ts) – update the site name, tagline, description, canonical URL, and social links (TikTok + YouTube placeholders are marked `TODO`).
- [`src/data/links.ts`](src/data/links.ts) – maintain the list of outbound link cards. Each item supports `title`, `url`, optional `description`, and optional `icon` (emoji or character).

Changes are automatically reflected on both the homepage grid and the dedicated `/links` page.

### Theming

Light/dark mode is controlled via a theme toggle in the header. The selection is persisted in `localStorage` and respects the user’s OS preference by default. Tailwind’s dark mode is configured to use the `class` strategy.

### Assets

- `public/favicon.svg` – update with the Chesslol brand mark if you have a production asset.
- `public/og.jpg` – social sharing image (1200×630). Adjust or replace as needed for campaigns.

## Deployment

The project is ready for any static hosting provider that supports Astro output (e.g. Cloudflare Pages, Netlify, Vercel). A sitemap and robots.txt are generated automatically using the placeholder site URL; update `siteUrl` in `src/config/site.ts` before launch.
