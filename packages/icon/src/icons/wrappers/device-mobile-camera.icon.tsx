import { createIcon } from "../../hocs/create-icon.hoc";
import { DeviceMobileCameraBoldIcon } from "../bold/device-mobile-camera-bold.icon";
import { DeviceMobileCameraDuotoneIcon } from "../duotone/device-mobile-camera-duotone.icon";
import { DeviceMobileCameraFillIcon } from "../fill/device-mobile-camera-fill.icon";
import { DeviceMobileCameraLightIcon } from "../light/device-mobile-camera-light.icon";
import { DeviceMobileCameraRegularIcon } from "../regular/device-mobile-camera-regular.icon";
import { DeviceMobileCameraThinIcon } from "../thin/device-mobile-camera-thin.icon";

export const DeviceMobileCameraIcon = createIcon("DeviceMobileCamera", {
  bold: DeviceMobileCameraBoldIcon,
  duotone: DeviceMobileCameraDuotoneIcon,
  fill: DeviceMobileCameraFillIcon,
  light: DeviceMobileCameraLightIcon,
  regular: DeviceMobileCameraRegularIcon,
  thin: DeviceMobileCameraThinIcon,
});
