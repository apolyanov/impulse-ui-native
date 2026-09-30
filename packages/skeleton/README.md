# @impulse-ui-native/skeleton

Composable, theme-aware placeholders for loading layouts.

## Installation

```sh
pnpm add @impulse-ui-native/skeleton react-native-reanimated react-native-worklets
```

Complete the Reanimated and Worklets setup required by your React Native or Expo project.

## Main exports

`Skeleton` is a compound export with composable primitives and token-matched
component presets:

- `Skeleton.Container` groups placeholders and accepts theme spacing and flex props.
- `Skeleton.Bone` renders a rectangular placeholder with border and dimension props.
- `Skeleton.Text` renders a text-sized placeholder from sample text and a typography preset.
- `Skeleton.Tag` renders a pill-shaped placeholder.
- `Skeleton.Avatar`, `Badge`, `Button`, and `IconButton` mirror common display and action geometry.
- `Skeleton.Checkbox`, `Radio`, and `Switch` mirror choice-control geometry.
- `Skeleton.Control` covers Input, Select, and date/time field surfaces; `Skeleton.Textarea` covers multiline fields.
- `Skeleton.Slider`, `Progress`, `SegmentedControl`, and `Pagination` preserve data-control and navigation footprints.
- `Skeleton.Divider` mirrors horizontal or vertical separators.

The package also exports the prop types for each part.

## Usage

```tsx
import { Typography } from "@impulse-ui-native/primitives";
import { Skeleton } from "@impulse-ui-native/skeleton";

<Skeleton.Container gap="sm">
  <Skeleton.Avatar size="large" />
  <Skeleton.Text text="Loading account name" Component={Typography.Body} />
  <Skeleton.Tag size="medium" width={80} />
</Skeleton.Container>;
```

All presets accept the same spacing, border, flex, dimension, and `style` props
as `Skeleton.Bone`, so their token-derived defaults can be adjusted for the
content they replace. `itemCount` controls the width of Pagination and
SegmentedControl presets, `rows` controls Textarea height, and `variant`
selects linear or circular Progress geometry.

Skeleton colors, radii, line height, and gaps come from the active
`ThemeProvider` component tokens. Composite layouts such as cards, accordions,
steppers, and charts should be assembled from these presets and `Skeleton.Bone`
so the placeholder preserves the application-specific layout.
