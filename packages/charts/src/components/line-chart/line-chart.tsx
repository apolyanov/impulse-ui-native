import { useMemo } from "react";
import { Group } from "@shopify/react-native-skia";

import { memo } from "@impulse-ui-native/core";

import type { ChartXValue, LineChartProps } from "../../types";
import { useLineChart } from "../../hooks";
import { useChartFrame } from "../../hooks/use-chart-frame.hook";
import { createLineChartHitTargets } from "../../utils/chart-interaction.util";
import { createChartStrokeClip } from "../../utils/chart-layout.util";
import { ChartAxes } from "../chart-axes";
import { ChartSurface } from "../chart-surface";
import { Line } from "../primitives";

export const LineChart = memo(function LineChart<
  X extends ChartXValue = number,
>(props: LineChartProps<X>) {
  const frame = useChartFrame(props);
  const { theme, layout } = frame;
  const model = useLineChart({ ...props, plot: layout.plot });
  const color = props.line?.color ?? theme.components.charts.palette[0];
  const width = props.line?.width ?? theme.components.charts.line.width;

  const targets = useMemo(
    () =>
      props.line?.visible === false
        ? []
        : createLineChartHitTargets(
            model.coordinates,
            color,
            undefined,
            undefined,
            props.xAxis?.format,
          ),
    [model.coordinates, color, props.line?.visible, props.xAxis?.format],
  );
  const clip = useMemo(
    () => createChartStrokeClip(layout.plot, width, frame.canvas.size),
    [layout.plot, width, frame.canvas.size],
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
      <Group clip={clip}>
        <Line coordinates={model.coordinates} {...props.line} theme={theme} />
      </Group>
    </ChartSurface>
  );
});
