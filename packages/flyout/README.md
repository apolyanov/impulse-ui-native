# @impulse-ui-native/flyout

A token-driven, gesture-enabled sheet that can enter from the top or bottom of the screen.

## Installation

```sh
pnpm add @impulse-ui-native/flyout react-native-gesture-handler react-native-reanimated react-native-safe-area-context react-native-worklets
```

This package uses React Native Gesture Handler, Reanimated, Safe Area Context, and Worklets. Complete their native setup and render the flyout inside both `GestureHandlerRootView` and `SafeAreaProvider`.

## Main exports

- `Flyout` composes Root, Header, Title, Content, and Handle, preserving the ready-made sheet API. A truthy `header` replaces the generated title header.
- `Flyout.Root` is the main sheet container and owns the overlay, gestures, safe-area padding, and lifecycle animations. It renders supplied children without generating presentation parts.
- `Flyout.Header`, `Flyout.Title`, and `Flyout.Content` render supplied children. Header and Content accept primitive View props; Title accepts primitive Text props.
- `Flyout.Handle` renders the themed drag indicator. Pass the same placement as Root; its default is bottom.
- `FlyoutProps` adds `placement`, `topOffset`, and `bottomOffset` to the common overlay contract.

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

## Compound composition

```tsx
import { Flyout } from "@impulse-ui-native/flyout";
import { Portal } from "@impulse-ui-native/portal";

<Portal>
  <Flyout.Root
    id="filters"
    open={filtersOpen}
    onClose={() => setFiltersOpen(false)}
  >
    <Flyout.Handle />
    <Flyout.Header>
      <Flyout.Title>Filters</Flyout.Title>
    </Flyout.Header>
    <Flyout.Content>
      <Filters />
    </Flyout.Content>
  </Flyout.Root>
</Portal>;
```

Keep the external Portal mounted; Root handles mounting its visible content through
the existing lifecycle. For top placement, set `placement="top"` on both Root and
Handle. No Flyout context or provider is required. Content remains a regular View
with horizontal padding and a maximum height of 70% of the window by default.
Root accepts native `style`; the presentation parts accept primitive style props.

The backdrop uses the theme's tertiary text color: dark in light mode and muted
gray in dark mode, at 40% opacity. The drag handle uses a neutral border color.

For app-wide imperative sheets, register `Flyout` through an `OverlayStore` and mount `OverlayHost` inside the matching `OverlayProvider`.

Root uses the shared useOverlayLifecycle hook. Observe the preparation, entry,
open, and exit stages through onStatusChange(id, status). Dragging is enabled
after entry completes. Entry preparation includes the initial layout measurement.
