import { createIcon } from "../../hocs/create-icon.hoc";
import { VideoCameraSlashBoldIcon } from "../bold/video-camera-slash-bold.icon";
import { VideoCameraSlashDuotoneIcon } from "../duotone/video-camera-slash-duotone.icon";
import { VideoCameraSlashFillIcon } from "../fill/video-camera-slash-fill.icon";
import { VideoCameraSlashLightIcon } from "../light/video-camera-slash-light.icon";
import { VideoCameraSlashRegularIcon } from "../regular/video-camera-slash-regular.icon";
import { VideoCameraSlashThinIcon } from "../thin/video-camera-slash-thin.icon";

export const VideoCameraSlashIcon = createIcon("VideoCameraSlash", {
  bold: VideoCameraSlashBoldIcon,
  duotone: VideoCameraSlashDuotoneIcon,
  fill: VideoCameraSlashFillIcon,
  light: VideoCameraSlashLightIcon,
  regular: VideoCameraSlashRegularIcon,
  thin: VideoCameraSlashThinIcon,
});
