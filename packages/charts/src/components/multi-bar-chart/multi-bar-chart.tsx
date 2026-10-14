import { useMemo } from "react";
import { Group } from "@shopify/react-native-skia";

import { memo } from "@impulse-ui-native/core";

import type { ChartXValue, MultiBarChartProps } from "../../types";
import { useMultiBarChart } from "../../hooks";
import { useChartFrame } from "../../hooks/use-chart-frame.hook";
import { useVisibleChartSeries } from "../../hooks/use-visible-chart-series.hook";
import { getChartColor } from "../../utils/chart-color.util";
import { createBarChartHitTargets } from "../../utils/chart-interaction.util";
import { createDrawableMultiBarChartSeries } from "../../utils/multi-bar-chart.util";
import { ChartAxes } from "../chart-axes";
import { ChartSurface } from "../chart-surface";
import { Bar } from "../primitives";

export const MultiBarChart = memo(function MultiBarChart<
  X extends ChartXValue = string,
>(props: MultiBarChartProps<X>) {
  const frame = useChartFrame(props);
  const { theme, tokens, layout } = frame;
  const series = useVisibleChartSeries(
    props.series,
    frame.presentation.hidden,
    "bar",
  );
  const model = useMultiBarChart(
    { ...props, series, plot: layout.plot },
    tokens,
  );

  const drawable = useMemo(
    () =>
      model.series.map((item, index) =>
        createDrawableMultiBarChartSeries(item, index, tokens),
      ),
    [model.series, tokens],
  );
  const targets = useMemo(
    () =>
      drawable.flatMap((item) =>
        createBarChartHitTargets(
          item.coordinates,
          item.bar?.color ?? getChartColor(item.id, tokens.palette),
          item.id,
          item.label ?? item.id,
          layout.plot,
          props.xAxis?.format,
        ),
      ),
    [drawable, tokens.palette, layout.plot, props.xAxis?.format],
  );
  const legendItems = useMemo(
    () =>
      props.series.map((item) => ({
        id: item.id,
        label: item.label ?? item.id,
        color: item.bar?.color ?? getChartColor(item.id, tokens.palette),
      })),
    [props.series, tokens.palette],
  );

  return (
    <ChartSurface frame={frame} targets={targets} legendItems={legendItems}>
      <ChartAxes
        {...props}
        layout={layout}
        theme={theme}
        xScale={model.xScale}
        xTicks={model.xTicks}
        yScale={model.yScale}
        yTicks={model.yTicks}
      />
      <Group clip={layout.plot}>
        {drawable.map((item) => (
          <Bar
            key={item.id}
            coordinates={item.coordinates}
            {...item.bar}
            theme={theme}
          />
        ))}
      </Group>
    </ChartSurface>
  );
});
