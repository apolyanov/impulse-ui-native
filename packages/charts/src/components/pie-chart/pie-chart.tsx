import { useMemo } from "react";

import { memo } from "@impulse-ui-native/core";

import type { PieChartProps } from "../../types";
import { usePieChart } from "../../hooks";
import { useChartFrame } from "../../hooks/use-chart-frame.hook";
import {
  createPieChartHitTargets,
  createPieChartLegend,
} from "../../utils/chart-interaction.util";
import { ChartSurface } from "../chart-surface";
import { Pie } from "../primitives";

export const PieChart = memo(function PieChart(props: PieChartProps) {
  const frame = useChartFrame(props);
  const { theme, layout, presentation } = frame;
  const data = useMemo(
    () =>
      props.data.map((datum) =>
        presentation.hidden.has(datum.id) ? { ...datum, value: 0 } : datum,
      ),
    [props.data, presentation.hidden],
  );
  const model = usePieChart({ ...props, data, plot: layout.plot });
  const colors = props.slice?.colors ?? theme.components.charts.palette;

  const targets = useMemo(
    () =>
      props.slice?.visible === false
        ? []
        : createPieChartHitTargets(model.coordinates, colors),
    [model.coordinates, colors, props.slice?.visible],
  );
  const legendItems = useMemo(
    () => createPieChartLegend(props.data, colors),
    [props.data, colors],
  );

  return (
    <ChartSurface frame={frame} targets={targets} legendItems={legendItems}>
      <Pie coordinates={model.coordinates} {...props.slice} theme={theme} />
    </ChartSurface>
  );
});
