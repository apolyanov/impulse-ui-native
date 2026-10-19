import { createIcon } from "../../hocs/create-icon.hoc";
import { TrafficSignBoldIcon } from "../bold/traffic-sign-bold.icon";
import { TrafficSignDuotoneIcon } from "../duotone/traffic-sign-duotone.icon";
import { TrafficSignFillIcon } from "../fill/traffic-sign-fill.icon";
import { TrafficSignLightIcon } from "../light/traffic-sign-light.icon";
import { TrafficSignRegularIcon } from "../regular/traffic-sign-regular.icon";
import { TrafficSignThinIcon } from "../thin/traffic-sign-thin.icon";

export const TrafficSignIcon = createIcon("TrafficSign", {
  bold: TrafficSignBoldIcon,
  duotone: TrafficSignDuotoneIcon,
  fill: TrafficSignFillIcon,
  light: TrafficSignLightIcon,
  regular: TrafficSignRegularIcon,
  thin: TrafficSignThinIcon,
});
