import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { Typography, View } from "@impulse-ui-native/primitives";
import { useThemedStyles } from "@impulse-ui-native/theme";

import type { SliderLabelsProps } from "../types/slider-internal.types";

export const SliderLabels = memo(function SliderLabels({
  disabled,
  marks,
  maxLabel,
  minLabel,
  showMarkLabels,
  showMinMax,
  variant,
}: SliderLabelsProps) {
  const styles = useThemedStyles(themedStyles, { disabled, variant }, [
    disabled,
    variant,
  ]);
  const markLabelStyles = useMemo(
    () => marks.map((mark) => [styles.markLabel, mark.position]),
    [marks, styles.markLabel],
  );

  if (!showMinMax && (!showMarkLabels || marks.length === 0)) return null;

  return (
    <>
      {showMinMax ? (
        <View pointerEvents="none" style={styles.labelRow}>
          <Typography.Caption style={styles.label}>
            {minLabel}
          </Typography.Caption>
          <Typography.Caption style={styles.label}>
            {maxLabel}
          </Typography.Caption>
        </View>
      ) : null}

      {showMarkLabels && marks.length > 0 ? (
        <View pointerEvents="none" style={styles.markLabelRow}>
          {marks.map((mark, index) => (
            <Typography.Caption key={mark.value} style={markLabelStyles[index]}>
              {mark.label}
            </Typography.Caption>
          ))}
        </View>
      ) : null}
    </>
  );
});

interface SliderLabelsThemeProps {
  disabled: boolean;
  variant: SliderLabelsProps["variant"];
}

function themedStyles(theme: AppTheme, props: SliderLabelsThemeProps) {
  const tokens = theme.components.slider;
  const color = props.disabled
    ? tokens.disabledTextColor
    : tokens.variants[props.variant].labelColor;

  return StyleSheet.create({
    labelRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: tokens.labelGap,
    },
    label: {
      color,
    },
    markLabelRow: {
      position: "relative",
      height: theme.lineHeight.xs,
      marginTop: tokens.labelGap,
    },
    markLabel: {
      position: "absolute",
      width: 48,
      marginStart: -24,
      textAlign: "center",
      color,
    },
  });
}
