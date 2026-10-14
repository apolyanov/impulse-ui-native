import { useMemo, useRef } from "react";
import { Gesture } from "react-native-gesture-handler";
import { scheduleOnRN } from "react-native-worklets";

import { useEventCallback } from "@impulse-ui-native/core";

import type { ChartHitTarget, ChartPoint, ChartRect } from "../types";
import type { ChartGestureState } from "../utils/chart-gesture.util";
import { updateChartGestureState } from "../utils/chart-gesture.util";
import { findChartHitTarget } from "../utils/chart-interaction.util";
import { isChartTargetSelected } from "../utils/chart-selection.util";

interface UseChartGestureProps {
  interactive: boolean;
  targets: readonly ChartHitTarget[];
  selectedTargets: readonly ChartHitTarget[];
  clearSelection: () => void;
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
  selectedTargets,
  clearSelection,
  plot,
  selectAt,
}: UseChartGestureProps) {
  const state = useRef<ChartGestureState | null>(null);
  const dismissOnTap = useRef(false);
  const enabled = interactive && plot.width > 0 && plot.height > 0;

  const begin = useEventCallback((point: ChartPoint) => {
    dismissOnTap.current = isChartTargetSelected(
      findChartHitTarget(point, targets, plot),
      selectedTargets,
    );

    state.current = updateChartGestureState(
      null,
      point,
      selectAt(point, targets, plot, false),
    );
  });
  const move = useEventCallback((point: ChartPoint) => {
    if (!state.current) {
      return;
    }

    state.current = updateChartGestureState(
      state.current,
      point,
      selectAt(point, targets, plot, false),
    );
  });
  const end = useEventCallback((point: ChartPoint, success: boolean) => {
    const current = state.current;

    if (!current || !success) {
      return;
    }

    const next = updateChartGestureState(current, point, false);

    if (next.dragged) {
      selectAt(point, targets, plot, false);
    } else if (dismissOnTap.current) {
      clearSelection();
    } else if (!next.hasHit) {
      selectAt(current.origin, targets, plot, true);
    }
  });
  const cancel = useEventCallback(() => {
    state.current = null;
    dismissOnTap.current = false;
  });

  return useMemo(
    () =>
      Gesture.Pan()
        .enabled(enabled)
        .manualActivation(true)
        .maxPointers(1)
        .shouldCancelWhenOutside(false)
        .onTouchesDown((event, manager) => {
          "worklet";

          const touch = event.changedTouches[0];

          if (touch) {
            // Taps must select even before the pan reaches ACTIVE.
            scheduleOnRN(begin, { x: touch.x, y: touch.y });
          }

          // Claim native touch ownership before a parent scroll can activate.
          manager.activate();
        })
        .onUpdate((event) => {
          "worklet";

          scheduleOnRN(move, { x: event.x, y: event.y });
        })
        .onEnd((event, success) => {
          "worklet";

          scheduleOnRN(end, { x: event.x, y: event.y }, success);
        })
        .onFinalize(() => {
          "worklet";

          scheduleOnRN(cancel);
        }),
    [enabled, begin, move, end, cancel],
  );
}
