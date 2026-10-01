import type {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
} from "react-native";
import { useEffect, useMemo, useRef, useState } from "react";
import { AccessibilityInfo } from "react-native";

import {
  useControllableState,
  useEventCallback,
} from "@impulse-ui-native/core";

import type { CarouselBehaviorOptions } from "../types/carousel.types";
import { ScrollIdleDelay } from "../constants/carousel.constants";
import {
  clampIndex,
  getSnapOffset,
  indexFromOffset,
} from "../utils/carousel.utils";

export function useCarousel({
  count,
  index: indexProp,
  defaultIndex,
  onIndexChange,
  disabled,
  reducedMotion,
  stride,
  endInset,
}: CarouselBehaviorOptions) {
  const [systemReducedMotion, setSystemReducedMotion] = useState(true);
  const [settled, setSettled] = useState(0);
  const [visibleIndex, setVisibleIndex] = useState(() =>
    clampIndex(indexProp ?? defaultIndex, count),
  );
  const scrollRef = useRef<ScrollView>(null);
  const offsetRef = useRef(0);
  const draggingRef = useRef(false);
  const userScrollRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const lastStrideRef = useRef(0);
  const lastEndInsetRef = useRef(0);
  const lastSettledRef = useRef(0);
  const [value, setValue] = useControllableState({
    prop: indexProp,
    defaultProp: clampIndex(defaultIndex, count),
    onChange: onIndexChange,
  });
  const index = clampIndex(value, count);
  const displayedIndex = clampIndex(visibleIndex, count);
  const motionReduced = reducedMotion || systemReducedMotion;

  const clearIdle = useEventCallback(() => {
    clearTimeout(timerRef.current);
    timerRef.current = undefined;
  });
  const syncPosition = useEventCallback((animated: boolean) => {
    if (stride > 0 && !draggingRef.current) {
      const shouldAnimate = animated && !motionReduced;
      if (!shouldAnimate) setVisibleIndex(index);
      scrollRef.current?.scrollTo({
        x: getSnapOffset(index, count, stride, endInset),
        y: 0,
        animated: shouldAnimate,
      });
    }
  });
  const select = useEventCallback((next: number) => {
    if (disabled || count < 2) return;
    clearIdle();
    draggingRef.current = false;
    userScrollRef.current = false;
    const nextIndex = clampIndex(next, count);
    setValue(nextIndex);
    // An arrow can return to the committed slide before a swipe has settled.
    if (nextIndex === index) syncPosition(true);
  });
  const finishScroll = useEventCallback(() => {
    clearIdle();
    draggingRef.current = false;
    if (userScrollRef.current) {
      userScrollRef.current = false;
      if (!disabled)
        setValue(indexFromOffset(offsetRef.current, stride, count, endInset));
      // Also resync controlled values when the parent declines a swipe request.
      setSettled((revision) => revision + 1);
    }
  });
  const handleBeginDrag = useEventCallback(() => {
    clearIdle();
    draggingRef.current = true;
    userScrollRef.current = true;
  });
  const handleScroll = useEventCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      offsetRef.current = event.nativeEvent.contentOffset.x;
      // Track the nearest slide during both swipes and programmatic animations.
      setVisibleIndex(
        indexFromOffset(offsetRef.current, stride, count, endInset),
      );
      if (userScrollRef.current && !draggingRef.current) {
        clearIdle();
        timerRef.current = setTimeout(finishScroll, ScrollIdleDelay);
      }
    },
  );
  const handleEndDrag = useEventCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      offsetRef.current = event.nativeEvent.contentOffset.x;
      draggingRef.current = false;
      clearIdle();
      timerRef.current = setTimeout(finishScroll, ScrollIdleDelay);
    },
  );
  const handleMomentumBegin = useEventCallback(() => {
    clearIdle();
  });
  const handleMomentumEnd = useEventCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      offsetRef.current = event.nativeEvent.contentOffset.x;
      setVisibleIndex(
        indexFromOffset(offsetRef.current, stride, count, endInset),
      );
      finishScroll();
    },
  );

  const controller = useMemo(
    () => ({
      index,
      displayedIndex,
      scrollRef,
      motionReduced,
      select,
      syncPosition,
      handleScroll,
      handleBeginDrag,
      handleEndDrag,
      handleMomentumBegin,
      handleMomentumEnd,
    }),
    [
      index,
      displayedIndex,
      motionReduced,
      select,
      syncPosition,
      handleScroll,
      handleBeginDrag,
      handleEndDrag,
      handleMomentumBegin,
      handleMomentumEnd,
    ],
  );

  useEffect(() => {
    let alive = true;
    let receivedEvent = false;
    const motionSubscription = AccessibilityInfo.addEventListener(
      "reduceMotionChanged",
      (enabled) => {
        receivedEvent = true;
        if (alive) setSystemReducedMotion(enabled);
      },
    );
    void AccessibilityInfo.isReduceMotionEnabled()
      .then((enabled) => {
        if (alive && !receivedEvent) setSystemReducedMotion(enabled);
      })
      .catch(() => {
        /* Keep motion disabled if the native setting is unavailable. */
      });
    return () => {
      alive = false;
      motionSubscription.remove();
      clearIdle();
    };
  }, [clearIdle]);

  useEffect(() => {
    if (disabled) {
      clearIdle();
      draggingRef.current = false;
      userScrollRef.current = false;
    }
    const resized =
      lastStrideRef.current !== stride || lastEndInsetRef.current !== endInset;
    lastStrideRef.current = stride;
    lastEndInsetRef.current = endInset;
    syncPosition(!resized && lastSettledRef.current === settled);
    lastSettledRef.current = settled;
  }, [
    index,
    stride,
    endInset,
    count,
    motionReduced,
    disabled,
    settled,
    syncPosition,
    clearIdle,
  ]);

  return controller;
}
