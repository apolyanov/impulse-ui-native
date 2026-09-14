# @impulse-ui-native/types

Shared TypeScript contracts used across Impulse UI Native packages.

## Installation

```sh
pnpm add @impulse-ui-native/types
```

Most applications do not need to install this package directly. It is primarily useful when typing integrations between Impulse UI Native packages.

## Main exports

- `FlyoutPlacement`, `FlyoutKey`, and `FlyoutOpenProps` describe flyout placement and open-time data.

## Example

```ts
import type { FlyoutOpenProps } from "@impulse-ui-native/types";

type ProfileFlyoutProps = FlyoutOpenProps<{
  userId: string;
}>;
```

## Related packages

Overlay registration and lifecycle contracts are exported directly by `@impulse-ui-native/overlay`.
