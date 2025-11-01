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

- **[`src/config/site.ts`](src/config/site.ts)** – Update the site name, tagline, description, canonical URL, and **social links** (TikTok + YouTube). Update the placeholder URLs (`@TODO`) with your actual social media handles.
- **[`src/data/links.ts`](src/data/links.ts)** – Maintain the list of outbound link cards. Each item supports:
  - `title`: Display name for the link
  - `url`: Destination URL
  - `description`: Optional description text
  - `icon`: Optional emoji or character icon
  - `featured`: Optional boolean to display as a larger featured card (spans full grid width)
  - `thumbnail`: Optional image URL for featured cards

Changes are automatically reflected on both the homepage grid and the dedicated `/links` page.

### Theming

Light/dark mode is controlled via a theme toggle in the header. The selection is persisted in `localStorage` and respects the user’s OS preference by default. Tailwind’s dark mode is configured to use the `class` strategy.

### Assets

- `public/favicon.svg` – update with the Chesslol brand mark if you have a production asset.
- `public/og.jpg` – social sharing image (1200×630). Adjust or replace as needed for campaigns.

## Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

#### Setup Instructions

1. **Enable GitHub Pages**: Go to Settings → Pages → Source: GitHub Actions
2. **Push changes**: The workflow will automatically trigger on push to `main`
3. **Access your site**: After the first successful run, your site will be available at:
   - User/organization Pages: `https://<username>.github.io`
   - Project Pages: `https://<username>.github.io/<repository-name>`

#### Local Preview

```bash
npm install
npm run build
npm run preview
```

The workflow automatically detects whether you're using user/organization Pages or project Pages and configures the base path accordingly.

### Other Hosting

The project is also ready for any static hosting provider that supports Astro output (e.g. Cloudflare Pages, Netlify, Vercel). A sitemap and robots.txt are generated automatically; the site URL is configured via environment variables in the GitHub Actions workflow.
