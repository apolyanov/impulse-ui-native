import { createIcon } from "../../hocs/create-icon.hoc";
import { WebcamBoldIcon } from "../bold/webcam-bold.icon";
import { WebcamDuotoneIcon } from "../duotone/webcam-duotone.icon";
import { WebcamFillIcon } from "../fill/webcam-fill.icon";
import { WebcamLightIcon } from "../light/webcam-light.icon";
import { WebcamRegularIcon } from "../regular/webcam-regular.icon";
import { WebcamThinIcon } from "../thin/webcam-thin.icon";

export const WebcamIcon = createIcon("Webcam", {
  bold: WebcamBoldIcon,
  duotone: WebcamDuotoneIcon,
  fill: WebcamFillIcon,
  light: WebcamLightIcon,
  regular: WebcamRegularIcon,
  thin: WebcamThinIcon,
});
