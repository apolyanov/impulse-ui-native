# @impulse-ui-native/layers

An app-wide registry and renderer for imperative Impulse UI Native overlays.

## Installation

```sh
pnpm add @impulse-ui-native/layers
```

## Main exports

- `registerFlyout` defines a typed flyout controller with `open` and `close` methods.
- `LayerCenter` listens for layer events and renders the active stack.

## Usage

Register a flyout outside the render path, then mount one `LayerCenter` near the root of the themed application.

```tsx
import { LayerCenter, registerFlyout } from "@impulse-ui-native/layers";
import { Typography } from "@impulse-ui-native/primitives";

const profileFlyout = registerFlyout<{ name: string }>({
  id: "profile",
  title: ({ name }) => name,
  Content: ({ name }) => <Typography.Body>{name}</Typography.Body>,
});

profileFlyout.open({ name: "Ada" });

// Render once at application level:
<LayerCenter />;
```

Set `unique: true` on a registration to keep a single layer with that ID in the stack. Lifecycle callbacks are available for open, close, and animation completion.
