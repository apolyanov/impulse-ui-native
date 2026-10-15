# @impulse-ui-native/icon

Local package version: 9.1.1. This is a repository snapshot, not a claim about the latest published package.

## Package guide

# @impulse-ui-native/icon

A React Native SVG icon library with a common renderer and six visual weights.

## Installation

```sh
pnpm add @impulse-ui-native/icon react-native-svg
```

## Main exports

- `Icon` normalizes icon size, color, and rendering. Its default foreground is
  `theme.colors.text.primary`; explicit `color`, then `fill`, override that default.
- Named wrapper icons such as `HeartIcon` select a visual weight through the `variant` prop.
- Available weights are `bold`, `duotone`, `fill`, `light`, `regular`, and `thin`.
- `IconProps`, `IconWrapperProps`, `IconVariant`, and `IconStyle` support typed composition.

## Usage

```tsx
import { Icon } from "@impulse-ui-native/icon";
import { HeartIcon } from "@impulse-ui-native/icon/icons/heart";

<Icon icon={HeartIcon} variant="duotone" size="large" color="#6d5dfc" />;
```

You can also render a named wrapper directly when you want to control the SVG dimensions yourself. Supply its `color` explicitly; automatic theme defaults come from the shared `Icon` renderer.

```tsx
<HeartIcon variant="regular" width={24} height={24} color="#111827" />
```

Wrapper names use the `{Name}Icon` form. Import wrappers through their per-icon
entrypoints so Metro only includes the icons used by the application:

```tsx
import { HeartIcon } from "@impulse-ui-native/icon/icons/heart";
```


## Public export and source reference

The following modules are reachable through relative re-exports from this package's root. Their imports refer to the original package layout. This appendix preserves exact prop contracts, composition namespaces, defaults, hooks, and behavior for an implementing agent; it is reference text, not standalone executable code. An exported module may also contain private declarations. Internal modules that are only imported are not copied. React Native and dependency types remain defined by those dependencies.

### packages/icon/src/components/icon.tsx

```tsx
import { memo, useMemo } from "react";

import { useTheme } from "@impulse-ui-native/theme";

import type { IconProps } from "../types";

export const Icon = memo(function Icon({
  size = "medium",
  icon,
  ...props
}: IconProps) {
  const Icon = icon;

  const theme = useTheme();

  const iconTokens = theme.components.icon;
  const color = props.color ?? props.fill ?? theme.colors.text.primary;

  const iconSize = useMemo(
    () => (typeof size === "number" ? size : iconTokens.sizes[size]),
    [iconTokens.sizes, size],
  );

  return (
    <Icon
      {...props}
      color={color}
      width={iconSize}
      height={iconSize}
      fill={color}
    />
  );
});
```

### packages/icon/src/components/index.ts

```tsx
export { Icon } from "./icon";
```

### packages/icon/src/index.ts

```tsx
export * from "./components";
export * from "./types";
```

### packages/icon/src/types/icon.types.ts

```tsx
import { ComponentType } from "react";
import { SvgProps } from "react-native-svg";

import { ComponentSize } from "@impulse-ui-native/theme";

export type IconStyle = SvgProps["style"];

export type IconVariant =
  | "bold"
  | "duotone"
  | "fill"
  | "light"
  | "regular"
  | "thin";

export interface IconProps extends SvgProps {
  size?: ComponentSize | number;
  color?: string;
  variant?: IconVariant;
  icon: ComponentType<SvgProps>;
  style?: IconStyle;
}

export interface IconWrapperProps extends SvgProps {
  variant?: IconVariant;
}
```

### packages/icon/src/types/index.ts

```tsx
export * from "./icon.types";
```
