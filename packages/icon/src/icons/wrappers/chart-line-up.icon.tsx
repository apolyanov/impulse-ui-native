import { createIcon } from "../../hocs/create-icon.hoc";
import { ChartLineUpBoldIcon } from "../bold/chart-line-up-bold.icon";
import { ChartLineUpDuotoneIcon } from "../duotone/chart-line-up-duotone.icon";
import { ChartLineUpFillIcon } from "../fill/chart-line-up-fill.icon";
import { ChartLineUpLightIcon } from "../light/chart-line-up-light.icon";
import { ChartLineUpRegularIcon } from "../regular/chart-line-up-regular.icon";
import { ChartLineUpThinIcon } from "../thin/chart-line-up-thin.icon";

export const ChartLineUpIcon = createIcon("ChartLineUp", {
  bold: ChartLineUpBoldIcon,
  duotone: ChartLineUpDuotoneIcon,
  fill: ChartLineUpFillIcon,
  light: ChartLineUpLightIcon,
  regular: ChartLineUpRegularIcon,
  thin: ChartLineUpThinIcon,
});
