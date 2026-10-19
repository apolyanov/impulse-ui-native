import { createIcon } from "../../hocs/create-icon.hoc";
import { SecurityCameraBoldIcon } from "../bold/security-camera-bold.icon";
import { SecurityCameraDuotoneIcon } from "../duotone/security-camera-duotone.icon";
import { SecurityCameraFillIcon } from "../fill/security-camera-fill.icon";
import { SecurityCameraLightIcon } from "../light/security-camera-light.icon";
import { SecurityCameraRegularIcon } from "../regular/security-camera-regular.icon";
import { SecurityCameraThinIcon } from "../thin/security-camera-thin.icon";

export const SecurityCameraIcon = createIcon("SecurityCamera", {
  bold: SecurityCameraBoldIcon,
  duotone: SecurityCameraDuotoneIcon,
  fill: SecurityCameraFillIcon,
  light: SecurityCameraLightIcon,
  regular: SecurityCameraRegularIcon,
  thin: SecurityCameraThinIcon,
});
