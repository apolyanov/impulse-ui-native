# @impulse-ui-native/radio

Local package version: 15.0.5. This is a repository snapshot, not a claim about the latest published package.

## Package guide

# @impulse-ui-native/radio

Token-aware radio controls for React Native mobile applications.

## Installation

```sh
pnpm add @impulse-ui-native/radio
```

Render the component inside `ThemeProvider` from `@impulse-ui-native/theme`.

## Main exports

- `Radio` supports controlled and uncontrolled selected state.
- `RadioProps` describes the component API.

## Usage

```tsx
import { useState } from "react";

import { Radio } from "@impulse-ui-native/radio";

export function DeliveryMethodRadio() {
  const [checked, setChecked] = useState(false);

  return (
    <Radio
      checked={checked}
      onCheckedChange={setChecked}
      size="medium"
      variant="filled"
    />
  );
}
```

Use `defaultChecked` for uncontrolled state. Pressing a radio selects it;
pressing it again does not clear the selection. The component accepts the
shared `small`, `medium`, and `large` sizes and the `filled`, `outlined`, and
`soft` selection variants.

## Tones

Use `tone="neutral" | "primary" | "secondary"` independently of
`variant="filled" | "outlined" | "soft"`. The default tone is `primary`,
preserving existing appearances. Disabled styling remains neutral for all tones.
Appearance tokens are explicit `colors[tone][variant]` maps under this component's
theme tokens, replacing `variants[variant]`. Geometry and value behavior are unchanged.

## Agent and design reference

Start with the [capability guide](../capabilities/radio.md) for supported exports, props, defaults, composition rules, setup, and recipes. Use the [component chooser](../component-chooser.md) to select a package. These references describe the repository source; verify your installed package version before copying examples.

## Public export and source reference

The following modules are reachable through relative re-exports from this package's root. Their imports refer to the original package layout. This appendix preserves exact prop contracts, composition namespaces, defaults, hooks, and behavior for an implementing agent; it is reference text, not standalone executable code. An exported module may also contain private declarations. Internal modules that are only imported are not copied. React Native and dependency types remain defined by those dependencies.

### packages/radio/src/components/index.ts

```tsx
export { Radio } from "./radio";
```

### packages/radio/src/components/radio.tsx

```tsx
import type {
  GestureResponderEvent,
  PressableStateCallbackType,
  StyleProp,
  ViewStyle,
} from "react-native";
import { memo, useCallback } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { useControllableState } from "@impulse-ui-native/core";
import { Pressable, View } from "@impulse-ui-native/primitives";
import {
  getSelectionStateTokens,
  useComponentsTokens,
  useThemedStyles,
} from "@impulse-ui-native/theme";

import type { RadioProps, RadioThemeProps } from "../types";

export const Radio = memo(function Radio({
  checked: checkedProp,
  defaultChecked = false,
  disabled,
  hitSlop,
  onCheckedChange,
  onPress,
  size = "medium",
  style,
  variant = "filled",
  tone = "primary",
  ...props
}: RadioProps) {
  const tokens = useComponentsTokens();

  const [checked, setChecked] = useControllableState<boolean>({
    prop: checkedProp,
    defaultProp: defaultChecked,
    onChange: onCheckedChange,
  });
  const styles = useThemedStyles(
    themedStyles,
    { checked, disabled, size, variant, tone },
    [checked, disabled, size, variant, tone],
  );

  const radioTokens = tokens.radio;
  const sizeTokens = radioTokens.sizes[size];

  const radioStyle = useCallback(
    (state: PressableStateCallbackType): StyleProp<ViewStyle> => [
      styles.root,
      typeof style === "function" ? style(state) : style,
    ],
    [style, styles.root],
  );

  const handlePress = useCallback(
    (event: GestureResponderEvent) => {
      setChecked(true);
      onPress?.(event);
    },
    [onPress, setChecked],
  );

  return (
    <Pressable
      {...props}
      disabled={disabled}
      hitSlop={hitSlop ?? sizeTokens.hitSlop}
      onPress={handlePress}
      style={radioStyle}
    >
      {checked ? <View style={styles.indicator} /> : null}
    </Pressable>
  );
});

function themedStyles(theme: AppTheme, props: RadioThemeProps) {
  const { checked, disabled, size, variant, tone } = props;

  const radioTokens = theme.components.radio;
  const sizeTokens = radioTokens.sizes[size];
  const appearanceTokens = getSelectionStateTokens(
    radioTokens.colors[tone][variant],
    { disabled, selected: checked },
  );

  return StyleSheet.create({
    root: {
      alignItems: "center",
      justifyContent: "center",

      width: sizeTokens.size,
      height: sizeTokens.size,

      borderWidth: radioTokens.borderWidth,
      borderRadius: radioTokens.borderRadius,
      borderColor: appearanceTokens.borderColor,
      backgroundColor: appearanceTokens.backgroundColor,
    },

    indicator: {
      width: sizeTokens.indicatorSize,
      height: sizeTokens.indicatorSize,
      borderRadius: radioTokens.borderRadius,
      backgroundColor: appearanceTokens.color,
    },
  });
}
```

### packages/radio/src/index.ts

```tsx
export * from "./components";
export * from "./types";
```

### packages/radio/src/types/index.ts

```tsx
export * from "./radio.types";
```

### packages/radio/src/types/radio.types.ts

```tsx
import type { PressableCoreProps } from "@impulse-ui-native/primitives";
import type {
  ComponentSize,
  ComponentTone,
  SelectionVariant,
} from "@impulse-ui-native/theme";

export interface RadioProps extends Omit<
  PressableCoreProps,
  "children" | "loading"
> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  size?: ComponentSize;
  variant?: SelectionVariant;
  tone?: ComponentTone;
}

export interface RadioThemeProps {
  checked: boolean;
  disabled?: boolean;
  size: ComponentSize;
  variant: SelectionVariant;
  tone: ComponentTone;
}
```
