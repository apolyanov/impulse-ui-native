import { FontWeight } from "@shopify/react-native-skia";

export type ChartStrokeCap = "butt" | "round" | "square";
export type ChartStrokeJoin = "bevel" | "miter" | "round";

export interface ChartStrokeStyle {
  color?: string;
  width?: number;
  opacity?: number;
  dash?: readonly number[];
}

export interface ChartLabelStyle {
  color?: string;
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: FontWeight;
  maxLines?: number;
}
