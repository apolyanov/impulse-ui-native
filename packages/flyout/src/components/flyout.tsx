import { useEventCallback } from "@impulse-ui-native/core";
import { SafeAreaView } from "@impulse-ui-native/safe-area-view";
import { AppTheme, useColors, useTheme } from "@impulse-ui-native/theme";
import {
  Fragment,
  memo,
  PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Dimensions,
  LayoutChangeEvent,
  Platform,
  Pressable,
  StyleSheet,
} from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureStateChangeEvent,
  GestureUpdateEvent,
  PanGestureHandlerEventPayload,
} from "react-native-gesture-handler";
import Animated, {
  Easing,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Edge } from "react-native-safe-area-context";
import { scheduleOnRN } from "react-native-worklets";
import { FlyoutProps } from "../types";
import { FlyoutHandle } from "./flyout-handle";

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

const StickyHeaderIndices = [0];
const ScreenHeight = Dimensions.get("screen").height;
const MaxHeight = ScreenHeight * 0.9;

const AndroidOverScroll =
  Platform.OS === "android" ? { overScrollMode: "always" as const } : {};

export const Flyout = memo(function Flyout({
  children,
  placement = "bottom",
  ...props
}: PropsWithChildren<FlyoutProps>) {
  const colors = useColors();
  const theme = useTheme();

  const [measuredHeight, setMeasuredHeight] = useState<number | null>(null);
  const [bounceEnabled, setBounceEnabled] = useState(placement !== "bottom");

  const didOpen = useRef(false);

  const canDismiss = useSharedValue(placement === "bottom");
  const scrollY = useSharedValue(0);
  const maxScrollY = useSharedValue(0);

  const translateY = useSharedValue(
    placement === "top" ? -ScreenHeight : ScreenHeight
  );
  const opacity = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll(event) {
      scrollY.value = event.contentOffset.y;

      maxScrollY.value = Math.max(
        0,
        event.contentSize.height - event.layoutMeasurement.height
      );
    },
    onMomentumEnd(event) {
      if (placement === "bottom" && event.contentOffset.y <= 0) {
        scheduleOnRN(setBounceEnabled, false);
        canDismiss.value = true;
      }

      if (placement === "top" && scrollY.value >= maxScrollY.value - 1) {
        scheduleOnRN(setBounceEnabled, false);
        canDismiss.value = true;
      }
    },
  });

  const onLayout = useEventCallback((event: LayoutChangeEvent) => {
    if (!didOpen.current && measuredHeight === null) {
      const rawHeight = event.nativeEvent.layout.height;
      const clampedHeight = Math.min(rawHeight, MaxHeight);
      setMeasuredHeight(clampedHeight);
      translateY.value = placement === "top" ? -clampedHeight : clampedHeight;
    }
  });

  const animateOut = useEventCallback(() => {
    if (measuredHeight) {
      const target = placement === "top" ? -measuredHeight : measuredHeight;

      translateY.value = withTiming(target, ExitAnimationConfig, (finished) => {
        if (finished && props.onCloseFinished) {
          scheduleOnRN(props.onCloseFinished);
        }
      });

      opacity.value = withTiming(0, ExitAnimationConfig);

      didOpen.current = false;
    }
  });

  const onPanGestureEnd = useEventCallback(
    (event: GestureStateChangeEvent<PanGestureHandlerEventPayload>) => {
      if (!measuredHeight) return;

      let shouldClose: boolean = false;

      if (placement === "bottom") {
        shouldClose =
          event.translationY > measuredHeight * 0.5 || event.velocityY > 1500;
      }

      if (placement === "top") {
        shouldClose =
          event.translationY < -measuredHeight * 0.5 || event.velocityY < -1500;
      }

      if (shouldClose && canDismiss.value) {
        animateOut();
      } else {
        translateY.value = withSpring(0, EnterAnimationConfig);
        opacity.value = withSpring(0.4, EnterAnimationConfig);
      }
    }
  );

  const onPanGestureHandleEnd = useEventCallback(
    (event: GestureStateChangeEvent<PanGestureHandlerEventPayload>) => {
      onPanGestureEnd(event);

      if (placement === "bottom" && scrollY.value > 0) {
        canDismiss.value = false;
      }

      if (placement === "top" && scrollY.value < maxScrollY.value - 1) {
        canDismiss.value = false;
      }
    }
  );

  const onPanGestureUpdate = (
    event: GestureUpdateEvent<PanGestureHandlerEventPayload>
  ) => {
    if (placement === "bottom" && event.translationY < 0) {
      scheduleOnRN(setBounceEnabled, true);
      canDismiss.value = false;
    }

    if (placement === "top" && event.translationY > 0) {
      scheduleOnRN(setBounceEnabled, true);
      canDismiss.value = false;
    }

    if (
      (placement === "bottom" && event.translationY < 0) ||
      (placement === "top" && event.translationY > 0)
    ) {
      return;
    }

    if (canDismiss.value) {
      translateY.value = event.translationY;
    }
  };

  const onPanGestureHandleUpdate = (
    event: GestureUpdateEvent<PanGestureHandlerEventPayload>
  ) => {
    canDismiss.value = true;

    if (
      (placement === "bottom" && event.translationY < 0) ||
      (placement === "top" && event.translationY > 0)
    ) {
      return;
    }

    translateY.value = event.translationY;
  };

  const panGesture = Gesture.Pan()
    .onUpdate(onPanGestureUpdate)
    .onEnd((event) => scheduleOnRN(onPanGestureEnd, event));

  const gesture = Gesture.Simultaneous(Gesture.Native(), panGesture);

  const handleGesture = Gesture.Pan()
    .onUpdate(onPanGestureHandleUpdate)
    .onEnd((event) => scheduleOnRN(onPanGestureHandleEnd, event));

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    zIndex: 100 + props.layer,
  }));

  const overlayStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    zIndex: 100 + props.layer,
    backgroundColor: colors.black,
  }));

  const edges = useMemo<Edge[]>(() => {
    return [placement, "left", "right"];
  }, [placement]);

  const styles = useMemo(
    () => themedStyles(theme, placement),
    [theme, placement]
  );

  useEffect(() => {
    if (measuredHeight === null || didOpen.current || !props.open) {
      return;
    }

    translateY.value = withSpring(0, EnterAnimationConfig);
    opacity.value = withSpring(0.4, EnterAnimationConfig);

    didOpen.current = true;
  }, [measuredHeight, props.open]);

  return (
    <Fragment>
      <Animated.View style={[StyleSheet.absoluteFill, overlayStyle]}>
        <Pressable onPress={animateOut} style={StyleSheet.absoluteFillObject} />
      </Animated.View>

      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.container, animatedStyle]}>
          <SafeAreaView edges={edges} onLayout={onLayout}>
            {placement === "bottom" ? (
              <GestureDetector gesture={handleGesture}>
                <FlyoutHandle />
              </GestureDetector>
            ) : null}
            <Animated.ScrollView
              onScroll={onScroll}
              scrollEventThrottle={16}
              scrollEnabled
              bounces={bounceEnabled}
              stickyHeaderIndices={StickyHeaderIndices}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              {...AndroidOverScroll}
            >
              {children}
            </Animated.ScrollView>
            {placement === "top" ? (
              <GestureDetector gesture={handleGesture}>
                <FlyoutHandle />
              </GestureDetector>
            ) : null}
          </SafeAreaView>
        </Animated.View>
      </GestureDetector>
    </Fragment>
  );
});

const themedStyles = function (theme: AppTheme, placement: "top" | "bottom") {
  return StyleSheet.create({
    container: {
      position: "absolute",
      [placement]: 0,
      left: 0,
      right: 0,
      height: "100%",
      maxHeight: MaxHeight,
      backgroundColor: theme.colors.background.secondary,
      borderTopLeftRadius: placement === "bottom" ? theme.radii.xl : 0,
      borderTopRightRadius: placement === "bottom" ? theme.radii.xl : 0,
      borderBottomLeftRadius: placement === "top" ? theme.radii.xl : 0,
      borderBottomRightRadius: placement === "top" ? theme.radii.xl : 0,
    },
  });
};
