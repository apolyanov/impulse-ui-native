import { createIcon } from "../../hocs/create-icon.hoc";
import { WebcamSlashBoldIcon } from "../bold/webcam-slash-bold.icon";
import { WebcamSlashDuotoneIcon } from "../duotone/webcam-slash-duotone.icon";
import { WebcamSlashFillIcon } from "../fill/webcam-slash-fill.icon";
import { WebcamSlashLightIcon } from "../light/webcam-slash-light.icon";
import { WebcamSlashRegularIcon } from "../regular/webcam-slash-regular.icon";
import { WebcamSlashThinIcon } from "../thin/webcam-slash-thin.icon";

export const WebcamSlashIcon = createIcon("WebcamSlash", {
  bold: WebcamSlashBoldIcon,
  duotone: WebcamSlashDuotoneIcon,
  fill: WebcamSlashFillIcon,
  light: WebcamSlashLightIcon,
  regular: WebcamSlashRegularIcon,
  thin: WebcamSlashThinIcon,
});
