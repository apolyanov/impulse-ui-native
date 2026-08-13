# @impulse-ui-native/types

Shared TypeScript contracts used by Impulse UI Native's overlay and layer packages.

## Installation

```sh
pnpm add @impulse-ui-native/types
```

Most applications do not need to install this package directly. It is primarily useful when extending the layer system or typing integrations between Impulse UI Native packages.

## Main exports

- `FlyoutPlacement`, `FlyoutKey`, and `FlyoutOpenProps` describe flyout placement and open-time data.
- `BaseRegistrationProps` describes a registered layer and its lifecycle callbacks.
- `LayerComponentBaseProps` is the common contract implemented by layer components.
- `Layer` and `OpenLayerParams` describe mounted and requested layers.
- `RegistrationTitle` supports either a fixed title or one derived from the layer props.

## Example

```ts
import type { FlyoutOpenProps } from "@impulse-ui-native/types";

type ProfileFlyoutProps = FlyoutOpenProps<{
  userId: string;
}>;
```

## Related packages

These contracts are consumed by `@impulse-ui-native/flyout`, `@impulse-ui-native/layers`, and `@impulse-ui-native/echo`.
