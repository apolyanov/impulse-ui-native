import { memo } from "@impulse-ui-native/core";

import type { YAxisProps } from "../../types";
import { ChartAxis } from "./chart-axis";

export const YAxis = memo(function YAxis<Value = number>(
  props: YAxisProps<Value>,
) {
  return <ChartAxis {...props} orientation="vertical" />;
});
