import { createIcon } from "../../hocs/create-icon.hoc";
import { DeviceRotateBoldIcon } from "../bold/device-rotate-bold.icon";
import { DeviceRotateDuotoneIcon } from "../duotone/device-rotate-duotone.icon";
import { DeviceRotateFillIcon } from "../fill/device-rotate-fill.icon";
import { DeviceRotateLightIcon } from "../light/device-rotate-light.icon";
import { DeviceRotateRegularIcon } from "../regular/device-rotate-regular.icon";
import { DeviceRotateThinIcon } from "../thin/device-rotate-thin.icon";

export const DeviceRotateIcon = createIcon("DeviceRotate", {
  bold: DeviceRotateBoldIcon,
  duotone: DeviceRotateDuotoneIcon,
  fill: DeviceRotateFillIcon,
  light: DeviceRotateLightIcon,
  regular: DeviceRotateRegularIcon,
  thin: DeviceRotateThinIcon,
});
