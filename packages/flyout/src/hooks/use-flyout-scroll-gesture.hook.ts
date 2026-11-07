import type { ComponentRef } from "react";
import type { ScrollView } from "react-native";
import { useImperativeHandle } from "react";
import {
  GestureStateManager,
  useExclusiveGestures,
  useNativeGesture,
  usePanGesture,
} from "react-native-gesture-handler";
import {
  useAnimatedRef,
  useScrollOffset,
  useSharedValue,
} from "react-native-reanimated";

import type {
  FlyoutScrollable,
  FlyoutScrollGestureOptions,
} from "../types/flyout-scroll.types";
import { FlyoutScrollDragThreshold } from "../constants/flyout-gesture.constants";
import { useFlyoutDragContext } from "./use-flyout-drag-context.hook";

export function useFlyoutScrollGesture<
  Scrollable extends FlyoutScrollable = ComponentRef<typeof ScrollView>,
>({
  ref,
  horizontal,
  contentOffset,
  contentInset,
}: FlyoutScrollGestureOptions<Scrollable>) {
  const { dragGestureConfig, placement } = useFlyoutDragContext();
  const scrollRef = useAnimatedRef<Scrollable>();
  const topInset = contentInset?.top ?? 0;
  const scrollOffset = useSharedValue(contentOffset?.y ?? -topInset);
  const touchX = useSharedValue(0);
  const touchY = useSharedValue(0);
  const dragging = useSharedValue(false);
  useScrollOffset(scrollRef, scrollOffset);

  const pan = usePanGesture({
    // Object-hook arguments cannot contain spreads in the Worklets Babel plugin.
    enabled: dragGestureConfig.enabled,
    onActivate: dragGestureConfig.onActivate,
    onUpdate: dragGestureConfig.onUpdate,
    onDeactivate: dragGestureConfig.onDeactivate,
    manualActivation: true,
    onTouchesDown: (event) => {
      "worklet";
      dragging.set(false);
      const touch = event.allTouches[0];
      // Decide once per touch: reaching the top later never transfers ownership.
      const canDrag =
        placement === "bottom" &&
        !horizontal &&
        scrollOffset.value + topInset <= 0;
      if (!canDrag || event.numberOfTouches !== 1 || !touch) {
        GestureStateManager.fail(event.handlerTag);
        return;
      }
      touchX.set(touch.absoluteX);
      touchY.set(touch.absoluteY);
    },
    onTouchesMove: (event) => {
      "worklet";
      if (dragging.value) return;
      const touch = event.allTouches[0];
      if (event.numberOfTouches !== 1 || !touch) {
        GestureStateManager.fail(event.handlerTag);
        return;
      }
      const dx = touch.absoluteX - touchX.value;
      const dy = touch.absoluteY - touchY.value;
      if (
        Math.abs(dx) < FlyoutScrollDragThreshold &&
        Math.abs(dy) < FlyoutScrollDragThreshold
      )
        return;
      if (dy > 0 && dy > Math.abs(dx)) {
        dragging.set(true);
        GestureStateManager.activate(event.handlerTag);
      } else {
        GestureStateManager.fail(event.handlerTag);
      }
    },
  });
  const native = useNativeGesture();
  // The native scroll recognizer waits only until the initial direction is known.
  const gesture = useExclusiveGestures(pan, native);

  useImperativeHandle(ref, () => scrollRef.current! as Scrollable, [scrollRef]);

  return { scrollRef, gesture };
}
