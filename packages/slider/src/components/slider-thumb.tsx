import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { Typography, View } from "@impulse-ui-native/primitives";
import {
  getControlStateTokens,
  useThemedStyles,
} from "@impulse-ui-native/theme";

import type { SliderThumbProps } from "../types/slider-internal.types";

export const SliderThumbControl = memo(function SliderThumbControl({
  disabled,
  positionStyle,
  showValueBubble,
  size,
  valueLabel,
  variant,
}: SliderThumbProps) {
  const styles = useThemedStyles(themedStyles, { disabled, size, variant }, [
    disabled,
    size,
    variant,
  ]);

  const thumbStyles = useMemo(
    () => [styles.container, positionStyle],
    [positionStyle, styles.container],
  );

  return (
    <View pointerEvents="none" style={thumbStyles}>
      {showValueBubble ? (
        <View pointerEvents="none" style={styles.valueBubble}>
          <Typography.Caption style={styles.valueBubbleText}>
            {valueLabel}
          </Typography.Caption>
        </View>
      ) : null}

      <View pointerEvents="none" shadow="sm" style={styles.thumb}>
        {variant !== "outlined" ? <View style={styles.thumbHighlight} /> : null}
      </View>
    </View>
  );
});

interface SliderThumbThemeProps {
  disabled: boolean;
  size: SliderThumbProps["size"];
  variant: SliderThumbProps["variant"];
}

function themedStyles(theme: AppTheme, props: SliderThumbThemeProps) {
  const { disabled, size, variant } = props;
  const tokens = theme.components.slider;
  const sizeTokens = tokens.sizes[size];
  const appearanceTokens = getControlStateTokens(tokens.variants[variant], {
    disabled,
  });
  const thumbOuterSize = sizeTokens.thumbSize;

  return StyleSheet.create({
    container: {
      position: "absolute",
      bottom: 0,
      alignItems: "center",
      justifyContent: "center",
      width: thumbOuterSize,
      height: thumbOuterSize,
      marginStart: -thumbOuterSize / 2,
      borderRadius: tokens.thumbBorderRadius,
    },
    thumb: {
      alignItems: "center",
      justifyContent: "center",
      width: sizeTokens.thumbSize,
      height: sizeTokens.thumbSize,
      borderWidth: appearanceTokens.thumbBorderWidth,
      borderRadius: tokens.thumbBorderRadius,
      borderColor: appearanceTokens.thumbBorderColor,
      backgroundColor: appearanceTokens.thumbBackgroundColor,
    },
    thumbHighlight: {
      width: 4,
      height: 4,
      borderRadius: tokens.thumbBorderRadius,
      backgroundColor: appearanceTokens.thumbHighlightColor,
    },
    valueBubble: {
      position: "absolute",
      bottom: thumbOuterSize + tokens.valueBubbleGap,
      minWidth: 40,
      alignItems: "center",
      paddingHorizontal: tokens.valueBubblePaddingHorizontal,
      paddingVertical: tokens.valueBubblePaddingVertical,
      borderWidth: tokens.valueBubbleBorderWidth,
      borderRadius: tokens.valueBubbleBorderRadius,
      borderColor: appearanceTokens.valueBubbleBorderColor,
      backgroundColor: appearanceTokens.valueBubbleBackgroundColor,
    },
    valueBubbleText: {
      color: appearanceTokens.valueBubbleColor,
    },
  });
}
