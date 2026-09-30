import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { View } from "@impulse-ui-native/primitives";
import {
  getControlStateTokens,
  useThemedStyles,
} from "@impulse-ui-native/theme";

import type { SliderTrackProps } from "../types/slider-internal.types";

export const SliderTrack = memo(function SliderTrack({
  activeTrackStyle,
  children,
  disabled,
  marks,
  showValueBubble,
  size,
  trackRef,
  variant,
  ...interactionHandlers
}: SliderTrackProps) {
  const hasStartMark = marks.some((mark) => mark.endpoint === "start");
  const hasEndMark = marks.some((mark) => mark.endpoint === "end");
  const styles = useThemedStyles(
    themedStyles,
    {
      disabled,
      hasEndMark,
      hasStartMark,
      showValueBubble,
      size,
      variant,
    },
    [disabled, hasEndMark, hasStartMark, showValueBubble, size, variant],
  );
  const activeTrackStyles = useMemo(
    () => [styles.activeTrack, activeTrackStyle],
    [activeTrackStyle, styles.activeTrack],
  );
  const markStyles = useMemo(
    () =>
      marks.map((mark) => [
        styles.mark,
        mark.active ? styles.activeMark : undefined,
        mark.position,
      ]),
    [marks, styles.activeMark, styles.mark],
  );

  return (
    <View
      {...interactionHandlers}
      ref={trackRef}
      style={styles.interactionArea}
    >
      <View pointerEvents="none" style={styles.track}>
        <View style={activeTrackStyles} />
      </View>

      {marks.map((mark, index) => (
        <View key={mark.value} pointerEvents="none" style={markStyles[index]} />
      ))}

      {children}
    </View>
  );
});

interface SliderTrackThemeProps {
  disabled: boolean;
  hasEndMark: boolean;
  hasStartMark: boolean;
  showValueBubble: boolean;
  size: SliderTrackProps["size"];
  variant: SliderTrackProps["variant"];
}

function themedStyles(theme: AppTheme, props: SliderTrackThemeProps) {
  const { disabled, hasEndMark, hasStartMark, showValueBubble, size, variant } =
    props;
  const tokens = theme.components.slider;
  const sizeTokens = tokens.sizes[size];
  const appearanceTokens = getControlStateTokens(tokens.variants[variant], {
    disabled,
  });
  const thumbOuterSize = sizeTokens.thumbSize;
  const bubbleSpace = showValueBubble ? 28 + tokens.valueBubbleGap : 0;

  return StyleSheet.create({
    interactionArea: {
      height: thumbOuterSize + bubbleSpace,
      justifyContent: "flex-end",
      overflow: "visible",
    },
    track: {
      position: "absolute",
      bottom: (thumbOuterSize - sizeTokens.trackHeight) / 2,
      width: "100%",
      height: sizeTokens.trackHeight,
      borderRadius: tokens.trackBorderRadius,
      borderTopStartRadius: hasStartMark ? 0 : tokens.trackBorderRadius,
      borderBottomStartRadius: hasStartMark ? 0 : tokens.trackBorderRadius,
      borderTopEndRadius: hasEndMark ? 0 : tokens.trackBorderRadius,
      borderBottomEndRadius: hasEndMark ? 0 : tokens.trackBorderRadius,
      backgroundColor: appearanceTokens.inactiveTrackColor,
      overflow: "hidden",
    },
    activeTrack: {
      position: "absolute",
      height: "100%",
      backgroundColor: appearanceTokens.activeTrackColor,
    },
    mark: {
      position: "absolute",
      bottom: (thumbOuterSize - sizeTokens.markSize) / 2,
      width: sizeTokens.markSize,
      height: sizeTokens.markSize,
      marginStart: -sizeTokens.markSize / 2,
      borderRadius: tokens.trackBorderRadius,
      backgroundColor: appearanceTokens.markColor,
    },
    activeMark: {
      backgroundColor: appearanceTokens.activeMarkColor,
    },
  });
}
