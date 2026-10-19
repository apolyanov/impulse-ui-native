import { createIcon } from "../../hocs/create-icon.hoc";
import { GpsBoldIcon } from "../bold/gps-bold.icon";
import { GpsDuotoneIcon } from "../duotone/gps-duotone.icon";
import { GpsFillIcon } from "../fill/gps-fill.icon";
import { GpsLightIcon } from "../light/gps-light.icon";
import { GpsRegularIcon } from "../regular/gps-regular.icon";
import { GpsThinIcon } from "../thin/gps-thin.icon";

export const GpsIcon = createIcon("Gps", {
  bold: GpsBoldIcon,
  duotone: GpsDuotoneIcon,
  fill: GpsFillIcon,
  light: GpsLightIcon,
  regular: GpsRegularIcon,
  thin: GpsThinIcon,
});
