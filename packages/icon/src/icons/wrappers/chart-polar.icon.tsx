import { createIcon } from "../../hocs/create-icon.hoc";
import { ChartPolarBoldIcon } from "../bold/chart-polar-bold.icon";
import { ChartPolarDuotoneIcon } from "../duotone/chart-polar-duotone.icon";
import { ChartPolarFillIcon } from "../fill/chart-polar-fill.icon";
import { ChartPolarLightIcon } from "../light/chart-polar-light.icon";
import { ChartPolarRegularIcon } from "../regular/chart-polar-regular.icon";
import { ChartPolarThinIcon } from "../thin/chart-polar-thin.icon";

export const ChartPolarIcon = createIcon("ChartPolar", {
  bold: ChartPolarBoldIcon,
  duotone: ChartPolarDuotoneIcon,
  fill: ChartPolarFillIcon,
  light: ChartPolarLightIcon,
  regular: ChartPolarRegularIcon,
  thin: ChartPolarThinIcon,
});
