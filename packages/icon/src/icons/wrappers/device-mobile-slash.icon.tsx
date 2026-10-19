import { createIcon } from "../../hocs/create-icon.hoc";
import { DeviceMobileSlashBoldIcon } from "../bold/device-mobile-slash-bold.icon";
import { DeviceMobileSlashDuotoneIcon } from "../duotone/device-mobile-slash-duotone.icon";
import { DeviceMobileSlashFillIcon } from "../fill/device-mobile-slash-fill.icon";
import { DeviceMobileSlashLightIcon } from "../light/device-mobile-slash-light.icon";
import { DeviceMobileSlashRegularIcon } from "../regular/device-mobile-slash-regular.icon";
import { DeviceMobileSlashThinIcon } from "../thin/device-mobile-slash-thin.icon";

export const DeviceMobileSlashIcon = createIcon("DeviceMobileSlash", {
  bold: DeviceMobileSlashBoldIcon,
  duotone: DeviceMobileSlashDuotoneIcon,
  fill: DeviceMobileSlashFillIcon,
  light: DeviceMobileSlashLightIcon,
  regular: DeviceMobileSlashRegularIcon,
  thin: DeviceMobileSlashThinIcon,
});
