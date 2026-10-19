import { createIcon } from "../../hocs/create-icon.hoc";
import { DeviceTabletCameraBoldIcon } from "../bold/device-tablet-camera-bold.icon";
import { DeviceTabletCameraDuotoneIcon } from "../duotone/device-tablet-camera-duotone.icon";
import { DeviceTabletCameraFillIcon } from "../fill/device-tablet-camera-fill.icon";
import { DeviceTabletCameraLightIcon } from "../light/device-tablet-camera-light.icon";
import { DeviceTabletCameraRegularIcon } from "../regular/device-tablet-camera-regular.icon";
import { DeviceTabletCameraThinIcon } from "../thin/device-tablet-camera-thin.icon";

export const DeviceTabletCameraIcon = createIcon("DeviceTabletCamera", {
  bold: DeviceTabletCameraBoldIcon,
  duotone: DeviceTabletCameraDuotoneIcon,
  fill: DeviceTabletCameraFillIcon,
  light: DeviceTabletCameraLightIcon,
  regular: DeviceTabletCameraRegularIcon,
  thin: DeviceTabletCameraThinIcon,
});
