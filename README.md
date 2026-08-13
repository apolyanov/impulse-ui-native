# ImpulseUI Native

Open-source, token-driven React Native components for building consistent and composable interfaces across native platforms and the web.

This repository contains the ImpulseUI Native packages, an Expo example application, native and web Storybook environments, and the project website.

## Installation

Install the complete component toolkit:

```sh
pnpm add @impulse-ui-native/toolkit
```

The toolkit has peer dependencies on React Native and the native libraries used by its components. Install the peer dependencies required by your application according to the warnings from your package manager.

Wrap your application with `ThemeProvider` before using components:

```tsx
import { ThemeProvider } from "@impulse-ui-native/toolkit";

export function App() {
  return <ThemeProvider>{/* Your application */}</ThemeProvider>;
}
```

Individual packages such as `@impulse-ui-native/select`, `@impulse-ui-native/theme`, and `@impulse-ui-native/icon` can also be installed independently when the full toolkit is not needed.

## Documentation

Component documentation lives in Storybook. Stories provide interactive examples, controls, component states, and generated API documentation.

There are two ways to explore the components:

- **Web Storybook** runs in a browser and is intended for public component documentation, interactive controls, and API reference material.
- **Native Storybook** runs inside the Expo application and renders the components in their native environment. A distributable version is planned for the Apple App Store and Google Play. Until those releases are available, you can run it locally by cloning this repository and following the commands below.

Run the browser-based React Native Web Storybook:

```sh
pnpm --filter impulse-ui-native storybook:web
```

Run Storybook in the Expo application:

```sh
pnpm --filter impulse-ui-native storybook
```

After Expo starts, open the project in an iOS simulator, Android emulator, or a compatible development build on a physical device. The native Storybook is intended to complement—not replace—the browser documentation because it provides the most accurate representation of platform-specific behavior, gestures, portals, and Flyouts.

Platform-specific commands are also available:

```sh
pnpm --filter impulse-ui-native storybook:ios
pnpm --filter impulse-ui-native storybook:android
```

Create a static Storybook build with:

```sh
pnpm --filter impulse-ui-native build-storybook
```

The project website contains the public introduction, component previews, design-token overview, and links into the source. Written guides can be added to its `/docs` section as the documentation grows.

## Deploy the website

The site ships as a self-contained Docker Compose stack containing both the Next.js application and Traefik. Traefik publishes ports `80` and `443`, redirects HTTP to HTTPS, discovers the site through Docker labels, and obtains and renews its Let's Encrypt certificate. The site itself does not publish a host port.

The host only needs Docker and Docker Compose. Ports `80` and `443` must be available, and the public hostname must have an `A` and/or `AAAA` DNS record pointing to the host.

On the host, clone the repository and create the deployment environment file:

```sh
git clone https://github.com/apolyanov/impulse-ui-native.git
cd impulse-ui-native
cp .env.example .env
```

Set `SITE_HOST` to the public hostname and `TRAEFIK_ACME_EMAIL` to the email address used for Let's Encrypt notices. The default Docker network name can usually remain unchanged.

The Compose build derives the canonical website URL from `SITE_HOST`. This URL is used by canonical metadata, Open Graph tags, structured data, `robots.txt`, `sitemap.xml`, and the LLM discovery files.

Optional search-engine ownership tokens can be added to `.env` after registering the site:

```dotenv
GOOGLE_SITE_VERIFICATION=
BING_SITE_VERIFICATION=
```

Start or update the site:

```sh
docker compose -f compose.site.yml up -d --build
```

Inspect its status and logs:

```sh
docker compose -f compose.site.yml ps
docker compose -f compose.site.yml logs -f traefik site
```

For subsequent deployments, pull and rebuild:

```sh
git pull --ff-only
docker compose -f compose.site.yml up -d --build
```

The application container uses Next.js standalone output, listens internally on port `3000`, runs as an unprivileged user, and restarts unless explicitly stopped. Traefik stores certificates in the persistent `traefik-certificates` Docker volume.

### Search and social discovery

The deployed site provides:

- canonical, Open Graph, and Twitter Card metadata;
- a generated 1200×630 social sharing image;
- `WebSite`, `Organization`, and `SoftwareSourceCode` JSON-LD;
- `/robots.txt` and `/sitemap.xml`;
- `/site.webmanifest` and platform icons;
- `/llms.txt` and `/llms-full.txt` for AI-readable project context;
- optional Google Search Console and Bing Webmaster Tools verification tags.

After the first production deployment:

1. Add the domain to Google Search Console and Bing Webmaster Tools.
2. Add the verification tokens to `.env` and rebuild the stack.
3. Submit `https://<your-domain>/sitemap.xml` to both services.
4. Test the production URL with Facebook Sharing Debugger, LinkedIn Post Inspector, and a Twitter/X Card preview tool.
5. Confirm that `/robots.txt`, `/sitemap.xml`, `/llms.txt`, `/llms-full.txt`, `/opengraph-image`, and `/twitter-image` return successfully.

Before deploying, verify the production build locally:

```sh
pnpm --filter @impulse-ui-native/site build
```

## Repository structure

```text
apps/
  impulse-ui-native/  Expo example and Storybook host
  site/               Next.js project website
packages/
  toolkit/            Complete public package
  theme/              Primitive, semantic, and component tokens
  primitives/         Shared component foundations
  icon/               Icon components and assets
  select/             Select control and Flyout integration
  flyout/              Portal-based top and bottom sheets
  ...                 Additional component packages
tooling/               Shared TypeScript, ESLint, and Prettier configuration
```

## Local development

Requirements:

- Node.js 22.21 or newer within the Node 22 release line
- pnpm 10.19 or newer

Clone and install the workspace:

```sh
git clone https://github.com/apolyanov/impulse-ui-native.git
cd impulse-ui-native
pnpm install
```

Start all development tasks:

```sh
pnpm dev
```

Start only the project website:

```sh
pnpm --filter @impulse-ui-native/site dev
```

Start the Expo application:

```sh
pnpm --filter impulse-ui-native start
```

## Quality checks

Run the repository checks before opening a pull request:

```sh
pnpm check-types
pnpm -r typecheck
pnpm lint
pnpm build
```

Format TypeScript, TSX, and Markdown files with:

```sh
pnpm format
```

## Contributing

Issues, discussions, and pull requests are welcome at [github.com/apolyanov/impulse-ui-native](https://github.com/apolyanov/impulse-ui-native).

Keep component behavior, examples, and theme values aligned with the package source. When changing a component, update its stories and documentation alongside the implementation.

## License

ImpulseUI Native is released under the [MIT license](./LICENSE).
