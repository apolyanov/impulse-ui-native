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

The Expo Router routes live in `apps/playground/src/app`. The root layout loads Montserrat, installs the theme, overlay, portal, safe-area, and gesture providers, and mounts `OverlayHost` and `PortalsHost` for overlay examples.

The chart examples require `react-native-skia` 3.11.0 in a native development
build. Expo Go bundles Skia 2 and cannot run them. Rebuild after installing:

```sh
pnpm --filter playground exec expo run:android
pnpm --filter playground exec expo run:ios
```

The build-properties plugin configures Android API 26 as the minimum; devices
also need Vulkan 1.1. iOS 15.1+ is required. Existing generated native projects
need prebuild to apply config-plugin changes before rebuilding; preserve any
local native customizations when updating them.

## Checks

```sh
pnpm --filter playground lint
pnpm --filter playground exec tsc --noEmit
```
