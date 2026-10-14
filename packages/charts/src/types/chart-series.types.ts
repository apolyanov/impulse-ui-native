export interface ChartVisibleSeries {
  id: string;
  line?: { visible?: boolean };
  bar?: { visible?: boolean };
  slice?: { visible?: boolean };
}

export type ChartSeriesStyleKey = "line" | "bar" | "slice";
