import type {
  AccessibilityState,
  GestureResponderEvent,
  PressableStateCallbackType,
  StyleProp,
  ViewStyle,
} from "react-native";
import { memo, useCallback, useMemo } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

import { useControllableState } from "@impulse-ui-native/core";
import { Pressable } from "@impulse-ui-native/primitives";
import { useThemedStyles } from "@impulse-ui-native/theme";

import type { SwitchProps } from "../types";
import { useSwitchAnimation, useSwitchTokens } from "../hooks";
import { switchStyles } from "./switch.styles";

export const Switch = memo(function Switch({
  accessibilityState,
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

  const resolvedAccessibilityState = useMemo<AccessibilityState>(
    () => ({
      ...accessibilityState,
      busy: loading,
      checked,
      disabled: interactionDisabled,
    }),
    [accessibilityState, checked, interactionDisabled, loading],
  );

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

  return (
    <Pressable
      {...props}
      accessibilityRole="switch"
      accessibilityState={resolvedAccessibilityState}
      disabled={interactionDisabled}
      hitSlop={hitSlop ?? sizeTokens.hitSlop}
      onPress={handlePress}
      style={switchStyle}
    >
      <Animated.View pointerEvents="none" style={[styles.track, trackStyle]}>
        <Animated.View style={[styles.thumb, thumbStyle]}>
          {loading ? (
            <ActivityIndicator
              color={loadingIndicatorColor}
              size="small"
              style={styles.loadingIndicator}
            />
          ) : null}
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
});
