import type {
  ChartSelection,
  LineChartPoint,
  MultiLineChartSeries,
  PieChartPoint,
} from "@impulse-ui-native/charts";

export const ChartComparisonData: readonly LineChartPoint<string>[] = [
  { x: "Jan", y: 18 },
  { x: "Feb", y: 24 },
  { x: "Mar", y: 16 },
];

export const ChartComparisonSeries: readonly MultiLineChartSeries<string>[] = [
  { id: "current", label: "Current", data: ChartComparisonData },
  {
    id: "previous",
    label: "Previous",
    data: [
      { x: "Jan", y: 14 },
      { x: "Feb", y: 20 },
      { x: "Mar", y: 12 },
    ],
  },
];

export const ChartComparisonPieData: readonly PieChartPoint[] = [
  { id: "jan", label: "Jan", value: 18 },
  { id: "feb", label: "Feb", value: 24 },
  { id: "mar", label: "Mar", value: 16 },
];

export const ChartComparisonSelection: ChartSelection = { datumIndex: 1 };
export const ChartComparisonSeriesSelection: ChartSelection = {
  seriesId: "current",
  datumIndex: 1,
};
