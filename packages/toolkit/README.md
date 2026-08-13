# @impulse-ui-native/toolkit

The complete Impulse UI Native public API from a single package. It combines the theme, primitives, components, overlays, utilities, data helpers, icons, and shared types.

## Installation

```sh
pnpm add @impulse-ui-native/toolkit
```

Install the native peer dependencies required by the features you use:

```sh
pnpm add @shopify/flash-list react-native-gesture-handler react-native-reanimated react-native-safe-area-context react-native-svg react-native-worklets
```

## Setup

At minimum, wrap themed components with `ThemeProvider`. Mount `LayerCenter` once when using registered flyouts such as `Select` and the date/time pickers.

```tsx
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { LayerCenter, ThemeProvider } from "@impulse-ui-native/toolkit";

export function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeProvider>
          {/* application */}
          <LayerCenter />
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
```

Follow the installation instructions for Gesture Handler, Reanimated, and Worklets in your React Native or Expo project as well.

## Included APIs

- Foundations: `core`, `types`, `theme`, and `primitives`.
- Inputs: `Input`, `Select`, and `MultiSelect`.
- Date and time: `DatePicker`, `DateRangePicker`, `DatetimePicker`, `DatetimeRangePicker`, and `TimePicker`.
- Feedback: `Skeleton`, `DataView`, `LoadingView`, `EmptyView`, and `ErrorView`.
- Navigation and overlays: `Stepper`, `Flyout`, `LayerCenter`, the flyout registry, and portal primitives.
- Assets and infrastructure: the icon library, `EchoInstance`, echo hooks, and endpoint factories.

All exports come from the package root:

```tsx
import {
  Button,
  Input,
  Select,
  ThemeProvider,
} from "@impulse-ui-native/toolkit";
```

Install an individual `@impulse-ui-native/*` package instead when you need a smaller, more explicit dependency surface.
