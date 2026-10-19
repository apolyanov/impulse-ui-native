import { createIcon } from "../../hocs/create-icon.hoc";
import { GpsSlashBoldIcon } from "../bold/gps-slash-bold.icon";
import { GpsSlashDuotoneIcon } from "../duotone/gps-slash-duotone.icon";
import { GpsSlashFillIcon } from "../fill/gps-slash-fill.icon";
import { GpsSlashLightIcon } from "../light/gps-slash-light.icon";
import { GpsSlashRegularIcon } from "../regular/gps-slash-regular.icon";
import { GpsSlashThinIcon } from "../thin/gps-slash-thin.icon";

export const GpsSlashIcon = createIcon("GpsSlash", {
  bold: GpsSlashBoldIcon,
  duotone: GpsSlashDuotoneIcon,
  fill: GpsSlashFillIcon,
  light: GpsSlashLightIcon,
  regular: GpsSlashRegularIcon,
  thin: GpsSlashThinIcon,
});
