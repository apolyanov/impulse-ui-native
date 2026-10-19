import { createIcon } from "../../hocs/create-icon.hoc";
import { CameraBoldIcon } from "../bold/camera-bold.icon";
import { CameraDuotoneIcon } from "../duotone/camera-duotone.icon";
import { CameraFillIcon } from "../fill/camera-fill.icon";
import { CameraLightIcon } from "../light/camera-light.icon";
import { CameraRegularIcon } from "../regular/camera-regular.icon";
import { CameraThinIcon } from "../thin/camera-thin.icon";

export const CameraIcon = createIcon("Camera", {
  bold: CameraBoldIcon,
  duotone: CameraDuotoneIcon,
  fill: CameraFillIcon,
  light: CameraLightIcon,
  regular: CameraRegularIcon,
  thin: CameraThinIcon,
});
