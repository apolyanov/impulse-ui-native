import { createIcon } from "../../hocs/create-icon.hoc";
import { CameraPlusBoldIcon } from "../bold/camera-plus-bold.icon";
import { CameraPlusDuotoneIcon } from "../duotone/camera-plus-duotone.icon";
import { CameraPlusFillIcon } from "../fill/camera-plus-fill.icon";
import { CameraPlusLightIcon } from "../light/camera-plus-light.icon";
import { CameraPlusRegularIcon } from "../regular/camera-plus-regular.icon";
import { CameraPlusThinIcon } from "../thin/camera-plus-thin.icon";

export const CameraPlusIcon = createIcon("CameraPlus", {
  bold: CameraPlusBoldIcon,
  duotone: CameraPlusDuotoneIcon,
  fill: CameraPlusFillIcon,
  light: CameraPlusLightIcon,
  regular: CameraPlusRegularIcon,
  thin: CameraPlusThinIcon,
});
