# Chesslol Link Hub

A Linktree-style profile built with Astro and Tailwind CSS. The homepage spotlights the Chesslol avatar, socials, and a grid of image-driven posts that click through to external destinations.

## Tech stack

- [Astro](https://astro.build/) with TypeScript (strict mode)
- [Tailwind CSS](https://tailwindcss.com/) (dark mode via `class`, JIT enabled)
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

### Site profile (`src/config/site.ts`)

The exported `siteConfig` powers the hero content on the homepage as well as shared metadata.

```ts
export const siteConfig = {
  name: 'Chesslol',
  username: '@chesslol',
  bio: 'Short bio placeholder',
  socials: {
    tiktok: '',
    youtube: ''
  },
  // …additional metadata
};
```

- **`name`** – Display name shown in the heading and metadata.
- **`username`** – Lightweight accent label above the avatar (e.g. TikTok/Instagram handle).
- **`bio`** – Short profile sentence displayed under the heading and reused as the default page description.
- **`socials`** – Provide full URLs for TikTok and YouTube. Leaving a value blank will show a dashed placeholder icon so you can visualise the layout before publishing.

### Posts gallery (`src/data/posts.ts`)

Manage the clickable image tiles by editing the `posts` array. Each item supports:

- `id` – Stable identifier (used for keys and alt text fallbacks).
- `title?` – Optional overlay shown on hover/focus and used for accessible labels.
- `href` – Destination URL (external links open in a new tab).
- `image` – Path to the image relative to the `public/` directory (e.g. `posts/post-1.jpg`).
- `aspect?` – `square` | `portrait` | `landscape`; defaults to square if omitted.
- `featured?` – When `true`, the card spans two columns on medium screens for emphasis.

### Assets

- `public/avatar.jpg` – Square avatar used at the top of the page (recommended ≥ 320×320).
- `public/posts/post-1.jpg` … `post-6.jpg` – Example gallery tiles. Recommended sizes:
  - Square: **1080×1080**
  - Portrait: **1080×1350**
  - Landscape: **1200×900**
- `public/og.jpg` – Open Graph / social sharing image (1200×630). Update to match campaign art as needed.

Astro serves files from `public/` using `import.meta.env.BASE_URL`, so assets work automatically on GitHub Pages subpaths.

### Layout & theming

- The homepage is mobile-first, stacking content vertically and switching to a 2–3 column grid on larger breakpoints.
- Cards include subtle hover lift, soft shadows in light mode, and outlined styling in dark mode.
- The existing light/dark theme toggle remains in the header and respecting user preference.

### Additional pages

- `/links` – Retains the legacy list of textual links for quick access.
- `/alt-a` and `/alt-b` – Earlier hero concepts kept for inspiration; they continue to share the global header, footer, and theme settings.

## Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

1. **Enable GitHub Pages**: Settings → Pages → Source: GitHub Actions
2. **Push changes**: The workflow triggers on pushes to `main`
3. **Access your site**: After the first successful run, your site will be available at:
   - User/organization Pages: `https://<username>.github.io`
   - Project Pages: `https://<username>.github.io/<repository-name>`

For a local production preview:

```bash
npm install
npm run build
npm run preview
```

GitHub Actions automatically detects whether you are using user/organization vs project Pages and configures the correct base path.

### Other hosting

The site can be deployed on any static hosting provider that supports Astro output (e.g. Cloudflare Pages, Netlify, Vercel). A sitemap and robots.txt are generated automatically, drawing the canonical URL from environment configuration in CI.
