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

Run the browser-based React Native Web Storybook:

```sh
pnpm --filter impulse-ui-native storybook:web
```

Run Storybook in the Expo application:

```sh
pnpm --filter impulse-ui-native storybook
```

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

ImpulseUI Native is released under the MIT license.
