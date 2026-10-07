# @impulse-ui-native/popover

Native anchored overlays with theme tokens and Portal rendering. Tooltip and Popover share measurement and collision handling; no Overlay store or animation runtime is required.

## Installation and providers

```sh
pnpm add @impulse-ui-native/popover @impulse-ui-native/portal @impulse-ui-native/theme react-native-safe-area-context
```

Install `SafeAreaProvider`, `ThemeProvider`, and `PortalProvider` at the app root. Render `PortalsHost` last, inside a full-screen native View and the same theme/safe-area providers. Create the `PortalStore` once outside render. A custom `portalName` must match its host's `name`. Positioning measures both anchor and host in window coordinates, so an inset host also works within its own bounds.

## Compound popover

```tsx
import { Popover, Tooltip } from "@impulse-ui-native/popover";
import { Typography } from "@impulse-ui-native/primitives";

<Popover.Root placement="bottom">
  <Popover.Trigger>
    <Typography.Label>Visibility</Typography.Label>
  </Popover.Trigger>
  <Popover.Content>
    <Popover.Title>Project visibility</Popover.Title>
    <Popover.Description>Choose who can view this project.</Popover.Description>
    {/* Supply any selection controls or actions here. */}
    <Popover.Close>
      <Typography.Label>Done</Typography.Label>
    </Popover.Close>
  </Popover.Content>
</Popover.Root>;

<Tooltip content="Syncs when you’re online">
  <Typography.Label>Auto-sync info</Typography.Label>
</Tooltip>;
```

All compound parts render supplied children. `Popover.Content` owns Portal rendering and carries popover context to the host, so `Title`, `Description`, and `Close` work there. Other app-local React providers around an anchor do not automatically move with it; put those providers above the host or inside Content.

The convenience form assembles Trigger and Content:

```tsx
<Popover trigger={<Typography.Label>Details</Typography.Label>}>
  <Popover.Title>Project details</Popover.Title>
  <Popover.Description>Updated just now.</Popover.Description>
</Popover>
```

## Contract

- `open`, `defaultOpen` (false), and `onOpenChange` support controlled and uncontrolled state. Controlled consumers must apply requested changes.
- `placement` accepts `top`, `bottom`, `left`, and `right`. Popover defaults to bottom; Tooltip defaults to top. Left/right are physical placements.
- A press toggles Popover. Tooltip defaults to long-press. `triggerProps.trigger` or `Popover.Trigger`'s `trigger` selects either behavior. Consumer press/long-press callbacks are preserved.
- Root `disabled` suppresses the overlay and blocks trigger changes. Trigger/Close `disabled` or `loading` blocks that part's interaction. Supply a single Trigger and Content per Root; use non-interactive visual children inside Trigger rather than nesting another pressable.
- Outside taps and Android Back request dismissal. Outside taps are consumed; there is no dim scrim. Content sizes naturally without internal scrolling. Keep popovers compact; use a sheet, dialog, or screen for larger content. Keyboard avoidance and nested overlay coordination are outside this initial API.
- Tooltip `duration` defaults to 3000ms from opening; zero persists until dismissal. Timers clean up on close/unmount. Supply strings/numbers for token-styled text or a React node for custom content.
- `surface` selects elevated (default) or inverse appearance for Popover. Tooltip uses inverse. Override `components.popover` on ThemeProvider for shared geometry, typography, and surface styling.
- Elevated content defaults to 320dp wide; inverse hints size to their content. Both are constrained to the available host width. Content spacing and width can be customized with primitive style props or `style`.
- Anchors and host bounds are measured on opening and polled every 100ms while open, following scrolling and layout changes. Only one measurement is in flight; slow native callbacks are allowed to finish. Closed overlays have no measurement timer. Content stays hidden until measured and when its anchor is outside the usable host bounds.
- Collision handling flips to the opposite side when it has more space, then shifts into safe-area bounds. The arrow tracks the anchor and hides if a constrained panel cannot point accurately. Extremely large content can overlap the anchor after clamping.

## Exports and verification

`Popover`, `Tooltip`, and their prop/placement/surface types are available directly or through `@impulse-ui-native/toolkit`. Storybook covers composition, controlled state, disabled triggers, long-press, and edge placements. Use the on-device Storybook host to verify rendering and interaction on iOS and Android.
