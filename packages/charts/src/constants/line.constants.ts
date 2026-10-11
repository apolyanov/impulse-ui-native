import { ChartStrokeCap, ChartStrokeJoin, LineChartCurve } from "../types";
import { DefaultChartsTokens } from "./charts.constants";

export const LineDefaultColor = DefaultChartsTokens.palette[0];
export const LineDefaultColors = DefaultChartsTokens.palette;
export const LineDefaultWidth = DefaultChartsTokens.line.width;
export const LineDefaultOpacity = 1;
export const LineDefaultCurve: LineChartCurve = "linear";
export const LineDefaultCap: ChartStrokeCap = "round";
export const LineDefaultJoin: ChartStrokeJoin = "round";
