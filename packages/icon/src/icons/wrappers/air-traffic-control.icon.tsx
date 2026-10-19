import { createIcon } from "../../hocs/create-icon.hoc";
import { AirTrafficControlBoldIcon } from "../bold/air-traffic-control-bold.icon";
import { AirTrafficControlDuotoneIcon } from "../duotone/air-traffic-control-duotone.icon";
import { AirTrafficControlFillIcon } from "../fill/air-traffic-control-fill.icon";
import { AirTrafficControlLightIcon } from "../light/air-traffic-control-light.icon";
import { AirTrafficControlRegularIcon } from "../regular/air-traffic-control-regular.icon";
import { AirTrafficControlThinIcon } from "../thin/air-traffic-control-thin.icon";

export const AirTrafficControlIcon = createIcon("AirTrafficControl", {
  bold: AirTrafficControlBoldIcon,
  duotone: AirTrafficControlDuotoneIcon,
  fill: AirTrafficControlFillIcon,
  light: AirTrafficControlLightIcon,
  regular: AirTrafficControlRegularIcon,
  thin: AirTrafficControlThinIcon,
});
