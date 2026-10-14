import { useMemo } from "react";
import { Group } from "@shopify/react-native-skia";

import { memo } from "@impulse-ui-native/core";

import type { BarChartProps, ChartXValue } from "../../types";
import { useBarChart } from "../../hooks";
import { useChartFrame } from "../../hooks/use-chart-frame.hook";
import { createBarChartHitTargets } from "../../utils/chart-interaction.util";
import { ChartAxes } from "../chart-axes";
import { ChartSurface } from "../chart-surface";
import { Bar } from "../primitives";

export const BarChart = memo(function BarChart<X extends ChartXValue = string>(
  props: BarChartProps<X>,
) {
  const frame = useChartFrame(props);
  const { theme, layout } = frame;
  const model = useBarChart(
    { ...props, plot: layout.plot },
    theme.components.charts,
  );
  const color = props.bar?.color ?? theme.components.charts.palette[0];

  const targets = useMemo(
    () =>
      props.bar?.visible === false
        ? []
        : createBarChartHitTargets(
            model.coordinates,
            color,
            undefined,
            undefined,
            layout.plot,
            props.xAxis?.format,
          ),
    [
      model.coordinates,
      color,
      props.bar?.visible,
      layout.plot,
      props.xAxis?.format,
    ],
  );

  return (
    <ChartSurface frame={frame} targets={targets}>
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
        <Bar coordinates={model.coordinates} {...props.bar} theme={theme} />
      </Group>
    </ChartSurface>
  );
});
