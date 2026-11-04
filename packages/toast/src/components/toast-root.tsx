import { memo, useEffect, useMemo } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import type { AppTheme } from "@impulse-ui-native/theme";
import { OverlayOrder, useOverlayLayer } from "@impulse-ui-native/overlay";
import { useComponentsTokens, useThemedStyles } from "@impulse-ui-native/theme";

import type { ToastRootProps } from "../types";
import { DefaultDuration } from "../constants/toast.constants";
import { ToastContext } from "../contexts/toast.context";
import { useToastLifecycle } from "../hooks/use-toast-lifecycle.hook";

export const ToastRoot = memo(function ToastRoot(props: ToastRootProps) {
  const {
    id,
    children,
    placement = "bottom",
    tone = "success",
    duration = DefaultDuration,
    layer = 0,
  } = props;

  const insets = useSafeAreaInsets();

  const tokens = useComponentsTokens().toast;

  const lifecycle = useToastLifecycle(props, duration);
  const toastLayer = useOverlayLayer(id, undefined, OverlayOrder.NewestFirst);
  const styles = useThemedStyles(themedStyles);
  const { progress } = lifecycle;
  const edgeOffset = tokens.edgeOffset;
  const stackDepth = Math.min(
    Math.max(0, toastLayer),
    Math.max(0, tokens.stackLimit - 1),
  );
  const animatedDepth = useSharedValue(stackDepth);
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: Math.max(0, Math.min(1, progress.value)),
    transform: [
      {
        translateY:
          (1 - progress.value) *
            (placement === "top" ? -edgeOffset : edgeOffset) +
          animatedDepth.value * tokens.gap,
      },
      { scale: Math.max(0, 1 - animatedDepth.value * tokens.stackScaleStep) },
    ],
  }));

  const context = useMemo(
    () => ({
      tone,
      interactive: lifecycle.interactive,
      close: lifecycle.close,
    }),
    [tone, lifecycle.interactive, lifecycle.close],
  );
  const containerStyle = useMemo(
    () => [
      styles.container,
      {
        left: insets.left + tokens.edgeOffset,
        right: insets.right + tokens.edgeOffset,
        [placement]:
          insets[placement] +
          (placement === "top" ? tokens.topOffset : tokens.edgeOffset),
        transformOrigin: placement === "top" ? "center top" : "center bottom",
        zIndex: tokens.zIndexBase + layer,
      },
      animatedStyle,
    ],
    [styles.container, insets, tokens, placement, layer, animatedStyle],
  );

  useEffect(() => {
    animatedDepth.value = withSpring(stackDepth, {
      duration: tokens.stackDuration,
      dampingRatio: 1,
    });
  }, [animatedDepth, stackDepth, tokens.stackDuration]);

  useEffect(() => () => cancelAnimation(animatedDepth), [animatedDepth]);

  if (!lifecycle.mounted) {
    return null;
  }

  return (
    <ToastContext.Provider value={context}>
      <Animated.View
        pointerEvents={lifecycle.interactive ? "auto" : "none"}
        style={containerStyle}
      >
        {children}
      </Animated.View>
    </ToastContext.Provider>
  );
});

function themedStyles(theme: AppTheme) {
  const tokens = theme.components.toast;

  return StyleSheet.create({
    container: {
      position: "absolute",
      flexDirection: "row",
      alignItems: "center",
      gap: tokens.gap,
      padding: tokens.padding,
      borderRadius: tokens.borderRadius,
      borderWidth: tokens.borderWidth,
      borderColor: tokens.borderColor,
      backgroundColor: tokens.backgroundColor,
    },
  });
}
