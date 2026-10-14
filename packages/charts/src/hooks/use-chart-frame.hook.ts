import { useMemo } from "react";

import { useTheme } from "@impulse-ui-native/theme";

import type { ChartContainerProps } from "../types";
import { useChartCanvas } from "./use-chart-canvas.hook";
import { useChartLayout } from "./use-chart-layout.hook";
import { useChartPresentation } from "./use-chart-presentation.hook";

export function useChartFrame(props: ChartContainerProps) {
  const theme = useTheme();
  const tokens = theme.components.charts;
  const canvas = useChartCanvas();
  const presentation = useChartPresentation(props);
  const layout = useChartLayout(canvas.size, props.insets, tokens.insets);

  const options = useMemo(
    () => ({
      interactive: props.interactive,
      legend: props.legend,
      tooltip: props.tooltip,
      emptyContent: props.emptyContent,
    }),
    [props.interactive, props.legend, props.tooltip, props.emptyContent],
  );

  return useMemo(
    () => ({ theme, tokens, canvas, layout, presentation, options }),
    [theme, tokens, canvas, layout, presentation, options],
  );
}
