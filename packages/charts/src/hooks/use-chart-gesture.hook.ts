import { useMemo, useRef } from "react";
import { PanResponder } from "react-native";

import { useEventCallback } from "@impulse-ui-native/core";

import type { ChartHitTarget, ChartPoint, ChartRect } from "../types";
import type { ChartGestureState } from "../utils/chart-gesture.util";
import { updateChartGestureState } from "../utils/chart-gesture.util";

interface UseChartGestureProps {
  interactive: boolean;
  targets: readonly ChartHitTarget[];
  plot: ChartRect;
  selectAt: (
    point: ChartPoint,
    targets: readonly ChartHitTarget[],
    plot: ChartRect,
    clearOnMiss?: boolean,
  ) => boolean;
}

export function useChartGesture({
  interactive,
  targets,
  plot,
  selectAt,
}: UseChartGestureProps) {
  const gesture = useRef<ChartGestureState | null>(null);

  const shouldRespond = useEventCallback(() => interactive);
  const shouldTerminate = useEventCallback(() => !interactive);
  const begin = useEventCallback((point: ChartPoint) => {
    gesture.current = updateChartGestureState(
      null,
      point,
      selectAt(point, targets, plot, false),
    );
  });
  const move = useEventCallback((dx: number, dy: number) => {
    if (!gesture.current) {
      return;
    }

    const point = {
      x: gesture.current.origin.x + dx,
      y: gesture.current.origin.y + dy,
    };
    gesture.current = updateChartGestureState(
      gesture.current,
      point,
      selectAt(point, targets, plot, false),
    );
  });
  const end = useEventCallback(() => {
    const current = gesture.current;
    gesture.current = null;

    if (current && !current.hasHit && !current.dragged) {
      selectAt(current.origin, targets, plot, true);
    }
  });
  const cancel = useEventCallback(() => {
    gesture.current = null;
  });

  return useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: shouldRespond,
        onMoveShouldSetPanResponder: shouldRespond,
        onPanResponderTerminationRequest: shouldTerminate,
        onShouldBlockNativeResponder: shouldRespond,
        onPanResponderGrant: (event) => {
          begin({
            x: event.nativeEvent.locationX,
            y: event.nativeEvent.locationY,
          });
        },
        onPanResponderMove: (_event, state) => move(state.dx, state.dy),
        onPanResponderRelease: end,
        onPanResponderTerminate: cancel,
      }).panHandlers,
    [shouldRespond, shouldTerminate, begin, move, end, cancel],
  );
}
