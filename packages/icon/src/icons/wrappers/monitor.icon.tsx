import { createIcon } from "../../hocs/create-icon.hoc";
import { MonitorBoldIcon } from "../bold/monitor-bold.icon";
import { MonitorDuotoneIcon } from "../duotone/monitor-duotone.icon";
import { MonitorFillIcon } from "../fill/monitor-fill.icon";
import { MonitorLightIcon } from "../light/monitor-light.icon";
import { MonitorRegularIcon } from "../regular/monitor-regular.icon";
import { MonitorThinIcon } from "../thin/monitor-thin.icon";

export const MonitorIcon = createIcon("Monitor", {
  bold: MonitorBoldIcon,
  duotone: MonitorDuotoneIcon,
  fill: MonitorFillIcon,
  light: MonitorLightIcon,
  regular: MonitorRegularIcon,
  thin: MonitorThinIcon,
});
