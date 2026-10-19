import { createIcon } from "../../hocs/create-icon.hoc";
import { PresentationChartBoldIcon } from "../bold/presentation-chart-bold.icon";
import { PresentationChartDuotoneIcon } from "../duotone/presentation-chart-duotone.icon";
import { PresentationChartFillIcon } from "../fill/presentation-chart-fill.icon";
import { PresentationChartLightIcon } from "../light/presentation-chart-light.icon";
import { PresentationChartRegularIcon } from "../regular/presentation-chart-regular.icon";
import { PresentationChartThinIcon } from "../thin/presentation-chart-thin.icon";

export const PresentationChartIcon = createIcon("PresentationChart", {
  bold: PresentationChartBoldIcon,
  duotone: PresentationChartDuotoneIcon,
  fill: PresentationChartFillIcon,
  light: PresentationChartLightIcon,
  regular: PresentationChartRegularIcon,
  thin: PresentationChartThinIcon,
});
