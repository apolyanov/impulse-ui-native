import { createIcon } from "../../hocs/create-icon.hoc";
import { ProjectorScreenChartBoldIcon } from "../bold/projector-screen-chart-bold.icon";
import { ProjectorScreenChartDuotoneIcon } from "../duotone/projector-screen-chart-duotone.icon";
import { ProjectorScreenChartFillIcon } from "../fill/projector-screen-chart-fill.icon";
import { ProjectorScreenChartLightIcon } from "../light/projector-screen-chart-light.icon";
import { ProjectorScreenChartRegularIcon } from "../regular/projector-screen-chart-regular.icon";
import { ProjectorScreenChartThinIcon } from "../thin/projector-screen-chart-thin.icon";

export const ProjectorScreenChartIcon = createIcon("ProjectorScreenChart", {
  bold: ProjectorScreenChartBoldIcon,
  duotone: ProjectorScreenChartDuotoneIcon,
  fill: ProjectorScreenChartFillIcon,
  light: ProjectorScreenChartLightIcon,
  regular: ProjectorScreenChartRegularIcon,
  thin: ProjectorScreenChartThinIcon,
});
