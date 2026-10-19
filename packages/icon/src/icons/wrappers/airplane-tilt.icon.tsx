import { createIcon } from "../../hocs/create-icon.hoc";
import { AirplaneTiltBoldIcon } from "../bold/airplane-tilt-bold.icon";
import { AirplaneTiltDuotoneIcon } from "../duotone/airplane-tilt-duotone.icon";
import { AirplaneTiltFillIcon } from "../fill/airplane-tilt-fill.icon";
import { AirplaneTiltLightIcon } from "../light/airplane-tilt-light.icon";
import { AirplaneTiltRegularIcon } from "../regular/airplane-tilt-regular.icon";
import { AirplaneTiltThinIcon } from "../thin/airplane-tilt-thin.icon";

export const AirplaneTiltIcon = createIcon("AirplaneTilt", {
  bold: AirplaneTiltBoldIcon,
  duotone: AirplaneTiltDuotoneIcon,
  fill: AirplaneTiltFillIcon,
  light: AirplaneTiltLightIcon,
  regular: AirplaneTiltRegularIcon,
  thin: AirplaneTiltThinIcon,
});
