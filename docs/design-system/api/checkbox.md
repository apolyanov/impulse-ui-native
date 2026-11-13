# @impulse-ui-native/checkbox

Local package version: 17.4.0. This is a repository snapshot, not a claim about the latest published package.

## Package guide

# @impulse-ui-native/checkbox

Token-aware checkbox controls for React Native mobile applications.

## Installation

```sh
pnpm add @impulse-ui-native/checkbox
```

Render the component inside `ThemeProvider` from `@impulse-ui-native/theme`.

## Main exports

- `Checkbox` supports checked, unchecked, and indeterminate states.
- `CheckboxProps` describes the controlled and uncontrolled component API.
- `CheckboxState` is `boolean | "indeterminate"`.

## Usage

```tsx
import { useState } from "react";

import type { CheckboxState } from "@impulse-ui-native/checkbox";
import { Checkbox } from "@impulse-ui-native/checkbox";

export function TermsCheckbox() {
  const [checked, setChecked] = useState<CheckboxState>(false);

  return (
    <Checkbox
      checked={checked}
      onCheckedChange={setChecked}
      size="medium"
      variant="filled"
    />
  );
}
```

Use `defaultChecked` for uncontrolled state. Pressing an indeterminate checkbox
changes it to checked. The component accepts the shared `small`, `medium`, and
`large` sizes and the `filled`, `outlined`, and `soft` selection variants.

## Tones

Use `tone="neutral" | "primary" | "secondary"` independently of
`variant="filled" | "outlined" | "soft"`. The default tone is `primary`,
preserving existing appearances. Disabled styling remains neutral for all tones.
Appearance tokens are explicit `colors[tone][variant]` maps under this component's
theme tokens, replacing `variants[variant]`. Geometry and value behavior are unchanged.

## Agent and design reference

Start with the [capability guide](../capabilities/checkbox.md) for supported exports, props, defaults, composition rules, setup, and recipes. Use the [component chooser](../component-chooser.md) to select a package. These references describe the repository source; verify your installed package version before copying examples.

## Public export and source reference

The following modules are reachable through relative re-exports from this package's root. Their imports refer to the original package layout. This appendix preserves exact prop contracts, composition namespaces, defaults, hooks, and behavior for an implementing agent; it is reference text, not standalone executable code. An exported module may also contain private declarations. Internal modules that are only imported are not copied. React Native and dependency types remain defined by those dependencies.

### packages/checkbox/src/components/checkbox.tsx

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
import { Icon } from "@impulse-ui-native/icon";
import { CheckIcon } from "@impulse-ui-native/icon/icons/check";
import { MinusIcon } from "@impulse-ui-native/icon/icons/minus";
import { Pressable } from "@impulse-ui-native/primitives";
import {
  getSelectionStateTokens,
  useComponentsTokens,
  useThemedStyles,
} from "@impulse-ui-native/theme";

import type {
  CheckboxProps,
  CheckboxState,
  CheckboxThemeProps,
} from "../types";

export const Checkbox = memo(function Checkbox({
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
}: CheckboxProps) {
  const tokens = useComponentsTokens();

  const [checked, setChecked] = useControllableState<CheckboxState>({
    prop: checkedProp,
    defaultProp: defaultChecked,
    onChange: onCheckedChange,
  });
  const styles = useThemedStyles(
    themedStyles,
    { checked, disabled, size, variant, tone },
    [checked, disabled, size, variant, tone],
  );

  const checkboxTokens = tokens.checkbox;
  const sizeTokens = checkboxTokens.sizes[size];
  const StateIcon =
    checked === "indeterminate" ? MinusIcon : checked ? CheckIcon : undefined;

  const checkboxStyle = useCallback(
    (state: PressableStateCallbackType): StyleProp<ViewStyle> => [
      styles.root,
      typeof style === "function" ? style(state) : style,
    ],
    [style, styles.root],
  );

  const handlePress = useCallback(
    (event: GestureResponderEvent) => {
      setChecked((current) => (current === "indeterminate" ? true : !current));
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
      style={checkboxStyle}
    >
      {StateIcon ? (
        <Icon
          icon={StateIcon}
          size={sizeTokens.iconSize}
          color={styles.icon.color}
          variant="bold"
        />
      ) : null}
    </Pressable>
  );
});

function themedStyles(theme: AppTheme, props: CheckboxThemeProps) {
  const { checked, disabled, size, variant, tone } = props;

  const checkboxTokens = theme.components.checkbox;
  const sizeTokens = checkboxTokens.sizes[size];
  const selected = checked !== false;
  const appearanceTokens = getSelectionStateTokens(
    checkboxTokens.colors[tone][variant],
    { disabled, selected },
  );

  return StyleSheet.create({
    root: {
      alignItems: "center",
      justifyContent: "center",

      width: sizeTokens.size,
      height: sizeTokens.size,

      borderWidth: checkboxTokens.borderWidth,
      borderRadius: checkboxTokens.borderRadius,
      borderColor: appearanceTokens.borderColor,
      backgroundColor: appearanceTokens.backgroundColor,
    },

    icon: {
      color: appearanceTokens.color,
    },
  });
}
```

### packages/checkbox/src/components/index.ts

```tsx
export { Checkbox } from "./checkbox";
```

### packages/checkbox/src/index.ts

```tsx
export * from "./components";
export * from "./types";
```

### packages/checkbox/src/types/checkbox.types.ts

```tsx
import type { PressableCoreProps } from "@impulse-ui-native/primitives";
import type {
  ComponentSize,
  ComponentTone,
  SelectionVariant,
} from "@impulse-ui-native/theme";

export type CheckboxState = boolean | "indeterminate";

export interface CheckboxProps extends Omit<
  PressableCoreProps,
  "children" | "loading"
> {
  checked?: CheckboxState;
  defaultChecked?: CheckboxState;
  onCheckedChange?: (checked: CheckboxState) => void;
  size?: ComponentSize;
  variant?: SelectionVariant;
  tone?: ComponentTone;
}

export interface CheckboxThemeProps {
  checked: CheckboxState;
  disabled?: boolean;
  size: ComponentSize;
  variant: SelectionVariant;
  tone: ComponentTone;
}
```

### packages/checkbox/src/types/index.ts

```tsx
export * from "./checkbox.types";
```
