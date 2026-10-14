import { memo } from "@impulse-ui-native/core";

import type { ChartXValue, XAxisProps } from "../../types";
import { ChartAxis } from "./chart-axis";

export const XAxis = memo(function XAxis<X extends ChartXValue = number>(
  props: XAxisProps<X>,
) {
  return <ChartAxis {...props} orientation="horizontal" />;
});
