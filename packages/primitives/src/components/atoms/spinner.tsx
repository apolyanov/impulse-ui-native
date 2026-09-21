import type { AccessibilityState } from "react-native";
import { memo, useMemo } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { useThemedStyles } from "@impulse-ui-native/theme";

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
  const styles = useThemedStyles(themedStyles, { color, size, tone }, [
    color,
    size,
    tone,
  ]);

  const resolvedAccessibilityState = useMemo<AccessibilityState>(
    () => ({
      ...accessibilityState,
      busy: animating,
    }),
    [accessibilityState, animating],
  );

  const containerStyle = useMemo(
    () => [styles.container, style],
    [style, styles.container],
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
        color={styles.indicator.color}
        hidesWhenStopped={hidesWhenStopped}
        size="small"
        style={styles.indicator}
      />
    </View>
  );
});

interface SpinnerThemeProps {
  color: SpinnerProps["color"];
  size: NonNullable<SpinnerProps["size"]>;
  tone: NonNullable<SpinnerProps["tone"]>;
}

function themedStyles(theme: AppTheme, props: SpinnerThemeProps) {
  const { color, size, tone } = props;
  const spinnerTokens = theme.components.spinner;
  const resolvedSize = spinnerTokens.sizes[size];

  return StyleSheet.create({
    container: {
      alignItems: "center",
      height: resolvedSize,
      justifyContent: "center",
      width: resolvedSize,
    },
    indicator: {
      color: color ?? spinnerTokens.colors[tone],
      transform: [{ scale: resolvedSize / spinnerTokens.baseSize }],
    },
  });
}
