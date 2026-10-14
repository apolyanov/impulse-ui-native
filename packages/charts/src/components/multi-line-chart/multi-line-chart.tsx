import { useMemo } from "react";
import { Group } from "@shopify/react-native-skia";

import { memo } from "@impulse-ui-native/core";

import type { ChartXValue, MultiLineChartProps } from "../../types";
import { useMultiLineChart } from "../../hooks";
import { useChartFrame } from "../../hooks/use-chart-frame.hook";
import { useVisibleChartSeries } from "../../hooks/use-visible-chart-series.hook";
import { getChartColor } from "../../utils/chart-color.util";
import { createLineChartHitTargets } from "../../utils/chart-interaction.util";
import { createChartStrokeClip } from "../../utils/chart-layout.util";
import { createDrawableMultiLineChartSeries } from "../../utils/multi-line-chart.util";
import { ChartAxes } from "../chart-axes";
import { ChartSurface } from "../chart-surface";
import { Line } from "../primitives";

export const MultiLineChart = memo(function MultiLineChart<
  X extends ChartXValue = number,
>(props: MultiLineChartProps<X>) {
  const frame = useChartFrame(props);
  const { theme, tokens, layout } = frame;
  const series = useVisibleChartSeries(
    props.series,
    frame.presentation.hidden,
    "line",
  );
  const model = useMultiLineChart({ ...props, series, plot: layout.plot });

  const drawable = useMemo(
    () =>
      model.series.map((item, index) => ({
        ...createDrawableMultiLineChartSeries(item, index, layout.plot, tokens),
        clip: createChartStrokeClip(
          layout.plot,
          item.line?.width ?? tokens.line.width,
          frame.canvas.size,
        ),
      })),
    [model.series, layout.plot, tokens, frame.canvas.size],
  );
  const targets = useMemo(
    () =>
      drawable.flatMap((item) =>
        createLineChartHitTargets(
          item.coordinates,
          item.line?.color ?? getChartColor(item.id, tokens.palette),
          item.id,
          item.label ?? item.id,
          props.xAxis?.format,
        ),
      ),
    [drawable, tokens.palette, props.xAxis?.format],
  );
  const legendItems = useMemo(
    () =>
      props.series.map((item) => ({
        id: item.id,
        label: item.label ?? item.id,
        color: item.line?.color ?? getChartColor(item.id, tokens.palette),
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
      {drawable.map((item) => (
        <Group key={item.id} clip={item.clip}>
          <Line coordinates={item.coordinates} {...item.line} theme={theme} />
        </Group>
      ))}
    </ChartSurface>
  );
});
