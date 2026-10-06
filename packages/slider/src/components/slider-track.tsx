import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme, SliderTrackLayout } from "@impulse-ui-native/theme";
import { View } from "@impulse-ui-native/primitives";
import {
  getSliderTrackTokens,
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
  const layout: SliderTrackLayout = showValueBubble ? "valueBubble" : "default";

  const styles = useThemedStyles(
    themedStyles,
    {
      disabled,
      hasEndMark,
      hasStartMark,
      layout,
      size,
      variant,
    },
    [disabled, hasEndMark, hasStartMark, layout, size, variant],
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
  layout: SliderTrackLayout;
  size: SliderTrackProps["size"];
  variant: SliderTrackProps["variant"];
}

function themedStyles(theme: AppTheme, props: SliderTrackThemeProps) {
  const { disabled, hasEndMark, hasStartMark, layout, size, variant } = props;
  const tokens = getSliderTrackTokens(theme.components.slider, {
    disabled,
    layout,
    size,
    variant,
  });
  const thumbOuterSize = tokens.thumbSize;

  return StyleSheet.create({
    interactionArea: {
      height: thumbOuterSize + tokens.reservedVerticalSpace,
      justifyContent: "flex-end",
      overflow: "visible",
    },
    track: {
      position: "absolute",
      bottom: (thumbOuterSize - tokens.trackHeight) / 2,
      width: "100%",
      height: tokens.trackHeight,
      borderRadius: tokens.trackBorderRadius,
      borderTopStartRadius: hasStartMark ? 0 : tokens.trackBorderRadius,
      borderBottomStartRadius: hasStartMark ? 0 : tokens.trackBorderRadius,
      borderTopEndRadius: hasEndMark ? 0 : tokens.trackBorderRadius,
      borderBottomEndRadius: hasEndMark ? 0 : tokens.trackBorderRadius,
      backgroundColor: tokens.inactiveTrackColor,
      overflow: "hidden",
    },
    activeTrack: {
      position: "absolute",
      height: "100%",
      backgroundColor: tokens.activeTrackColor,
    },
    mark: {
      position: "absolute",
      bottom: (thumbOuterSize - tokens.markSize) / 2,
      width: tokens.markSize,
      height: tokens.markSize,
      marginStart: -tokens.markSize / 2,
      borderRadius: tokens.trackBorderRadius,
      backgroundColor: tokens.markColor,
    },
    activeMark: {
      backgroundColor: tokens.activeMarkColor,
    },
  });
}
