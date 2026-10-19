import { createIcon } from "../../hocs/create-icon.hoc";
import { MonitorPlayBoldIcon } from "../bold/monitor-play-bold.icon";
import { MonitorPlayDuotoneIcon } from "../duotone/monitor-play-duotone.icon";
import { MonitorPlayFillIcon } from "../fill/monitor-play-fill.icon";
import { MonitorPlayLightIcon } from "../light/monitor-play-light.icon";
import { MonitorPlayRegularIcon } from "../regular/monitor-play-regular.icon";
import { MonitorPlayThinIcon } from "../thin/monitor-play-thin.icon";

export const MonitorPlayIcon = createIcon("MonitorPlay", {
  bold: MonitorPlayBoldIcon,
  duotone: MonitorPlayDuotoneIcon,
  fill: MonitorPlayFillIcon,
  light: MonitorPlayLightIcon,
  regular: MonitorPlayRegularIcon,
  thin: MonitorPlayThinIcon,
});
