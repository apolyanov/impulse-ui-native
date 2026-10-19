import { createIcon } from "../../hocs/create-icon.hoc";
import { ChartBarHorizontalBoldIcon } from "../bold/chart-bar-horizontal-bold.icon";
import { ChartBarHorizontalDuotoneIcon } from "../duotone/chart-bar-horizontal-duotone.icon";
import { ChartBarHorizontalFillIcon } from "../fill/chart-bar-horizontal-fill.icon";
import { ChartBarHorizontalLightIcon } from "../light/chart-bar-horizontal-light.icon";
import { ChartBarHorizontalRegularIcon } from "../regular/chart-bar-horizontal-regular.icon";
import { ChartBarHorizontalThinIcon } from "../thin/chart-bar-horizontal-thin.icon";

export const ChartBarHorizontalIcon = createIcon("ChartBarHorizontal", {
  bold: ChartBarHorizontalBoldIcon,
  duotone: ChartBarHorizontalDuotoneIcon,
  fill: ChartBarHorizontalFillIcon,
  light: ChartBarHorizontalLightIcon,
  regular: ChartBarHorizontalRegularIcon,
  thin: ChartBarHorizontalThinIcon,
});
