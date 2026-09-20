import type { AccessibilityState } from "react-native";
import { memo, useMemo } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { SpinnerProps } from "../../types";

export const Spinner = memo(function Spinner({
  accessibilityRole = "progressbar",
  accessibilityState,
  accessible = true,
  animating = true,
  color,
  hidesWhenStopped,
  size = "medium",
  style,
  tone = "primary",
  ...props
}: SpinnerProps) {
  const tokens = useComponentsTokens().spinner;
  const resolvedSize = tokens.sizes[size];

  const resolvedAccessibilityState = useMemo<AccessibilityState>(
    () => ({
      ...accessibilityState,
      busy: animating,
    }),
    [accessibilityState, animating],
  );

  const containerStyle = useMemo(
    () => [
      styles.container,
      {
        width: resolvedSize,
        height: resolvedSize,
      },
      style,
    ],
    [resolvedSize, style],
  );

  const indicatorStyle = useMemo(
    () => ({
      transform: [{ scale: resolvedSize / tokens.baseSize }],
    }),
    [resolvedSize, tokens.baseSize],
  );

  return (
    <View
      {...props}
      accessibilityRole={accessibilityRole}
      accessibilityState={resolvedAccessibilityState}
      accessible={accessible}
      style={containerStyle}
    >
      <ActivityIndicator
        accessible={false}
        animating={animating}
        color={color ?? tokens.colors[tone]}
        hidesWhenStopped={hidesWhenStopped}
        size="small"
        style={indicatorStyle}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
