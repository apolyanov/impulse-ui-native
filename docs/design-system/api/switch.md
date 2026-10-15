# @impulse-ui-native/switch

Local package version: 9.1.1. This is a repository snapshot, not a claim about the latest published package.

## Package guide

# @impulse-ui-native/switch

Token-aware animated switch controls for React Native mobile applications.

## Installation

```sh
pnpm add @impulse-ui-native/switch react-native-reanimated react-native-worklets
```

Complete the platform setup required by Reanimated and Worklets, rebuild the native application when necessary, and render the component inside `ThemeProvider` from `@impulse-ui-native/theme`.

## Main exports

- `Switch` supports controlled and uncontrolled on/off state.
- `SwitchProps` describes the component API.

## Usage

```tsx
import { useState } from "react";

import { Switch } from "@impulse-ui-native/switch";

export function NotificationsSwitch() {
  const [checked, setChecked] = useState(false);

  return (
    <Switch
      checked={checked}
      onCheckedChange={setChecked}
      size="medium"
      variant="filled"
    />
  );
}
```

Use `defaultChecked` for uncontrolled state. The thumb position and track colors animate when the state changes.

Set `loading` while an update is pending. Loading switches show an activity indicator and block further presses until loading ends. Disabled switches also block interaction.


## Public export and source reference

The following modules are reachable through relative re-exports from this package's root. Their imports refer to the original package layout. This appendix preserves exact prop contracts, composition namespaces, defaults, hooks, and behavior for an implementing agent; it is reference text, not standalone executable code. An exported module may also contain private declarations. Internal modules that are only imported are not copied. React Native and dependency types remain defined by those dependencies.

### packages/switch/src/components/index.ts

```tsx
export { Switch } from "./switch";
```

### packages/switch/src/components/switch.tsx

```tsx
import type {
  GestureResponderEvent,
  PressableStateCallbackType,
  StyleProp,
  ViewStyle,
} from "react-native";
import { memo, useCallback, useMemo } from "react";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

import { useControllableState } from "@impulse-ui-native/core";
import { Pressable, Spinner } from "@impulse-ui-native/primitives";
import { useThemedStyles } from "@impulse-ui-native/theme";

import type { SwitchProps } from "../types";
import { useSwitchAnimation, useSwitchTokens } from "../hooks";
import { switchStyles } from "./switch.styles";

export const Switch = memo(function Switch({
  checked: checkedProp,
  defaultChecked = false,
  disabled,
  hitSlop,
  loading = false,
  onCheckedChange,
  onPress,
  size = "medium",
  style,
  variant = "filled",
  ...props
}: SwitchProps) {
  const [checked, setChecked] = useControllableState<boolean>({
    prop: checkedProp,
    defaultProp: defaultChecked,
    onChange: onCheckedChange,
  });

  const interactionDisabled = disabled === true || loading;

  const {
    animationDuration,
    borderWidth,
    colors,
    loadingIndicatorColor,
    sizeTokens,
  } = useSwitchTokens({ disabled: interactionDisabled, size, variant });
  const styles = useThemedStyles(switchStyles, { size }, [size]);
  const { thumbStyle, trackStyle } = useSwitchAnimation({
    animationDuration,
    borderWidth,
    checked,
    colors,
    sizeTokens,
  });

  const switchStyle = useCallback(
    (state: PressableStateCallbackType): StyleProp<ViewStyle> =>
      StyleSheet.flatten([
        styles.root,
        typeof style === "function" ? style(state) : style,
      ]),
    [style, styles.root],
  );

  const handlePress = useCallback(
    (event: GestureResponderEvent) => {
      setChecked((current) => !current);
      onPress?.(event);
    },
    [onPress, setChecked],
  );

  const trackAnimatedStyle = useMemo(
    () => [styles.track, trackStyle],
    [styles.track, trackStyle],
  );

  const thumbAnimatedStyle = useMemo(
    () => [styles.thumb, thumbStyle],
    [styles.thumb, thumbStyle],
  );

  return (
    <Pressable
      {...props}
      disabled={interactionDisabled}
      hitSlop={hitSlop ?? sizeTokens.hitSlop}
      onPress={handlePress}
      style={switchStyle}
    >
      <Animated.View pointerEvents="none" style={trackAnimatedStyle}>
        <Animated.View style={thumbAnimatedStyle}>
          {loading ? (
            <Spinner
              color={loadingIndicatorColor}
              size="medium"
              style={styles.loadingIndicator}
            />
          ) : null}
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
});
```

### packages/switch/src/index.ts

```tsx
export * from "./components";
export * from "./types";
```

### packages/switch/src/types/index.ts

```tsx
export * from "./switch.types";
```

### packages/switch/src/types/switch.types.ts

```tsx
import type { PressableCoreProps } from "@impulse-ui-native/primitives";
import type { ComponentSize, SelectionVariant } from "@impulse-ui-native/theme";

export interface SwitchProps extends Omit<PressableCoreProps, "children"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  size?: ComponentSize;
  variant?: SelectionVariant;
}

export interface SwitchThemeProps {
  size: ComponentSize;
}
```
