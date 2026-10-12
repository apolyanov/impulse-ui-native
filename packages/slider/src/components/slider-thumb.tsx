import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

import type { AppTheme } from "@impulse-ui-native/theme";
import { Typography, View } from "@impulse-ui-native/primitives";
import {
  getControlStateTokens,
  useThemedStyles,
} from "@impulse-ui-native/theme";

import type { SliderThumbProps } from "../types/slider-internal.types";
import type { SliderThumbThemeProps } from "../types/slider-theme.types";

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
    <Animated.View pointerEvents="none" style={thumbStyles}>
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
    </Animated.View>
  );
});

function themedStyles(theme: AppTheme, props: SliderThumbThemeProps) {
  const { disabled, size, variant } = props;
  const tokens = theme.components.slider;
  const sizeTokens = tokens.sizes[size];
  const appearanceTokens = getControlStateTokens(tokens.variants[variant], {
    disabled,
  });
  const thumbOuterSize = sizeTokens.thumbSize;
  const interactionHeight = Math.max(
    thumbOuterSize,
    tokens.interactionMinHeight,
  );

  return StyleSheet.create({
    container: {
      position: "absolute",
      left: 0,
      bottom: (interactionHeight - thumbOuterSize) / 2,
      alignItems: "center",
      justifyContent: "center",
      width: thumbOuterSize,
      height: thumbOuterSize,
      marginLeft: -thumbOuterSize / 2,
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
      width: tokens.thumbHighlightSize,
      height: tokens.thumbHighlightSize,
      borderRadius: tokens.thumbBorderRadius,
      backgroundColor: appearanceTokens.thumbHighlightColor,
    },
    valueBubble: {
      position: "absolute",
      bottom: thumbOuterSize + tokens.valueBubbleGap,
      minWidth: tokens.valueBubbleMinWidth,
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
