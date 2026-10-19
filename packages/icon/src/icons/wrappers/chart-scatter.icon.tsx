import { createIcon } from "../../hocs/create-icon.hoc";
import { ChartScatterBoldIcon } from "../bold/chart-scatter-bold.icon";
import { ChartScatterDuotoneIcon } from "../duotone/chart-scatter-duotone.icon";
import { ChartScatterFillIcon } from "../fill/chart-scatter-fill.icon";
import { ChartScatterLightIcon } from "../light/chart-scatter-light.icon";
import { ChartScatterRegularIcon } from "../regular/chart-scatter-regular.icon";
import { ChartScatterThinIcon } from "../thin/chart-scatter-thin.icon";

export const ChartScatterIcon = createIcon("ChartScatter", {
  bold: ChartScatterBoldIcon,
  duotone: ChartScatterDuotoneIcon,
  fill: ChartScatterFillIcon,
  light: ChartScatterLightIcon,
  regular: ChartScatterRegularIcon,
  thin: ChartScatterThinIcon,
});
