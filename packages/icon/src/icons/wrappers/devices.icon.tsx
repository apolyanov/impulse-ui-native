import { createIcon } from "../../hocs/create-icon.hoc";
import { DevicesBoldIcon } from "../bold/devices-bold.icon";
import { DevicesDuotoneIcon } from "../duotone/devices-duotone.icon";
import { DevicesFillIcon } from "../fill/devices-fill.icon";
import { DevicesLightIcon } from "../light/devices-light.icon";
import { DevicesRegularIcon } from "../regular/devices-regular.icon";
import { DevicesThinIcon } from "../thin/devices-thin.icon";

export const DevicesIcon = createIcon("Devices", {
  bold: DevicesBoldIcon,
  duotone: DevicesDuotoneIcon,
  fill: DevicesFillIcon,
  light: DevicesLightIcon,
  regular: DevicesRegularIcon,
  thin: DevicesThinIcon,
});
