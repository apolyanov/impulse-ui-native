import {
  Fragment,
  memo,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  LayoutChangeEvent,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import {
  Edge,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { scheduleOnRN } from "react-native-worklets";

import { View } from "@impulse-ui-native/primitives";
import { AppTheme, useTheme } from "@impulse-ui-native/theme";

import { FlyoutHandleHeight } from "../constants";
import { FlyoutProps } from "../types";
import { FlyoutHandle } from "./flyout-handle";
import { FlyoutTitle } from "./flyout-title";

const EnterAnimationConfig = {
  damping: 50,
  stiffness: 300,
  mass: 1,
  overshootClamping: true,
};

const ExitAnimationConfig = {
  duration: 150,
  easing: Easing.in(Easing.quad),
};

export const Flyout = memo(function Flyout(
  props: PropsWithChildren<FlyoutProps>,
) {
  const {
    id,
    children,
    placement = "bottom",
    layer = 0,
    title,
    open,
    topOffset,
    bottomOffset,
    onCloseFinished,
    onClose,
    onOpen,
    onOpenFinished,
  } = props;

  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const windowDimensions = useWindowDimensions();

  const flyoutTokens = theme.components.flyout;

  const placementOffset = placement === "top" ? topOffset : bottomOffset;
  const screenHeight = windowDimensions.height;
  const maxHeight = screenHeight * flyoutTokens.maxHeightRatio;
  const zIndex = flyoutTokens.zIndexBase + layer;

  const [mounted, setMounted] = useState(open);
  const [measuredHeight, setMeasuredHeight] = useState<number | null>(null);
  const [hasMeasured, setHasMeasured] = useState(false);
  const [isTouchable, setIsTouchable] = useState(false);

  const didOpen = useRef(false);
  const isClosing = useRef(false);

  const translateY = useSharedValue(
    placement === "top" ? -screenHeight : screenHeight,
  );
  const opacity = useSharedValue(0);

  const onLayout = useCallback(
    (event: LayoutChangeEvent) => {
      if (measuredHeight !== null) {
        return;
      }

      const rawHeight = event.nativeEvent.layout.height;
      const clampedHeight = rawHeight + insets[placement] + FlyoutHandleHeight;

      translateY.value = placement === "top" ? -clampedHeight : clampedHeight;

      setMeasuredHeight(clampedHeight);
      setHasMeasured(true);
    },
    [insets, measuredHeight, placement, translateY],
  );

  const animateOut = useCallback(() => {
    if (measuredHeight === null || isClosing.current) {
      return;
    }

    isClosing.current = true;
    setIsTouchable(false);
    onClose?.(id);

    const target = placement === "top" ? -measuredHeight : measuredHeight;

    translateY.value = withTiming(target, ExitAnimationConfig, (finished) => {
      if (finished) {
        if (onCloseFinished) {
          scheduleOnRN(onCloseFinished, id);
        }

        scheduleOnRN(setMounted, false);
        scheduleOnRN(setMeasuredHeight, null);
        scheduleOnRN(setHasMeasured, false);
      }
    });

    opacity.value = withTiming(0, ExitAnimationConfig);
    didOpen.current = false;
  }, [
    id,
    measuredHeight,
    onClose,
    onCloseFinished,
    opacity,
    placement,
    translateY,
  ]);

  const dragGesture = useMemo(
    () =>
      Gesture.Pan()
        .enabled(hasMeasured)
        .onUpdate((event) => {
          if (placement === "bottom") {
            translateY.value = Math.max(0, event.translationY);
            return;
          }

          translateY.value = Math.min(0, event.translationY);
        })
        .onEnd((event) => {
          if (measuredHeight === null) {
            return;
          }

          let shouldClose = false;

          if (placement === "bottom") {
            shouldClose =
              event.translationY > measuredHeight * 0.5 ||
              event.velocityY > 1500;
          }

          if (placement === "top") {
            shouldClose =
              event.translationY < -measuredHeight * 0.5 ||
              event.velocityY < -1500;
          }

          if (shouldClose) {
            scheduleOnRN(animateOut);
            return;
          }

          translateY.value = withSpring(0, EnterAnimationConfig);
          opacity.value = withSpring(
            flyoutTokens.overlayVisibleOpacity,
            EnterAnimationConfig,
          );
        }),
    [
      animateOut,
      flyoutTokens.overlayVisibleOpacity,
      hasMeasured,
      measuredHeight,
      opacity,
      placement,
      translateY,
    ],
  );

  const animatedStyle = useAnimatedStyle(() => {
    const offset =
      placement === "bottom" ? -(placementOffset ?? 0) : (placementOffset ?? 0);

    return {
      transform: [{ translateY: translateY.value + offset }],
      zIndex,
    };
  });

  const overlayStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    zIndex,
    backgroundColor: flyoutTokens.overlayColor,
  }));

  const edges = useMemo<Edge[]>(() => {
    return [placement, "left", "right"];
  }, [placement]);

  const styles = useMemo(() => {
    return themedStyles(theme, placement, maxHeight);
  }, [theme, placement, maxHeight]);

  useEffect(() => {
    if (!open) {
      return;
    }

    setMounted(true);
    setIsTouchable(false);
    setMeasuredHeight(null);
    setHasMeasured(false);

    isClosing.current = false;
    didOpen.current = false;

    translateY.value = placement === "top" ? -screenHeight : screenHeight;
    opacity.value = 0;
  }, [open, opacity, placement, screenHeight, translateY]);

  useEffect(() => {
    if (!open || measuredHeight === null || !hasMeasured || didOpen.current) {
      return;
    }

    setIsTouchable(true);
    onOpen?.(id);

    translateY.value = withSpring(0, EnterAnimationConfig, (finished) => {
      if (finished && onOpenFinished) {
        scheduleOnRN(onOpenFinished, id);
      }
    });

    opacity.value = withSpring(
      flyoutTokens.overlayVisibleOpacity,
      EnterAnimationConfig,
    );

    didOpen.current = true;
  }, [
    flyoutTokens.overlayVisibleOpacity,
    hasMeasured,
    id,
    measuredHeight,
    onOpen,
    onOpenFinished,
    opacity,
    open,
    translateY,
  ]);

  useEffect(() => {
    if (!open && didOpen.current) {
      animateOut();
    }
  }, [animateOut, open]);

  if (!mounted) {
    return null;
  }

  return (
    <Fragment>
      <Animated.View
        pointerEvents={isTouchable ? "auto" : "none"}
        style={[StyleSheet.absoluteFill, overlayStyle]}
      >
        <Pressable onPress={animateOut} style={StyleSheet.absoluteFill} />
      </Animated.View>

      <GestureDetector gesture={dragGesture}>
        <Animated.View
          onLayout={onLayout}
          style={[
            styles.container,
            !hasMeasured && styles.hidden,
            animatedStyle,
          ]}
        >
          <SafeAreaView edges={edges}>
            {placement === "bottom" ? (
              <FlyoutHandle placement={placement} />
            ) : null}

            {title ? <FlyoutTitle title={title} /> : null}

            <View style={styles.content}>{children}</View>

            {placement === "top" ? (
              <FlyoutHandle placement={placement} />
            ) : null}
          </SafeAreaView>
        </Animated.View>
      </GestureDetector>
    </Fragment>
  );
});

function themedStyles(
  theme: AppTheme,
  placement: "top" | "bottom",
  maxHeight: number,
) {
  const flyoutTokens = theme.components.flyout;

  return StyleSheet.create({
    container: {
      position: "absolute",
      [placement]: 0,
      left: 0,
      right: 0,
      backgroundColor: flyoutTokens.backgroundColor,
      borderTopLeftRadius:
        placement === "bottom" ? flyoutTokens.borderRadius : 0,
      borderTopRightRadius:
        placement === "bottom" ? flyoutTokens.borderRadius : 0,
      borderBottomLeftRadius:
        placement === "top" ? flyoutTokens.borderRadius : 0,
      borderBottomRightRadius:
        placement === "top" ? flyoutTokens.borderRadius : 0,
    },
    content: {
      paddingHorizontal: flyoutTokens.contentPaddingHorizontal,
      maxHeight,
    },
    hidden: {
      opacity: flyoutTokens.hiddenOpacity,
    },
  });
}
