import { createIcon } from "../../hocs/create-icon.hoc";
import { DeviceMobileBoldIcon } from "../bold/device-mobile-bold.icon";
import { DeviceMobileDuotoneIcon } from "../duotone/device-mobile-duotone.icon";
import { DeviceMobileFillIcon } from "../fill/device-mobile-fill.icon";
import { DeviceMobileLightIcon } from "../light/device-mobile-light.icon";
import { DeviceMobileRegularIcon } from "../regular/device-mobile-regular.icon";
import { DeviceMobileThinIcon } from "../thin/device-mobile-thin.icon";

export const DeviceMobileIcon = createIcon("DeviceMobile", {
  bold: DeviceMobileBoldIcon,
  duotone: DeviceMobileDuotoneIcon,
  fill: DeviceMobileFillIcon,
  light: DeviceMobileLightIcon,
  regular: DeviceMobileRegularIcon,
  thin: DeviceMobileThinIcon,
});
