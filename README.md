# Colyon Web (Next.js)

A Next.js 14 App Router migration of the former Vite + React SPA. Provides public marketing pages, news listing & detail, privacy/terms content, and product information with shadcn/ui components, Redux Toolkit for news items, and React Query (scaffolded for future API calls).

## Tech Stack
- Next.js 14 App Router
- TypeScript, ESLint
- TailwindCSS + shadcn/ui (Radix primitives)
- Redux Toolkit (news state) + React Redux
- React Query (ready for async data integration)
- Zod + React Hook Form (forms & validation)
- Lucide Icons

## Local Development
```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Open http://localhost:3000
```

## Available Scripts
```bash
npm run dev      # Start Next.js in development mode
npm run build    # Production build (creates .next/)
npm start        # Start production server (after build)
npm run lint     # ESLint check
npm run sitemap  # Regenerate sitemap.xml + robots.txt via next-sitemap
```

## Environment Variables
Define (in .env.local for local, or in Vercel dashboard):
```
NEXT_PUBLIC_MONCHAIN_API_BASE_URL=https://api.monchain.ai
NEXT_PUBLIC_NOS_API_KEY=replace_me
NEXT_PUBLIC_USS_API_KEY=replace_me
```
These are accessed via `process.env.*` in `src/lib/config.ts`.

## External Link Auto-Linking
Component `src/components/AutoLinkText.tsx`:
- Scans text for http/https URLs.
- Internal (same-origin) absolute URLs become `<Link>`.
- External URLs open in a new tab with an external-link icon.
- Preserves paragraphs and single line breaks.

## Slugs
Use `slugify` from `src/lib/utils.ts` to convert titles to URL-friendly slugs (lowercase, hyphens, trimmed). It removes accents, replaces ampersands with 'and', strips quotes, normalizes whitespace & punctuation into single hyphens.

Example:
- `Élan Vital & Growth` -> `elan-vital-and-growth`
- `John's   Car -- Build` -> `johns-car-build`

Used consistently in `/news` listing and the dynamic route `/news/[slug]`. Detail page now matches items with `slugify(item.title) === slug`.


## Routing
- `app/` directory defines Next.js routes.
- Former `src/pages/` components moved to `src/views/` and imported by route files.
- Dynamic route: `/news/[slug]` (marked `dynamic = 'force-dynamic'` to allow client-side Redux fetching).

## State & Data
- `fetchNews` in `src/store/newsSlice.ts` simulates an async fetch (replace with real API).
- To move fetching server-side: create a server action or use `fetch` inside route file and pass data as props.

## Image Optimization
`sharp` added for optimal Next.js Image performance. Replace `<img>` with `<Image>` where feasible; currently used for the logo.

## Deployment (Vercel)
1. Push repository to GitHub.
2. Import project in Vercel.
3. Set environment variables in Vercel project settings.
4. Vercel auto-detects Next.js; no build command changes needed.
5. `postbuild` runs `next-sitemap`, so each deploy uploads fresh `public/sitemap*.xml` and `robots.txt`.

## Sitemap Generation
`npm run sitemap` first snapshots the current site metadata and news entries into `.sitemap/`, then runs `next-sitemap` so `public/sitemap*.xml` and `public/robots.txt` stay in sync. The command also runs automatically via `postbuild`, which Vercel executes during deploys. If you need to inspect the files locally:
```bash
npm run sitemap
ls .sitemap
ls public/sitemap*.xml
```
Ensure `SITE_URL` (defaults to `https://colyon.ai`) is set if you need a different canonical origin.

## Post-Migration Cleanup Summary
Removed:
- `react-router-dom`
- Vite-related dev dependencies (`vite`, `@vitejs/plugin-react-swc`)
- Legacy entrypoints (`index.html`, `src/main.tsx`, `src/App.tsx` now deprecated stubs)

Added:
- `sharp` for image optimization.

## Legacy / Migration Artifacts
Legacy Vite files have been removed from the repo:
- index.html
- vite.config.ts
- src/App.tsx, src/main.tsx
- tsconfig.app.json, tsconfig.node.json

If you had local tooling referencing them, update to use the root Next.js setup (`tsconfig.json`) and App Router.

## Troubleshooting
- 404 on refresh (was a SPA issue) is resolved by Next.js routing.
- If external links fail to open: check `AutoLinkText` regex and ensure text includes protocol.
- If environment variables undefined: verify `.env.local` or Vercel dashboard configuration.
- Slug mismatch (404 redirect back to /news): ensure list and detail both use `slugify`; if editing titles, a page refresh will regenerate the correct slug.

---
MIT License © 2025 Colyon
