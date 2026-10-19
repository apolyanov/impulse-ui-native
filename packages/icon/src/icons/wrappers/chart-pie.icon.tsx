import { createIcon } from "../../hocs/create-icon.hoc";
import { ChartPieBoldIcon } from "../bold/chart-pie-bold.icon";
import { ChartPieDuotoneIcon } from "../duotone/chart-pie-duotone.icon";
import { ChartPieFillIcon } from "../fill/chart-pie-fill.icon";
import { ChartPieLightIcon } from "../light/chart-pie-light.icon";
import { ChartPieRegularIcon } from "../regular/chart-pie-regular.icon";
import { ChartPieThinIcon } from "../thin/chart-pie-thin.icon";

export const ChartPieIcon = createIcon("ChartPie", {
  bold: ChartPieBoldIcon,
  duotone: ChartPieDuotoneIcon,
  fill: ChartPieFillIcon,
  light: ChartPieLightIcon,
  regular: ChartPieRegularIcon,
  thin: ChartPieThinIcon,
});
