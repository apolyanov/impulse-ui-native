import type {
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  View,
} from "react-native";
import { useRef } from "react";
import { I18nManager, Platform } from "react-native";

import { useEventCallback } from "@impulse-ui-native/core";

import type { UseScrollViewInitialScrollOptions } from "../types";
import type { ScrollViewMeasurement } from "../types/scroll-view-measurement.types";
import { getScrollViewRevealOffset } from "../utils/get-scroll-view-reveal-offset";

export function useScrollViewInitialScroll({
  enabled = true,
  horizontal = false,
  contentOffset,
  onLayout,
  onContentSizeChange,
  onScrollBeginDrag,
}: UseScrollViewInitialScrollOptions = {}) {
  const scrollViewRef = useRef<ScrollView>(null);
  const targetRef = useRef<View>(null);
  const viewportSizeRef = useRef(0);
  const contentSizeRef = useRef(0);
  const completedRef = useRef(false);
  const measuringRef = useRef(false);

  const handleMeasurement = useEventCallback(
    ({ scrollView, target, layout }: ScrollViewMeasurement) => {
      measuringRef.current = false;

      if (!enabled || contentOffset || completedRef.current) {
        return;
      }

      if (
        scrollViewRef.current !== scrollView ||
        targetRef.current !== target
      ) {
        return;
      }

      const targetSize = horizontal ? layout.width : layout.height;

      if (targetSize <= 0) {
        return;
      }

      const offset = getScrollViewRevealOffset({
        layout,
        viewportSize: viewportSizeRef.current,
        contentSize: contentSizeRef.current,
        horizontal: Boolean(horizontal),
        isRTL: I18nManager.isRTL,
        platform: Platform.OS,
      });

      completedRef.current = true;

      if (offset !== null) {
        scrollView.scrollTo(
          horizontal
            ? { x: offset, animated: false }
            : { y: offset, animated: false },
        );
      }
    },
  );

  const handleMeasurementFailure = useEventCallback(() => {
    measuringRef.current = false;
  });

  const revealTarget = useEventCallback(() => {
    const scrollView = scrollViewRef.current;
    const target = targetRef.current;

    if (
      !enabled ||
      contentOffset ||
      completedRef.current ||
      measuringRef.current
    ) {
      return;
    }

    if (
      !scrollView ||
      !target ||
      viewportSizeRef.current <= 0 ||
      contentSizeRef.current <= 0
    ) {
      return;
    }

    const nativeScrollView = scrollView.getNativeScrollRef();

    if (nativeScrollView == null) {
      return;
    }

    measuringRef.current = true;
    target.measureLayout(
      nativeScrollView,
      (x, y, width, height) => {
        handleMeasurement({
          scrollView,
          target,
          layout: { x, y, width, height },
        });
      },
      handleMeasurementFailure,
    );
  });

  const handleLayout = useEventCallback((event: LayoutChangeEvent) => {
    viewportSizeRef.current = horizontal
      ? event.nativeEvent.layout.width
      : event.nativeEvent.layout.height;

    revealTarget();
    onLayout?.(event);
  });

  const handleContentSizeChange = useEventCallback(
    (width: number, height: number) => {
      contentSizeRef.current = horizontal ? width : height;

      revealTarget();
      onContentSizeChange?.(width, height);
    },
  );

  const handleScrollBeginDrag = useEventCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      completedRef.current = true;

      onScrollBeginDrag?.(event);
    },
  );

  return {
    scrollViewRef,
    targetRef,
    onTargetLayout: revealTarget,
    onLayout: handleLayout,
    onContentSizeChange: handleContentSizeChange,
    onScrollBeginDrag: handleScrollBeginDrag,
  };
}
