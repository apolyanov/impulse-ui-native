import { createIcon } from "../../hocs/create-icon.hoc";
import { ChartDonutBoldIcon } from "../bold/chart-donut-bold.icon";
import { ChartDonutDuotoneIcon } from "../duotone/chart-donut-duotone.icon";
import { ChartDonutFillIcon } from "../fill/chart-donut-fill.icon";
import { ChartDonutLightIcon } from "../light/chart-donut-light.icon";
import { ChartDonutRegularIcon } from "../regular/chart-donut-regular.icon";
import { ChartDonutThinIcon } from "../thin/chart-donut-thin.icon";

export const ChartDonutIcon = createIcon("ChartDonut", {
  bold: ChartDonutBoldIcon,
  duotone: ChartDonutDuotoneIcon,
  fill: ChartDonutFillIcon,
  light: ChartDonutLightIcon,
  regular: ChartDonutRegularIcon,
  thin: ChartDonutThinIcon,
});
