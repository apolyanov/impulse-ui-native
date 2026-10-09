import { memo, useEffect, useMemo } from "react";
import { BackHandler, Pressable, StyleSheet } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import type { AppTheme } from "@impulse-ui-native/theme";
import { useComponentsTokens, useThemedStyles } from "@impulse-ui-native/theme";

import type { ModalRootProps } from "../types";
import type { ModalRootThemeProps } from "../types/modal-theme.types";
import { useModalContext } from "../hooks/use-modal-context.hook";
import { ModalSurface } from "./surface";

export const ModalRoot = memo(function ModalRoot({
  children,
  ...props
}: ModalRootProps) {
  const { mounted, interactive, progress, close, layer } = useModalContext();
  const insets = useSafeAreaInsets();
  const tokens = useComponentsTokens().modal;
  const styles = useThemedStyles(themedStyles, { insets, layer }, [
    insets,
    layer,
  ]);

  const overlayStyle = useAnimatedStyle(() => ({ opacity: progress.value }));
  const surfaceStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: tokens.closedScale + (1 - tokens.closedScale) * progress.value },
    ],
  }));

  const containerStyle = useMemo(
    () => [styles.container, overlayStyle],
    [styles.container, overlayStyle],
  );
  const surfaceContainerStyle = useMemo(
    () => [styles.surfaceContainer, surfaceStyle],
    [styles.surfaceContainer, surfaceStyle],
  );

  useEffect(() => {
    if (!mounted) {
      return;
    }

    const subscription = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        close();

        return true;
      },
    );

    return () => subscription.remove();
  }, [mounted, close]);

  return mounted ? (
    <Animated.View style={containerStyle}>
      <Pressable
        style={styles.backdrop}
        onPress={close}
        disabled={!interactive}
      />
      <Animated.View
        style={surfaceContainerStyle}
        pointerEvents={interactive ? "box-none" : "none"}
      >
        <ModalSurface {...props}>{children}</ModalSurface>
      </Animated.View>
    </Animated.View>
  ) : null;
});

function themedStyles(theme: AppTheme, { insets, layer }: ModalRootThemeProps) {
  const tokens = theme.components.modal;

  return StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFill,
      zIndex: tokens.zIndexBase + layer,
      alignItems: "center",
      justifyContent: "center",
      paddingTop: insets.top + tokens.viewportPadding,
      paddingRight: insets.right + tokens.viewportPadding,
      paddingBottom: insets.bottom + tokens.viewportPadding,
      paddingLeft: insets.left + tokens.viewportPadding,
    },
    backdrop: {
      ...StyleSheet.absoluteFill,
      backgroundColor: tokens.overlayColor,
      opacity: tokens.overlayVisibleOpacity,
    },
    surfaceContainer: {
      width: "100%",
      alignItems: "center",
    },
  });
}
