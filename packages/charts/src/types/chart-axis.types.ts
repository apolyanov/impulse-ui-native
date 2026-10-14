import type { AxisProps } from "./axis.types";
import type { ChartPoint } from "./common.types";
import type { ChartStrokeStyle } from "./style.types";

export interface ChartAxisProps<Value> extends AxisProps<Value> {
  orientation: "horizontal" | "vertical";
}

export interface ChartStrokeProps extends ChartStrokeStyle {
  start: ChartPoint;
  end: ChartPoint;
  visible?: boolean;
}
