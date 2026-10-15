# @impulse-ui-native/skeleton

Local package version: 9.1.1. This is a repository snapshot, not a claim about the latest published package.

## Package guide

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


## Public export and source reference

The following modules are reachable through relative re-exports from this package's root. Their imports refer to the original package layout. This appendix preserves exact prop contracts, composition namespaces, defaults, hooks, and behavior for an implementing agent; it is reference text, not standalone executable code. An exported module may also contain private declarations. Internal modules that are only imported are not copied. React Native and dependency types remain defined by those dependencies.

### packages/skeleton/src/components/index.ts

```tsx
export { Skeleton } from "./skeleton";
```

### packages/skeleton/src/components/skeleton.tsx

```tsx
import { Avatar } from "./avatar";
import { Badge } from "./badge";
import { Bone } from "./bone";
import { Button } from "./button";
import { Checkbox } from "./checkbox";
import { Container } from "./container";
import { Control } from "./control";
import { Divider } from "./divider";
import { IconButton } from "./icon-button";
import { Pagination } from "./pagination";
import { Progress } from "./progress";
import { Radio } from "./radio";
import { SegmentedControl } from "./segmented-control";
import { Slider } from "./slider";
import { Switch } from "./switch";
import { Tag } from "./tag";
import { Text } from "./text";
import { Textarea } from "./textarea";

export const Skeleton = {
  Avatar,
  Badge,
  Bone,
  Button,
  Checkbox,
  Container,
  Control,
  Divider,
  IconButton,
  Pagination,
  Progress,
  Radio,
  SegmentedControl,
  Slider,
  Switch,
  Text,
  Tag,
  Textarea,
};
```

### packages/skeleton/src/index.ts

```tsx
export * from "./components";
export * from "./types";
```

### packages/skeleton/src/types/index.ts

```tsx
export * from "./skeleton.types";
```

### packages/skeleton/src/types/skeleton.types.ts

```tsx
import type { StyleProp, ViewStyle } from "react-native";

import type { TypographyComponent } from "@impulse-ui-native/primitives";
import type {
  BorderProps,
  ComponentSize,
  DimensionProps,
  DividerTokenOrientation,
  FlexProps,
  ProgressVariant,
  SpacingProps,
} from "@impulse-ui-native/theme";

export type SkeletonContainerProps = SpacingProps &
  BorderProps &
  FlexProps &
  DimensionProps;

export interface SkeletonBoneProps
  extends SpacingProps, BorderProps, FlexProps, DimensionProps {
  style?: StyleProp<ViewStyle>;
}

export interface SkeletonTextProps extends BorderProps {
  text: string;
  Component: TypographyComponent;
}

export interface SkeletonTagProps extends SkeletonBoneProps {
  size?: ComponentSize;
}

export interface SkeletonSizedProps extends SkeletonBoneProps {
  size?: ComponentSize;
}

export type SkeletonAvatarProps = SkeletonSizedProps;

export type SkeletonBadgeProps = SkeletonSizedProps;

export type SkeletonButtonProps = SkeletonSizedProps;

export type SkeletonCheckboxProps = SkeletonSizedProps;

export type SkeletonControlProps = SkeletonSizedProps;

export type SkeletonIconButtonProps = SkeletonSizedProps;

export type SkeletonRadioProps = SkeletonSizedProps;

export type SkeletonSliderProps = SkeletonSizedProps;

export type SkeletonSwitchProps = SkeletonSizedProps;

export interface SkeletonDividerProps extends SkeletonBoneProps {
  orientation?: DividerTokenOrientation;
}

export interface SkeletonPaginationProps extends SkeletonSizedProps {
  itemCount?: number;
}

export interface SkeletonProgressProps extends SkeletonSizedProps {
  variant?: ProgressVariant;
}

export interface SkeletonSegmentedControlProps extends SkeletonSizedProps {
  itemCount?: number;
}

export interface SkeletonTextareaProps extends SkeletonSizedProps {
  rows?: number;
}
```
