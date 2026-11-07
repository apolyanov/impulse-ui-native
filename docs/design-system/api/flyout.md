# @impulse-ui-native/flyout

Local package version: 16.0.0. This is a repository snapshot, not a claim about the latest published package.

## Package guide

# @impulse-ui-native/flyout

A token-driven, gesture-enabled sheet that can enter from the top or bottom of the screen.

## Installation

```sh
pnpm add @impulse-ui-native/flyout react-native-gesture-handler react-native-reanimated react-native-safe-area-context react-native-worklets react-native-keyboard-controller
```

This package requires React Native Gesture Handler 3 or newer and uses its hook API (`usePanGesture`, `useNativeGesture`, and `useExclusiveGestures`), along with Reanimated, Safe Area Context, Worklets, and Keyboard Controller. Complete their native setup and render the flyout inside both `GestureHandlerRootView` and `SafeAreaProvider`.

## Main exports

- `Flyout` supplies the header/title and handle, rendering body children directly. A supplied non-nullish `header` replaces the generated title header. Choose Content, ScrollView, FlatList, or a custom body container explicitly.
- `Flyout.Root` is the main sheet container and owns the overlay, gestures, safe-area padding, and lifecycle animations. It renders supplied children without generating presentation parts.
- `Flyout.Header`, `Flyout.Title`, and `Flyout.Content` render supplied children. Header and Content accept primitive View props; Title accepts primitive Text props.
- `Flyout.ScrollView` accepts native ScrollView props and a native ref, adds themed horizontal content padding, and shrinks within the sheet. Override padding through `contentContainerStyle`; keyboard taps default to `handled`. For bottom sheets, a downward swipe that begins at the vertical scroll top drags the sheet; a swipe begun below the top remains a scroll for its entire duration, even after reaching the top. Upward swipes and horizontal ScrollViews scroll normally. Explicit `contentInset.top` is included in the top boundary.
- `Flyout.FlatList` wraps React Native FlatList with the same padding, shrinkable layout, and scrolling/drag rules as ScrollView. It preserves native list props, item-type inference, virtualization, and the FlatList ref (including `scrollToIndex` and `scrollToOffset`). Render it directly as the body; do not nest it inside ScrollView.
- `Flyout.KeyboardAwareView` is an opt-in keyboard-aware body. It accepts primitive View props and a native ref, defaults to `enabled={true}` and the theme's `keyboardOffset` (8), and renders one shrinkable View. Avoidance stays inside the body; Root remains attached to its placement edge and may grow with the content.
- `Flyout.Handle` renders the themed drag indicator and owns the sheet's drag gesture. It inherits placement from Root, so configure placement only on the sheet.
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
  <Flyout.ScrollView>
    <Filters />
  </Flyout.ScrollView>
</Flyout>;
```

The overlay closes the sheet when pressed. Dragging the handle past half the measured sheet height, or swiping it sufficiently fast toward the edge, closes it as well. Flyout.ScrollView uses the same dismissal thresholds and spring-back behavior for downward swipes begun at the top of a bottom sheet. Flyout.FlatList shares this coordination. Plain native ScrollViews, FlatLists, and custom scroll containers retain their own gestures and do not opt into this coordination.

### Virtualized body

```tsx
<Flyout id="results" title="Results" open={open} onClose={close}>
  <Flyout.FlatList
    ref={listRef}
    data={items}
    renderItem={renderItem}
    keyExtractor={keyExtractor}
  />
</Flyout>
```

Use a native `FlatList<Item>` ref for `listRef`. List props and callbacks pass through unchanged; `contentContainerStyle` overrides the themed content padding.

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
the existing lifecycle. For top placement, set `placement="top"` on Root; Handle inherits it. Root provides shared drag configuration and placement internally; no separate provider is required.
Include Handle to enable drag dismissal from the indicator. Flyout.ScrollView and Flyout.FlatList also enable drag dismissal from the top of bottom-sheet content, independently of Handle. Top sheets retain handle-only drag dismissal. Backdrop and programmatic dismissal remain available.
The handle is inside the sheet surface and native touch bounds.
Root caps the entire sheet, including the header, handle, and safe-area padding, at 70% of the window by default, further limited by the opposite safe area and the placement offset. Content is a shrinkable regular View with horizontal padding; it does not scroll. Use ScrollView for overflowing content, or FlatList for a virtualized body. Root remeasures after body resizing without restarting entry.
Root accepts native `style`; the presentation parts accept primitive style props.
Root renders only two native elements: an animated pressable backdrop and an animated sheet. Safe-area padding, sizing, measurement, and translation all live on that sheet; supplied body containers are its direct children.
Use Content itself for body layout (for example, `gap`), and ScrollView's `contentContainerStyle` for scrollable layout, rather than adding a View just for spacing.

The backdrop uses the theme's tertiary text color: dark in light mode and muted
gray in dark mode, at 40% opacity. The drag handle uses a neutral border color. The sheet uses the elevated surface shared by Modal, Toast, and Popover without a border, with 16-point exposed corners and horizontal padding. Flyout.Title uses 20/28 typography, matching Modal.Title. Customize title color/fontSize/lineHeight through components.flyout tokens.

For app-wide imperative sheets, register `Flyout` through an `OverlayStore` and mount `OverlayHost` inside the matching `OverlayProvider`.

Root uses the shared useOverlayLifecycle hook. Observe the preparation, entry,
open, and exit stages through onStatusChange(id, status). Dragging is enabled
after entry completes. Entry preparation includes the initial layout measurement. After exit completes, the sheet keeps its offscreen position and measured height until unmount; the next opening prepares fresh geometry.

When closing with the keyboard visible, Flyout retains the expanded sheet height and keyboard-aware body padding until exit finishes. Keyboard dismissal or close callbacks therefore do not collapse the sheet before it moves offscreen. Opening again releases the retained layout and follows the current keyboard state.

## Theme motion

Flyout uses a nearly critically damped entrance spring and a critically damped exit spring. `components.flyout.enterSpring` configures damping, stiffness, and mass (35, 300, and 1 by default), including spring-back after a drag. `exitDuration` is a perceptual spring duration (280 ms by default), not a fixed unmount deadline. Drag gestures are enabled as soon as the measured sheet becomes interactive, including during entry. A drag interrupts the entrance translation at its current position; opening completion follows the backdrop animation so an interrupted translation cannot leave the lifecycle stuck opening. Closing and closed sheets do not accept new drags. Dismissal and spring-back carry gesture release velocity; closing retains the exited geometry until unmount.

## Agent and design reference

Start with the [capability guide](../capabilities/flyout.md) for supported exports, props, defaults, composition rules, setup, and recipes. Use the [component chooser](../component-chooser.md) to select a package. These references describe the repository source; verify your installed package version before copying examples.

## Custom body containers and migration

Flyout no longer inserts Content automatically. Remove the placement prop from Handle; it now inherits Root placement. Wrap existing static children in
`Flyout.Content` to retain horizontal padding, or use `Flyout.ScrollView` for a
scrollable body. Do not nest virtualized lists in ScrollView; render them directly
with bounded sizing and `contentContainerStyle` instead.

## Keyboard-aware body

Wrap your application, including Portal/Overlay hosts, in `KeyboardProvider` from
`react-native-keyboard-controller`. Complete its native setup and rebuild the
application after installation. The Storybook host already installs this provider.
The portal host must cover the app viewport, as required by Flyout positioning.

```tsx
import { KeyboardProvider } from "react-native-keyboard-controller";

<KeyboardProvider>
  <App />
  {/* Keep your Portal and Overlay hosts inside this provider. */}
</KeyboardProvider>;
```

```tsx
<Flyout id="edit" title="Edit profile" open={open} onClose={close}>
  <Flyout.KeyboardAwareView>
    <Flyout.ScrollView contentContainerStyle={styles.contentContainer}>
      <ProfileForm />
    </Flyout.ScrollView>
  </Flyout.KeyboardAwareView>
</Flyout>
```

Render KeyboardAwareView as a direct body child of Flyout or Root. It renders one animated View and supplied children; it does not insert Content or a scroll container. For a small static
form, put the form directly inside it and supply primitive padding/gap props.
For longer content, supply a shrinkable ScrollView or virtualized list.

KeyboardAwareView adds animated bottom padding for the body's keyboard overlap.
The flyout stays attached to its screen edge; Root is not translated by keyboard
movement. Body padding can grow the sheet up to its normal maximum height, with
the header and handle reflowing naturally. After that, a shrinkable scroll
container gets a smaller viewport. Small forms can therefore gain keyboard space
without losing their entire viewport.

Both placements use the body's position within the sheet to calculate overlap.
Avoidance waits for valid sheet and body measurements before reserving space. A top body already above the keyboard needs no adjustment. Existing safe-area
space, placement offsets, and siblings below the body are included in that
calculation. Explicit numeric body heights grow by the keyboard padding and
restore when the keyboard closes.

`components.flyout.keyboardOffset` defaults to `space.xs` (8 logical units). The
gap follows keyboard animation progress inside the body and disappears when the
keyboard closes. The `keyboardOffset` prop overrides it; set it to `0` for no gap.
Set `enabled` to false to disable avoidance and restore the authored body layout.
The body returns to its normal height and padding after the keyboard closes. Use numeric padding values (including theme spacing tokens) for active keyboard avoidance; percentage padding is preserved while avoidance is inactive.

Use a shrinkable ScrollView or virtualized list when content can exceed the
remaining viewport. KeyboardAwareView does not scroll a focused field into view
or dismiss the keyboard when the backdrop is pressed; those behaviors belong to
the chosen scroll container and application. The Storybook form demonstrates explicit focus reveal with `space.sm` (16 units) of clearance below the native input bounds, rechecking visibility as the scroll viewport changes. Do not add another keyboard-avoiding
wrapper around the same body. Validate keyboard animation, rotation, and dismissal
on iOS and Android devices.

Run `pnpm --filter @impulse-ui-native/flyout test` for body layout and exit/unmount regression tests with mocked React/Reanimated hooks. These do not exercise native keyboard events or gesture recognition.

## Render behavior

Keyboard movement, drag position, and measured geometry live in Reanimated shared
values. Layout updates do not set React state after the first measurement of an
opening. Repeated identical layout events do not resend geometry to the UI thread.

Viewport, safe-area, and surface style subscriptions are mounted only while the
sheet is visible. Closed roots keep lifecycle state without subscribing to viewport
changes. Callback-only updates can skip the memoized surface when body props stay
stable. This separation adds no native layout containers.

Handle subscribes to gesture/placement changes separately from KeyboardAwareView's
layout context. Opening/closing gesture changes do not invalidate the keyboard
body's context. The convenience header is memoized by its supplied header/title.
Theme and relevant geometry changes still update affected parts normally.

Keep expensive body elements and reference-valued props stable in the calling
screen when their inputs have not changed; new consumer children/props still
participate in normal React updates. The Storybook preview memoizes its assembled
body so its visibility toggle does not recreate unchanged form elements.

`pnpm --filter @impulse-ui-native/flyout test` includes real React render-count
regressions with native/animation stubs. These verify reconciliation behavior,
not on-device frame timing or GPU performance.

## Public export and source reference

The following modules are reachable through relative re-exports from this package's root. Their imports refer to the original package layout. This appendix preserves exact prop contracts, composition namespaces, defaults, hooks, and behavior for an implementing agent; it is reference text, not standalone executable code. An exported module may also contain private declarations. Internal modules that are only imported are not copied. React Native and dependency types remain defined by those dependencies.

### packages/flyout/src/components/index.ts

```tsx
import { FlyoutContent } from "./content";
import { FlyoutFlatList } from "./flat-list";
import { FlyoutComponent } from "./flyout";
import { FlyoutHandle } from "./handle";
import { FlyoutHeader } from "./header";
import { FlyoutKeyboardAwareView } from "./keyboard-aware-view";
import { FlyoutRoot } from "./root";
import { FlyoutScrollView } from "./scroll-view";
import { FlyoutTitle } from "./title";

export const Flyout = Object.assign(FlyoutComponent, {
  Root: FlyoutRoot,
  Header: FlyoutHeader,
  Title: FlyoutTitle,
  Content: FlyoutContent,
  ScrollView: FlyoutScrollView,
  FlatList: FlyoutFlatList,
  KeyboardAwareView: FlyoutKeyboardAwareView,
  Handle: FlyoutHandle,
});
```

### packages/flyout/src/index.ts

```tsx
export * from "./components";
export * from "./types";
```

### packages/flyout/src/types/flyout.types.ts

```tsx
import type {
  ComponentRef,
  NamedExoticComponent,
  PropsWithoutRef,
  ReactElement,
  ReactNode,
  RefAttributes,
} from "react";
import type {
  FlatList,
  FlatListProps,
  View as NativeView,
  ScrollViewProps,
} from "react-native";

import type { OverlayComponentProps } from "@impulse-ui-native/overlay";
import type { TextProps, ViewProps } from "@impulse-ui-native/primitives";
import type { FlyoutPlacement } from "@impulse-ui-native/theme";

export interface FlyoutRootProps extends Omit<OverlayComponentProps, "title"> {
  placement?: FlyoutPlacement;
  topOffset?: number;
  bottomOffset?: number;
  style?: ViewProps["style"];
}

export interface FlyoutProps extends FlyoutRootProps {
  title?: OverlayComponentProps["title"];
  header?: ReactNode;
}

export type FlyoutHeaderProps = ViewProps;
export type FlyoutContentProps = ViewProps;
export type FlyoutTitleProps = TextProps;

export type FlyoutHandleProps = ViewProps;

export type FlyoutScrollViewProps = ScrollViewProps;
export type FlyoutFlatListProps<Item> = FlatListProps<Item>;
export interface FlyoutFlatListComponent {
  <Item>(
    props: FlyoutFlatListProps<Item> & RefAttributes<FlatList<Item>>,
  ): ReactElement | null;
}

export interface FlyoutKeyboardAwareViewProps extends ViewProps {
  /** Reserve keyboard overlap inside the body without translating the sheet. Defaults to true. */
  enabled?: boolean;
  /** Additional space above the keyboard, in logical units. Defaults to components.flyout.keyboardOffset (8). */
  keyboardOffset?: number;
}

export type FlyoutKeyboardAwareViewComponent = NamedExoticComponent<
  PropsWithoutRef<FlyoutKeyboardAwareViewProps> &
    RefAttributes<ComponentRef<typeof NativeView>>
>;
```

### packages/flyout/src/types/index.ts

```tsx
export * from "./flyout.types";
```
