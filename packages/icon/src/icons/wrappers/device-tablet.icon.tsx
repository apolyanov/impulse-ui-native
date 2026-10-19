import { createIcon } from "../../hocs/create-icon.hoc";
import { DeviceTabletBoldIcon } from "../bold/device-tablet-bold.icon";
import { DeviceTabletDuotoneIcon } from "../duotone/device-tablet-duotone.icon";
import { DeviceTabletFillIcon } from "../fill/device-tablet-fill.icon";
import { DeviceTabletLightIcon } from "../light/device-tablet-light.icon";
import { DeviceTabletRegularIcon } from "../regular/device-tablet-regular.icon";
import { DeviceTabletThinIcon } from "../thin/device-tablet-thin.icon";

export const DeviceTabletIcon = createIcon("DeviceTablet", {
  bold: DeviceTabletBoldIcon,
  duotone: DeviceTabletDuotoneIcon,
  fill: DeviceTabletFillIcon,
  light: DeviceTabletLightIcon,
  regular: DeviceTabletRegularIcon,
  thin: DeviceTabletThinIcon,
});
