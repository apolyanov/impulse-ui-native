import { createIcon } from "../../hocs/create-icon.hoc";
import { ChartLineBoldIcon } from "../bold/chart-line-bold.icon";
import { ChartLineDuotoneIcon } from "../duotone/chart-line-duotone.icon";
import { ChartLineFillIcon } from "../fill/chart-line-fill.icon";
import { ChartLineLightIcon } from "../light/chart-line-light.icon";
import { ChartLineRegularIcon } from "../regular/chart-line-regular.icon";
import { ChartLineThinIcon } from "../thin/chart-line-thin.icon";

export const ChartLineIcon = createIcon("ChartLine", {
  bold: ChartLineBoldIcon,
  duotone: ChartLineDuotoneIcon,
  fill: ChartLineFillIcon,
  light: ChartLineLightIcon,
  regular: ChartLineRegularIcon,
  thin: ChartLineThinIcon,
});
