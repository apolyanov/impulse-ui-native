# @impulse-ui-native/toolkit

The complete Impulse UI Native component library in one package.

`@impulse-ui-native/toolkit` provides token-driven React Native primitives, form controls, date and time pickers, charts, loading and empty states, flyouts, portals, and shared utilities through a single package entrypoint. It is the recommended package for applications that want the full library and the package listed in the React Native Directory.

## Highlights

- React Native components with TypeScript types.
- One theme system shared by every component.
- Works with native applications and React Native Web.
- Gesture-driven flyouts and app-wide overlay management.
- Single- and multi-select controls, date/time pickers, charts, skeletons, and data states.
- Modular internals: applications with a narrow use case can install an individual `@impulse-ui-native/*` package instead.

## Requirements

- React 18 or newer.
- React Native 0.73 or newer.
- The native peer dependencies listed below.

The toolkit supports the React Native versions expressed by its peer dependencies. When using Expo, install native packages with `expo install` so Expo selects versions compatible with the SDK in your application.

## Installation

Install the toolkit:

```sh
pnpm add @impulse-ui-native/toolkit
```

Install its native peers:

```sh
pnpm add @shopify/flash-list @shopify/react-native-skia react-native-gesture-handler react-native-reanimated react-native-safe-area-context react-native-svg react-native-worklets
```

In an Expo application, use:

```sh
npx expo install @shopify/flash-list @shopify/react-native-skia react-native-gesture-handler react-native-reanimated react-native-safe-area-context react-native-svg react-native-worklets
npm install @impulse-ui-native/toolkit
```

Complete the platform setup required by Gesture Handler, Reanimated, Worklets, Skia, and Safe Area Context for the versions used by your project. Native applications must be rebuilt after adding native dependencies.

The endpoint factories are included in the toolkit but have two additional peers. Install them only when using the endpoint API:

```sh
pnpm add axios @tanstack/react-query
```

Icons are intentionally distributed separately so the toolkit does not expose thousands of icon modules from its root. Install the icon package when needed:

```sh
pnpm add @impulse-ui-native/icon react-native-svg
```

## Application setup

Mount the providers and global renderers once at the application root. This is the recommended Expo Router layout:

```tsx
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";

import {
  OverlayHost,
  OverlayProvider,
  OverlayStore,
  PortalProvider,
  PortalsHost,
  PortalStore,
  ThemeProvider,
} from "@impulse-ui-native/toolkit";

const portalStore = new PortalStore();
const overlayStore = new OverlayStore();

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeProvider>
          <OverlayProvider store={overlayStore}>
            <PortalProvider store={portalStore}>
              <Stack />
              <OverlayHost />
              <PortalsHost />
            </PortalProvider>
          </OverlayProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
```

Keep `overlayStore` and `portalStore` outside the component so the same stores survive every render. In an application that does not use Expo Router, replace `<Stack />` with your navigator or root application content and keep the surrounding hierarchy unchanged.

| Root element             | Purpose                                                                  |
| ------------------------ | ------------------------------------------------------------------------ |
| `GestureHandlerRootView` | Enables native gesture handling for flyouts and gesture-driven controls. |
| `SafeAreaProvider`       | Supplies safe-area measurements to primitives and overlays.              |
| `ThemeProvider`          | Supplies primitive, semantic, and component design tokens.               |
| `OverlayProvider`        | Connects imperative overlays to the stable `OverlayStore`.               |
| `PortalProvider`         | Connects the tree to the stable `PortalStore`.                           |
| `OverlayHost`            | Renders components registered through the app-wide overlay store.        |
| `PortalsHost`            | Renders content sent to the default portal host.                         |

`OverlayHost` and `PortalsHost` should be siblings of the navigator and children of their matching providers. Mount only one of each at the root.

## Basic usage

All toolkit components and public types are available from the package root:

```tsx
import { useState } from "react";

import { Button, Input, Typography, View } from "@impulse-ui-native/toolkit";

export function SignInForm() {
  const [email, setEmail] = useState("");

  return (
    <View gap="md" padding="lg">
      <Typography.Title2>Welcome back</Typography.Title2>
      <Input
        autoCapitalize="none"
        keyboardType="email-address"
        label="Email"
        onChangeText={setEmail}
        placeholder="you@example.com"
        value={email}
      />
      <Button onPress={() => {}}>Continue</Button>
    </View>
  );
}
```

## Selects and flyouts

`Select`, `MultiSelect`, and the date/time pickers use the root `PortalsHost`. Once the application setup above is in place, a select can be rendered anywhere below it:

```tsx
import { useState } from "react";

import { Select } from "@impulse-ui-native/toolkit";

const options = [
  { label: "Design", value: "design" },
  { label: "Engineering", value: "engineering" },
  { label: "Operations", value: "operations" },
];

export function DepartmentField() {
  const [value, setValue] = useState<string>();

  return (
    <Select
      label="Department"
      onChange={setValue}
      options={options}
      placeholder="Choose a department"
      value={value}
    />
  );
}
```

Do not mount another host beside the control; portal content and registered overlays are rendered by the application-level `PortalsHost` and `OverlayHost`.

## Theming

`ThemeProvider` uses the light theme by default. Select a scheme and override only the tokens your application needs:

```tsx
<ThemeProvider
  scheme="dark"
  theme={{
    dark: {
      colors: {
        primary: {
          value: "#8b7cff",
          contrast: "#ffffff",
        },
      },
    },
  }}
>
  {/* application */}
</ThemeProvider>
```

Theme overrides are deep partials. Hooks including `useTheme`, `useColors`, `useSpace`, `useBorder`, `useRadii`, `useComponentsTokens`, and `useThemedStyles` are available for application components.

## Included APIs

- Foundations: theme tokens and hooks, shared types, styling utilities, and core helpers.
- Primitives: `View`, `SafeAreaView`, typography presets, `Pressable`, `Button`, `IconButton`, `Tag`, and compound control primitives.
- Inputs: `Input`, `Select`, and `MultiSelect`.
- Date and time: `DatePicker`, `DateRangePicker`, `DatetimePicker`, `DatetimeRangePicker`, and `TimePicker`.
- Charts: line, bar, pie, multi-series chart components, axes, grids, labels, hooks, and utilities.
- Feedback: `Skeleton`, `DataView`, `LoadingView`, `EmptyView`, and `ErrorView`.
- Navigation and overlays: `Stepper`, `Flyout`, `OverlayHost`, `OverlayProvider`, `OverlayStore`, overlay registration types, `Portal`, `PortalProvider`, `PortalStore`, and portal hosts.
- Data utilities: `EchoInstance`, echo hooks, and typed Axios/TanStack Query endpoint factories.

## Icons

Import icons through per-icon entrypoints from `@impulse-ui-native/icon`:

```tsx
import { Icon } from "@impulse-ui-native/icon/components/icon";
import { HeartIcon } from "@impulse-ui-native/icon/icons/heart";

<Icon icon={HeartIcon} variant="duotone" size="large" color="#6d5dfc" />;
```

Per-icon entrypoints let Metro include only the icons used by the application. Available weights are `bold`, `duotone`, `fill`, `light`, `regular`, and `thin`.

## Toolkit or individual packages?

Use `@impulse-ui-native/toolkit` when you want one dependency and one import path for the complete component API. Install individual packages such as `@impulse-ui-native/theme`, `@impulse-ui-native/primitives`, or `@impulse-ui-native/select` when you want a smaller, explicit dependency surface.

The toolkit uses ES modules and declares itself side-effect free, allowing compatible bundlers to remove exports that are not used. The icon library remains separate because its generated per-icon entrypoints are best consumed directly.

## Troubleshooting

- If gestures do not respond, verify that `GestureHandlerRootView` is the outermost application view and has `flex: 1`.
- If a registered flyout does not appear, verify that one `OverlayHost` is mounted inside the matching `OverlayProvider`.
- If portal content does not appear, verify that `PortalProvider` and `PortalsHost` use the same stable store and host name.
- If content overlaps a notch or system bar, verify that `SafeAreaProvider` wraps the themed application.
- If a native dependency was just installed, rebuild the native application rather than relying only on a JavaScript refresh.

## Documentation and source

The source, package-specific guides, Storybook examples, and issue tracker are available at [github.com/apolyanov/impulse-ui-native](https://github.com/apolyanov/impulse-ui-native).

## License

Impulse UI Native is released under the [MIT license](./LICENSE).
