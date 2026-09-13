# ImpulseUI Native playground

An Expo application for exercising ImpulseUI Native packages in a native runtime. The current screen demonstrates the line, multi-line, bar, multi-bar, pie, and multi-pie chart APIs exported by the toolkit.

## Development

Install workspace dependencies from the repository root, then start Expo:

```sh
pnpm install
pnpm --filter playground start
```

Platform shortcuts are also available:

```sh
pnpm --filter playground ios
pnpm --filter playground android
pnpm --filter playground web
```

The Expo Router routes live in `apps/playground/src/app`. The root layout loads Montserrat, installs the theme, portal, safe-area, and gesture providers, and mounts `LayerCenter` and `PortalsHost` for overlay examples.

The chart examples require `@shopify/react-native-skia` to be available in the target runtime.

## Checks

```sh
pnpm --filter playground lint
pnpm --filter playground exec tsc --noEmit
```
