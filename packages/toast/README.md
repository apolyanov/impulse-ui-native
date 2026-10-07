# @impulse-ui-native/toast

Native toast notifications built from theme tokens and the overlay lifecycle.

## Installation

`pnpm add @impulse-ui-native/toast`

Install the React, React Native, react-native-svg, react-native-safe-area-context, react-native-reanimated (4 or newer) and react-native-worklets peers. Configure Reanimated and Worklets in the native host. Place a ThemeProvider, SafeAreaProvider, OverlayProvider and OverlayHost at the application root, like Flyout. Keep OverlayHost outside scrolling content.

## Ready-made Toast and imperative opening

```tsx
import type { OverlayComponentProps } from "@impulse-ui-native/overlay";
import { OverlayStore } from "@impulse-ui-native/overlay";
import { Toast } from "@impulse-ui-native/toast";

export const overlays = new OverlayStore(); // Supply to OverlayProvider.

function SuccessToast(props: OverlayComponentProps) {
  return <Toast {...props} tone="success" placement="bottom" duration={4000} />;
}

function SavedContent() {
  return <Toast.Description>Your workspace is up to date.</Toast.Description>;
}

// Register once for a reusable singleton, like Flyout.
const saved = overlays.register({
  id: "saved",
  Component: SuccessToast,
  Content: SavedContent,
  title: "Changes saved",
});
saved.open();
saved.close();

// Register on each invocation to open independent notifications.
function notifySaved() {
  return overlays
    .register({
      id: "saved",
      Component: SuccessToast,
      Content: SavedContent,
      title: "Changes saved",
    })
    .open();
}
```

Content props remain typed by `OverlayStore.register`, and `open` returns the overlay ID. Use `overlays.close(id)` to close an entry. A singleton controller ignores another open until its current entry has been removed after exit.

Like Input, `Toast` assembles its default UI from composable parts. It supplies the semantic icon and close icon, renders `title` and `description`, and places children inside `Toast.Content`. Pass `action` and `actionProps` to add an action; `actionProps` accepts `onPress`, `disabled`, `loading`, and `closeOnPress`. Use `hideIcon` or `hideClose` to omit those default parts.

```tsx
<Toast
  id="saved"
  title="Changes saved"
  description="Your workspace is up to date."
  action="Undo"
  actionProps={undoActionProps}
/>
```

Supply a stable `undoActionProps` object with your `onPress` handler.

## Custom composition

Composable parts render the children you supply. They do not create fallback icons or content. Use `Toast.Root` when you want to assemble the whole notification yourself:

```tsx
import { Icon } from "@impulse-ui-native/icon/components/icon";
import { XIcon } from "@impulse-ui-native/icon/icons/x";

<Toast.Root id="custom" duration={0}>
  <Toast.Content>
    <Toast.Title>Custom notification</Toast.Title>
    <Toast.Description>Choose your own content and actions.</Toast.Description>
  </Toast.Content>
  <Toast.Close>
    <Icon icon={XIcon} size={24} />
  </Toast.Close>
</Toast.Root>;
```

## Parts

- `Toast`: ready-made component with semantic icon, title/description, optional action, and close button.
- `Toast.Root`: overlay lifecycle and themed surface; renders only supplied children. Defaults: bottom placement, success tone, 4000 ms duration. The inherited overlay title is rendered by `Toast`, not Root.
- `Toast.Content`: flexible vertical text container.
- `Toast.Title` and `Toast.Description`: token-aware typography with native text props.
- `Toast.Icon`: themed semantic icon container; supply the icon as children.
- `Toast.Action`: runs onPress and dismisses by default; `closeOnPress={false}` keeps the toast open. Disabled and loading actions block presses.
- `Toast.Close`: dismiss action that renders supplied children, with an optional onPress callback.

## Overlay lifecycle

OverlayStore owns the entries and their open/close state. Toast adds no store, queue, or capacity limit. Each entry opens immediately at its placement, using the layer supplied by OverlayHost; newer entries at the same placement appear above older ones. There is no modal backdrop, so the surrounding application remains interactive.

The timer starts after entry animation finishes, pauses when the app leaves the active state, and resumes with the remaining time. `duration={0}` (or a non-finite/non-positive duration) persists until dismissal. Use a persistent duration for messages that require a response.

onOpen and onOpenFinished run during entry; onClose runs on dismissal, and onCloseFinished lets OverlayHost remove the entry after exit. Automatic dismissal calls the existing OverlayStore.close(id). Duration, foreground/background timer handling, and animation are component-owned. Unmounting cancels animation, timer and app-state subscriptions.

Toasts fade and translate by the theme edge offset. Top toasts sit 8 px below the top safe-area inset, using the toast topOffset token; bottom and side gaps use the 16 px edgeOffset token. The newest toast is full size at the screen edge. Older toasts stack downward at both placements by the existing `gap` token and shrink by `stackScaleStep` (4%) per level. Changes to stack depth animate position and scale together over 220 ms, including moving forward when newer entries are removed. `stackLimit` defaults to five visual levels: scales are 100%, 96%, 92%, 88%, and 84%. All further toasts share the fifth level's scale and offset, behind newer entries; the limit does not discard or queue toasts. Component identity is the registered `Component`, including wrappers. Placements and IDs should remain stable for an entry's lifetime. Root is designed for imperative OverlayStore registration; use the returned controller to dismiss it.

## Theme

Toast uses `theme.components.toast` for surfaces, geometry, typography, actions and semantic icon colors. Override those tokens through ThemeProvider's components prop, including a factory that derives custom values from the active light/dark theme. No additional toast provider or host is needed.

## Verification

Use the Toast stories in the on-device Storybook host to verify rendering, touch interaction, timer pause/resume, and lifecycle cancellation on iOS and Android.
