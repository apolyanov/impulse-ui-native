import type { ChartsTokens } from "@impulse-ui-native/theme";

import { DefaultChartsTokens } from "../constants/charts.constants";
import {
  MultiPieChartSeriesModel,
  UseMultiPieChartProps,
  UseMultiPieChartResult,
} from "../types";
import { createPieChartModel, createPieChartRadii } from "./pie-chart.util";

export function createMultiPieChartModel(
  props: UseMultiPieChartProps,
  tokens: ChartsTokens = DefaultChartsTokens,
): UseMultiPieChartResult {
  const { innerRadius, outerRadius } = createPieChartRadii(
    props.plot,
    props.innerRadius,
    props.outerRadius,
  );
  const ringCount = props.series.length;
  const radialSpan = outerRadius - innerRadius;
  const ringPadding =
    ringCount <= 1
      ? 0
      : Math.min(
          normalizeRingPadding(props.ringPadding, tokens.pie.ringPadding),
          radialSpan / (ringCount - 1),
        );
  const availableWidth = Math.max(
    0,
    radialSpan - ringPadding * Math.max(0, ringCount - 1),
  );
  const ringWidth = ringCount === 0 ? 0 : availableWidth / ringCount;
  const maximumRadius = Math.max(
    0,
    Math.min(props.plot.width, props.plot.height) / 2,
  );

  const series: MultiPieChartSeriesModel[] = props.series.map(
    (currentSeries, index) => {
      const seriesOuterRadius = outerRadius - index * (ringWidth + ringPadding);
      const seriesInnerRadius = Math.max(
        innerRadius,
        seriesOuterRadius - ringWidth,
      );
      const model = createPieChartModel({
        data: currentSeries.data,
        plot: props.plot,
        startAngle: props.startAngle,
        endAngle: props.endAngle,
        padAngle: props.padAngle,
        innerRadius:
          maximumRadius === 0 ? 0 : seriesInnerRadius / maximumRadius,
        outerRadius:
          maximumRadius === 0 ? 0 : seriesOuterRadius / maximumRadius,
      });

      return {
        ...currentSeries,
        ...model,
        coordinates: model.coordinates.map((coordinate) => ({
          ...coordinate,
          padRadius: outerRadius,
        })),
      };
    },
  );

  return { series };
}

function normalizeRingPadding(
  value: number | undefined,
  fallback: number,
): number {
  const padding =
    value === undefined || !Number.isFinite(value) ? fallback : value;

  return Math.max(0, padding);
}
