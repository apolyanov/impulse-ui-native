import { memo, useEffect, useMemo } from "react";
import { StyleSheet } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";

import type { AppTheme } from "@impulse-ui-native/theme";
import { Pressable, View } from "@impulse-ui-native/primitives";
import {
  getShadowStyle,
  useStyleProps,
  useTheme,
  useThemedStyles,
} from "@impulse-ui-native/theme";

import type { PopoverSurfaceViewProps } from "../types/popover-surface.types";
import type { PopoverSurfaceStyleProps } from "../types/popover.types";
import { usePopoverSurface } from "../hooks/use-popover-surface.hook";

export const PopoverSurfaceView = memo(function PopoverSurfaceView({
  progress,
  interactive,
  onReady,
  children,
  style,
  onLayout,
  shadow,
  shadowPosition,
  ...props
}: PopoverSurfaceViewProps) {
  const theme = useTheme();
  const { hostRef, styleProps, close, handleLayout } =
    usePopoverSurface(onLayout);

  const extractedStyleProps = useStyleProps(props);
  const styles = useThemedStyles(themedStyles, styleProps, [styleProps]);

  const tokens = theme.components.popover;
  const shadowStyle = useMemo(
    () => getShadowStyle(shadow, shadowPosition, theme.colors, theme.shadows),
    [shadow, shadowPosition, theme.colors, theme.shadows],
  );
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: styleProps.ready ? Math.max(0, Math.min(1, progress.value)) : 0,
    transform: [
      { scale: tokens.closedScale + (1 - tokens.closedScale) * progress.value },
    ],
  }));

  const panelStyle = useMemo(
    () => [
      styles.panel,
      shadowStyle,
      extractedStyleProps,
      style,
      styles.position,
      animatedStyle,
    ],
    [
      styles.panel,
      shadowStyle,
      extractedStyleProps,
      style,
      styles.position,
      animatedStyle,
    ],
  );

  useEffect(() => {
    if (styleProps.ready) onReady();
  }, [styleProps.ready, onReady]);

  return (
    <View
      ref={hostRef}
      collapsable={false}
      pointerEvents="box-none"
      style={styles.host}
    >
      <Pressable
        style={StyleSheet.absoluteFill}
        onPress={close}
        disabled={!interactive}
      />
      <Animated.View
        {...props}
        pointerEvents={interactive ? "auto" : "none"}
        style={panelStyle}
        onLayout={handleLayout}
      >
        {children}
      </Animated.View>
    </View>
  );
});

function themedStyles(
  theme: AppTheme,
  { bounds, host, position }: PopoverSurfaceStyleProps,
) {
  const tokens = theme.components.popover;
  const placement = position?.placement;
  const transformOrigin =
    placement === "top"
      ? "center bottom"
      : placement === "left"
        ? "right center"
        : placement === "right"
          ? "left center"
          : "center top";

  return StyleSheet.create({
    host: { ...StyleSheet.absoluteFill, zIndex: tokens.zIndexBase },

    position: {
      position: "absolute",
      left: (position?.x ?? bounds.x) - (host?.x ?? 0),
      top: (position?.y ?? bounds.y) - (host?.y ?? 0),
      maxWidth: Math.min(tokens.maxWidth, bounds.width),
      transformOrigin,
    },

    panel: {
      width: tokens.maxWidth,
      backgroundColor: tokens.backgroundColor,
      borderColor: tokens.borderColor,
      borderWidth: tokens.borderWidth,
      borderRadius: tokens.borderRadius,
      paddingHorizontal: tokens.paddingHorizontal,
      paddingVertical: tokens.paddingVertical,
      gap: tokens.gap,
    },
  });
}
