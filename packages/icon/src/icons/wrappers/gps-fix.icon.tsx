import { createIcon } from "../../hocs/create-icon.hoc";
import { GpsFixBoldIcon } from "../bold/gps-fix-bold.icon";
import { GpsFixDuotoneIcon } from "../duotone/gps-fix-duotone.icon";
import { GpsFixFillIcon } from "../fill/gps-fix-fill.icon";
import { GpsFixLightIcon } from "../light/gps-fix-light.icon";
import { GpsFixRegularIcon } from "../regular/gps-fix-regular.icon";
import { GpsFixThinIcon } from "../thin/gps-fix-thin.icon";

export const GpsFixIcon = createIcon("GpsFix", {
  bold: GpsFixBoldIcon,
  duotone: GpsFixDuotoneIcon,
  fill: GpsFixFillIcon,
  light: GpsFixLightIcon,
  regular: GpsFixRegularIcon,
  thin: GpsFixThinIcon,
});
