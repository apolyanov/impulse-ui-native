# ImpulseUI Native website

The public Next.js website for ImpulseUI Native. It contains the project introduction, component previews, design-token overview, package-version API route, search-engine metadata, and AI-readable project context.

## Development

Install workspace dependencies from the repository root, then start the site:

```sh
pnpm install
pnpm --filter @impulse-ui-native/site dev
```

Open [http://localhost:3000](http://localhost:3000). The application routes live in `apps/site/app`, shared site code lives in `apps/site/lib`, and static assets live in `apps/site/public`.

The site uses Tailwind CSS and Montserrat through `next/font`. Set `SITE_URL` when you need generated metadata, `robots.txt`, `sitemap.xml`, and social cards to use a specific canonical origin.

Optional search-engine verification values are read from:

```dotenv
GOOGLE_SITE_VERIFICATION=
BING_SITE_VERIFICATION=
```

## Checks

Run these commands from the repository root:

```sh
pnpm --filter @impulse-ui-native/site check-types
pnpm --filter @impulse-ui-native/site lint
pnpm --filter @impulse-ui-native/site build
```

Production Docker and Traefik deployment instructions are maintained in the [repository README](../../README.md#deploy-the-website).
