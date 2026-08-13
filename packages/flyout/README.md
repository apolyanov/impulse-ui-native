# @impulse-ui-native/flyout

A token-driven, gesture-enabled sheet that can enter from the top or bottom of the screen.

## Installation

```sh
pnpm add @impulse-ui-native/flyout
```

This package uses React Native Gesture Handler, Reanimated, Safe Area Context, and Worklets. Complete their native setup and render the flyout inside both `GestureHandlerRootView` and `SafeAreaProvider`.

## Main exports

- `Flyout` renders the sheet, overlay, drag handle, title, safe-area padding, and lifecycle animations.
- `FlyoutProps` adds `open`, `placement`, `topOffset`, and `bottomOffset` to the common layer contract.

## Usage

```tsx
import { Flyout } from "@impulse-ui-native/flyout";

<Flyout
  id="filters"
  title="Filters"
  open={filtersOpen}
  placement="bottom"
  onClose={() => setFiltersOpen(false)}
>
  <Filters />
</Flyout>;
```

The overlay closes the sheet when pressed. A drag past half the measured sheet height, or a sufficiently fast swipe toward the edge, closes it as well.

For app-wide imperative sheets, register flyouts through `@impulse-ui-native/layers` and mount `LayerCenter` once.
