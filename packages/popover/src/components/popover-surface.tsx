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
        shadow="sm"
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
  { surface, bounds, host, position, ready }: PopoverSurfaceStyleProps,
) {
  const tokens = theme.components.popover;
  const appearance = tokens.surfaces[surface];

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
      width: surface === "elevated" ? tokens.maxWidth : undefined,
      backgroundColor: appearance.value,
      borderColor: appearance.borderColor,
      borderWidth: appearance.borderWidth,
      borderRadius: appearance.borderRadius,
      paddingHorizontal: appearance.paddingHorizontal,
      paddingVertical: appearance.paddingVertical,
      gap: tokens.gap,
    },
  });
}
