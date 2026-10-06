# P19 Versatile Fab — Website

Next.js 16 (App Router) + Tailwind CSS v4. Every page is statically pre-rendered for fast loads and SEO.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

## Where to edit content

| What | File |
| --- | --- |
| Phone, email, address, hours, testimonials, quality test values | `src/lib/site.ts` |
| Fabrics (name, images, descriptions, SEO title/description) | `src/lib/products.ts` |
| Home / About / Products / Contact pages | `src/app/**/page.tsx` |
| Images | `public/images` |

Adding a fabric to `src/lib/products.ts` automatically creates its page at `/products/<slug>` and adds it to the sitemap, footer and listings.

## SEO

- Per-page title, description, canonical URL, Open Graph and Twitter tags (`src/lib/seo.ts`)
- JSON-LD: LocalBusiness + WebSite (all pages), BreadcrumbList, Product, CollectionPage, AboutPage, ContactPage
- `sitemap.xml`, `robots.txt` and web manifest generated from `src/app/sitemap.ts`, `robots.ts`, `manifest.ts`
- Old URLs (`/about-us.html`, `/product.html`, `/contact-us.html`, `/index.html`) permanently redirect (`next.config.ts`)

Set `NEXT_PUBLIC_SITE_URL` if the production domain differs from `https://www.p19versatilefab.com`.
