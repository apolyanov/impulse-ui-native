import { createIcon } from "../../hocs/create-icon.hoc";
import { TrafficSignalBoldIcon } from "../bold/traffic-signal-bold.icon";
import { TrafficSignalDuotoneIcon } from "../duotone/traffic-signal-duotone.icon";
import { TrafficSignalFillIcon } from "../fill/traffic-signal-fill.icon";
import { TrafficSignalLightIcon } from "../light/traffic-signal-light.icon";
import { TrafficSignalRegularIcon } from "../regular/traffic-signal-regular.icon";
import { TrafficSignalThinIcon } from "../thin/traffic-signal-thin.icon";

export const TrafficSignalIcon = createIcon("TrafficSignal", {
  bold: TrafficSignalBoldIcon,
  duotone: TrafficSignalDuotoneIcon,
  fill: TrafficSignalFillIcon,
  light: TrafficSignalLightIcon,
  regular: TrafficSignalRegularIcon,
  thin: TrafficSignalThinIcon,
});
