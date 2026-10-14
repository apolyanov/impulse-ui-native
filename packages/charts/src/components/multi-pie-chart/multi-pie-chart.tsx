import { useMemo } from "react";

import { memo } from "@impulse-ui-native/core";

import type { MultiPieChartProps } from "../../types";
import { useMultiPieChart } from "../../hooks";
import { useChartFrame } from "../../hooks/use-chart-frame.hook";
import { useVisibleChartSeries } from "../../hooks/use-visible-chart-series.hook";
import { getChartColor } from "../../utils/chart-color.util";
import { createPieChartHitTargets } from "../../utils/chart-interaction.util";
import { ChartSurface } from "../chart-surface";
import { Pie } from "../primitives";

export const MultiPieChart = memo(function MultiPieChart(
  props: MultiPieChartProps,
) {
  const frame = useChartFrame(props);
  const { theme, tokens, layout } = frame;
  const series = useVisibleChartSeries(
    props.series,
    frame.presentation.hidden,
    "slice",
  );
  const model = useMultiPieChart(
    { ...props, series, plot: layout.plot },
    tokens,
  );

  const targets = useMemo(
    () =>
      model.series.flatMap((item) =>
        createPieChartHitTargets(
          item.coordinates,
          item.slice?.colors ?? tokens.palette,
          item.id,
          item.label ?? item.id,
        ),
      ),
    [model.series, tokens.palette],
  );
  const legendItems = useMemo(
    () =>
      props.series.map((item) => {
        const colors = item.data
          .filter((datum) => Number.isFinite(datum.value) && datum.value > 0)
          .map(
            (datum) =>
              datum.color ??
              getChartColor(datum.id, item.slice?.colors ?? tokens.palette),
          );

        return {
          id: item.id,
          label: item.label ?? item.id,
          color: colors[0] ?? "transparent",
          colors,
        };
      }),
    [props.series, tokens.palette],
  );

  return (
    <ChartSurface frame={frame} targets={targets} legendItems={legendItems}>
      {model.series.map((item) => (
        <Pie
          key={item.id}
          coordinates={item.coordinates}
          {...item.slice}
          theme={theme}
        />
      ))}
    </ChartSurface>
  );
});
