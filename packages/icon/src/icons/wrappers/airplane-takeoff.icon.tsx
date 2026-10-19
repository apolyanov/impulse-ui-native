import { createIcon } from "../../hocs/create-icon.hoc";
import { AirplaneTakeoffBoldIcon } from "../bold/airplane-takeoff-bold.icon";
import { AirplaneTakeoffDuotoneIcon } from "../duotone/airplane-takeoff-duotone.icon";
import { AirplaneTakeoffFillIcon } from "../fill/airplane-takeoff-fill.icon";
import { AirplaneTakeoffLightIcon } from "../light/airplane-takeoff-light.icon";
import { AirplaneTakeoffRegularIcon } from "../regular/airplane-takeoff-regular.icon";
import { AirplaneTakeoffThinIcon } from "../thin/airplane-takeoff-thin.icon";

export const AirplaneTakeoffIcon = createIcon("AirplaneTakeoff", {
  bold: AirplaneTakeoffBoldIcon,
  duotone: AirplaneTakeoffDuotoneIcon,
  fill: AirplaneTakeoffFillIcon,
  light: AirplaneTakeoffLightIcon,
  regular: AirplaneTakeoffRegularIcon,
  thin: AirplaneTakeoffThinIcon,
});
