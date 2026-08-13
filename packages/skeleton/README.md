# @impulse-ui-native/skeleton

Composable, theme-aware placeholders for loading layouts.

## Installation

```sh
pnpm add @impulse-ui-native/skeleton
```

## Main exports

`Skeleton` is a compound export with four parts:

- `Skeleton.Container` groups placeholders and accepts theme spacing and flex props.
- `Skeleton.Bone` renders a rectangular placeholder with border and dimension props.
- `Skeleton.Text` renders a text-sized placeholder from sample text and a typography preset.
- `Skeleton.Tag` renders a pill-shaped placeholder.

The package also exports the prop types for each part.

## Usage

```tsx
import { Typography } from "@impulse-ui-native/primitives";
import { Skeleton } from "@impulse-ui-native/skeleton";

<Skeleton.Container gap="sm">
  <Skeleton.Bone width={48} height={48} />
  <Skeleton.Text text="Loading account name" Component={Typography.Body} />
  <Skeleton.Tag size="medium" width={80} />
</Skeleton.Container>;
```

Skeleton colors, radii, line height, and gaps come from the active `ThemeProvider` component tokens.
