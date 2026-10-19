import { createIcon } from "../../hocs/create-icon.hoc";
import { CameraRotateBoldIcon } from "../bold/camera-rotate-bold.icon";
import { CameraRotateDuotoneIcon } from "../duotone/camera-rotate-duotone.icon";
import { CameraRotateFillIcon } from "../fill/camera-rotate-fill.icon";
import { CameraRotateLightIcon } from "../light/camera-rotate-light.icon";
import { CameraRotateRegularIcon } from "../regular/camera-rotate-regular.icon";
import { CameraRotateThinIcon } from "../thin/camera-rotate-thin.icon";

export const CameraRotateIcon = createIcon("CameraRotate", {
  bold: CameraRotateBoldIcon,
  duotone: CameraRotateDuotoneIcon,
  fill: CameraRotateFillIcon,
  light: CameraRotateLightIcon,
  regular: CameraRotateRegularIcon,
  thin: CameraRotateThinIcon,
});
