import { createIcon } from "../../hocs/create-icon.hoc";
import { MonitorArrowUpBoldIcon } from "../bold/monitor-arrow-up-bold.icon";
import { MonitorArrowUpDuotoneIcon } from "../duotone/monitor-arrow-up-duotone.icon";
import { MonitorArrowUpFillIcon } from "../fill/monitor-arrow-up-fill.icon";
import { MonitorArrowUpLightIcon } from "../light/monitor-arrow-up-light.icon";
import { MonitorArrowUpRegularIcon } from "../regular/monitor-arrow-up-regular.icon";
import { MonitorArrowUpThinIcon } from "../thin/monitor-arrow-up-thin.icon";

export const MonitorArrowUpIcon = createIcon("MonitorArrowUp", {
  bold: MonitorArrowUpBoldIcon,
  duotone: MonitorArrowUpDuotoneIcon,
  fill: MonitorArrowUpFillIcon,
  light: MonitorArrowUpLightIcon,
  regular: MonitorArrowUpRegularIcon,
  thin: MonitorArrowUpThinIcon,
});
