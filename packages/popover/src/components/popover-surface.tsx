import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { Pressable, View } from "@impulse-ui-native/primitives";
import { useStyleProps, useThemedStyles } from "@impulse-ui-native/theme";

import type { PopoverContentProps } from "../types";
import type { PopoverSurfaceStyleProps } from "../types/popover.types";
import { usePopoverSurface } from "../hooks/use-popover-surface.hook";

export const PopoverSurfaceView = memo(function PopoverSurfaceView({
  children,
  style,
  onLayout,
  ...props
}: PopoverContentProps) {
  const { hostRef, styleProps, close, handleLayout } =
    usePopoverSurface(onLayout);

  const extractedStyleProps = useStyleProps(props);
  const styles = useThemedStyles(themedStyles, styleProps, [styleProps]);

  const panelStyle = useMemo(
    () => [styles.panel, extractedStyleProps, style, styles.position],
    [styles.panel, extractedStyleProps, style, styles.position],
  );

  return (
    <View
      ref={hostRef}
      collapsable={false}
      pointerEvents="box-none"
      style={styles.host}
    >
      <Pressable style={StyleSheet.absoluteFill} onPress={close} />
      <View
        {...props}
        pointerEvents={styleProps.ready ? "auto" : "none"}
        style={panelStyle}
        onLayout={handleLayout}
      >
        {children}
      </View>
    </View>
  );
});

function themedStyles(
  theme: AppTheme,
  { bounds, host, position, ready }: PopoverSurfaceStyleProps,
) {
  const tokens = theme.components.popover;

  return StyleSheet.create({
    host: { ...StyleSheet.absoluteFill, zIndex: tokens.zIndexBase },

    position: {
      position: "absolute",
      left: (position?.x ?? bounds.x) - (host?.x ?? 0),
      top: (position?.y ?? bounds.y) - (host?.y ?? 0),
      maxWidth: Math.min(tokens.maxWidth, bounds.width),
      opacity: ready ? 1 : 0,
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
