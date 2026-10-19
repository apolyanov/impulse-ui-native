import { createIcon } from "../../hocs/create-icon.hoc";
import { VideoCameraBoldIcon } from "../bold/video-camera-bold.icon";
import { VideoCameraDuotoneIcon } from "../duotone/video-camera-duotone.icon";
import { VideoCameraFillIcon } from "../fill/video-camera-fill.icon";
import { VideoCameraLightIcon } from "../light/video-camera-light.icon";
import { VideoCameraRegularIcon } from "../regular/video-camera-regular.icon";
import { VideoCameraThinIcon } from "../thin/video-camera-thin.icon";

export const VideoCameraIcon = createIcon("VideoCamera", {
  bold: VideoCameraBoldIcon,
  duotone: VideoCameraDuotoneIcon,
  fill: VideoCameraFillIcon,
  light: VideoCameraLightIcon,
  regular: VideoCameraRegularIcon,
  thin: VideoCameraThinIcon,
});
