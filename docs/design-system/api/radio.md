# @impulse-ui-native/radio

Local package version: 9.1.1. This is a repository snapshot, not a claim about the latest published package.

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
    { checked, disabled, size, variant },
    [checked, disabled, size, variant],
  );

  const radioTokens = tokens.radio;
  const sizeTokens = radioTokens.sizes[size];

  const radioStyle = useCallback(
    (state: PressableStateCallbackType): StyleProp<ViewStyle> =>
      StyleSheet.flatten([
        styles.root,
        typeof style === "function" ? style(state) : style,
      ]),
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
  const { checked, disabled, size, variant } = props;

  const radioTokens = theme.components.radio;
  const sizeTokens = radioTokens.sizes[size];
  const appearanceTokens = getSelectionStateTokens(
    radioTokens.variants[variant],
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
import type { ComponentSize, SelectionVariant } from "@impulse-ui-native/theme";

export interface RadioProps extends Omit<
  PressableCoreProps,
  "children" | "loading"
> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  size?: ComponentSize;
  variant?: SelectionVariant;
}

export interface RadioThemeProps {
  checked: boolean;
  disabled?: boolean;
  size: ComponentSize;
  variant: SelectionVariant;
}
```
