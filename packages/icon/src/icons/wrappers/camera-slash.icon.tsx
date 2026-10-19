import { createIcon } from "../../hocs/create-icon.hoc";
import { CameraSlashBoldIcon } from "../bold/camera-slash-bold.icon";
import { CameraSlashDuotoneIcon } from "../duotone/camera-slash-duotone.icon";
import { CameraSlashFillIcon } from "../fill/camera-slash-fill.icon";
import { CameraSlashLightIcon } from "../light/camera-slash-light.icon";
import { CameraSlashRegularIcon } from "../regular/camera-slash-regular.icon";
import { CameraSlashThinIcon } from "../thin/camera-slash-thin.icon";

export const CameraSlashIcon = createIcon("CameraSlash", {
  bold: CameraSlashBoldIcon,
  duotone: CameraSlashDuotoneIcon,
  fill: CameraSlashFillIcon,
  light: CameraSlashLightIcon,
  regular: CameraSlashRegularIcon,
  thin: CameraSlashThinIcon,
});
