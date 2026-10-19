import { createIcon } from "../../hocs/create-icon.hoc";
import { ChartBarBoldIcon } from "../bold/chart-bar-bold.icon";
import { ChartBarDuotoneIcon } from "../duotone/chart-bar-duotone.icon";
import { ChartBarFillIcon } from "../fill/chart-bar-fill.icon";
import { ChartBarLightIcon } from "../light/chart-bar-light.icon";
import { ChartBarRegularIcon } from "../regular/chart-bar-regular.icon";
import { ChartBarThinIcon } from "../thin/chart-bar-thin.icon";

export const ChartBarIcon = createIcon("ChartBar", {
  bold: ChartBarBoldIcon,
  duotone: ChartBarDuotoneIcon,
  fill: ChartBarFillIcon,
  light: ChartBarLightIcon,
  regular: ChartBarRegularIcon,
  thin: ChartBarThinIcon,
});
