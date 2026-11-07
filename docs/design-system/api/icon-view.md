# @impulse-ui-native/icon-view

Local package version: 17.0.0. This is a repository snapshot, not a claim about the latest published package.

## Package guide

# @impulse-ui-native/icon-view

A non-pressable icon surface built on primitives' `View` and the shared `Icon`.

## Installation

```sh
pnpm add @impulse-ui-native/icon-view @impulse-ui-native/icon react-native-svg react-native-safe-area-context
```

React and React Native are host peers. Render inside the library's `ThemeProvider`.

## Usage

```tsx
import { IconView } from "@impulse-ui-native/icon-view";
import { CheckIcon } from "@impulse-ui-native/icon/icons/check";

<IconView
  icon={CheckIcon}
  size="large"
  variant="soft"
  tone="success"
  alignSelf="center"
  margin="xs"
/>;
```

`IconView` and `IconViewProps` are exported from this package and toolkit.
Named icons remain available through the icon package's per-icon entrypoints.

- Sizes: `small`, `medium`, `large`, matching IconButton's 32/40/48 square
  containers and themed icon sizes. Default: `medium`.
- Variants: `filled`, `outlined`, `soft`, matching Badge. Default: `filled`.
- Tones: `primary`, `secondary`, `neutral`, `error`, `warning`, `success`, `info`.
  Default: `primary`.
- `icon`: an icon component, matching IconButton's API.
- `iconProps`: SVG options, including the icon weight through `variant`.
- `color` and `backgroundColor`: foreground and background overrides.

All primitives `View` props except `children` are supported, including direct
layout, spacing, border, and shadow props. Native `style` overrides direct style
props, which override the component's default container styles. Parent alignment
applies normally. Styling comes from `theme.components.iconView`.

Use IconButton when the icon is an action; IconView has no built-in press behavior.

## Agent and design reference

Start with the [capability guide](../capabilities/icon-view.md) for supported exports, props, defaults, composition rules, setup, and recipes. Use the [component chooser](../component-chooser.md) to select a package. These references describe the repository source; verify your installed package version before copying examples.

## Public export and source reference

The following modules are reachable through relative re-exports from this package's root. Their imports refer to the original package layout. This appendix preserves exact prop contracts, composition namespaces, defaults, hooks, and behavior for an implementing agent; it is reference text, not standalone executable code. An exported module may also contain private declarations. Internal modules that are only imported are not copied. React Native and dependency types remain defined by those dependencies.

### packages/icon-view/src/components/icon-view.tsx

```tsx
import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { Icon } from "@impulse-ui-native/icon";
import { View } from "@impulse-ui-native/primitives";
import { useStyleProps, useThemedStyles } from "@impulse-ui-native/theme";

import type { IconViewProps, IconViewThemeProps } from "../types";

export const IconView = memo(function IconView({
  icon,
  size = "medium",
  tone = "primary",
  variant = "filled",
  color,
  backgroundColor,
  iconProps,
  style,
  ...props
}: IconViewProps) {
  const extractedStyleProps = useStyleProps(props);
  const styles = useThemedStyles(
    themedStyles,
    { size, tone, variant, color, backgroundColor },
    [size, tone, variant, color, backgroundColor],
  );

  const containerStyle = useMemo(
    () => [styles.container, extractedStyleProps, style],
    [styles.container, extractedStyleProps, style],
  );

  return (
    <View {...props} style={containerStyle}>
      <Icon {...iconProps} icon={icon} size={size} color={styles.icon.color} />
    </View>
  );
});

function themedStyles(theme: AppTheme, props: IconViewThemeProps) {
  const { size, tone, variant, color, backgroundColor } = props;
  const tokens = theme.components.iconView;
  const sizeTokens = tokens.sizes[size];
  const appearance = tokens.colors[tone][variant];

  return StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      width: sizeTokens.size,
      height: sizeTokens.size,
      padding: sizeTokens.padding,
      borderRadius: tokens.borderRadius,
      borderWidth: tokens.borderWidth,
      borderColor: appearance.borderColor,
      backgroundColor: backgroundColor ?? appearance.backgroundColor,
    },
    icon: {
      color: color ?? appearance.color,
    },
  });
}
```

### packages/icon-view/src/components/index.ts

```tsx
export { IconView } from "./icon-view";
```

### packages/icon-view/src/index.ts

```tsx
export * from "./components";
export * from "./types";
```

### packages/icon-view/src/types/icon-view.types.ts

```tsx
import type { IconProps } from "@impulse-ui-native/icon";
import type { ViewProps } from "@impulse-ui-native/primitives";
import type {
  BadgeTone,
  ComponentSize,
  DisplayVariant,
} from "@impulse-ui-native/theme";

export interface IconViewProps extends Omit<ViewProps, "children"> {
  icon: IconProps["icon"];
  size?: ComponentSize;
  tone?: BadgeTone;
  variant?: DisplayVariant;
  color?: string;
  backgroundColor?: string;
  iconProps?: Omit<IconProps, "icon" | "size" | "color">;
}

export interface IconViewThemeProps {
  size: ComponentSize;
  tone: BadgeTone;
  variant: DisplayVariant;
  color?: string;
  backgroundColor?: string;
}
```

### packages/icon-view/src/types/index.ts

```tsx
export * from "./icon-view.types";
```
