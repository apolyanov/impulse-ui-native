import { useMemo } from "react";

import {
  useControllableState,
  useEventCallback,
} from "@impulse-ui-native/core";

import type {
  ChartHitTarget,
  ChartPoint,
  ChartPresentationProps,
  ChartRect,
  ChartSelection,
} from "../types";
import {
  findChartHitTarget,
  isSameChartSelection,
} from "../utils/chart-interaction.util";

export function useChartPresentation(props: ChartPresentationProps) {
  const [selection, setSelection] = useControllableState<ChartSelection | null>(
    {
      prop: props.selection,
      defaultProp: props.defaultSelection ?? null,
      onChange: props.onSelectionChange,
    },
  );
  const [hiddenIds, setHiddenIds] = useControllableState<readonly string[]>({
    prop: props.hiddenIds,
    defaultProp: props.defaultHiddenIds ?? [],
    onChange: props.onHiddenIdsChange,
  });

  const hidden = useMemo(() => new Set(hiddenIds), [hiddenIds]);

  const selectAt = useEventCallback(
    (
      point: ChartPoint,
      targets: readonly ChartHitTarget[],
      plot: ChartRect,
    ) => {
      const next = findChartHitTarget(point, targets, plot)?.selection ?? null;

      setSelection((previous) =>
        isSameChartSelection(previous, next) ? previous : next,
      );
    },
  );
  const toggle = useEventCallback((id: string) => {
    setHiddenIds((previous) =>
      previous.includes(id)
        ? previous.filter((value) => value !== id)
        : [...previous, id],
    );

    setSelection(null);
  });

  return useMemo(
    () => ({ selection, hiddenIds, hidden, selectAt, toggle }),
    [selection, hiddenIds, hidden, selectAt, toggle],
  );
}
