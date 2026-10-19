import { createIcon } from "../../hocs/create-icon.hoc";
import { VideoBoldIcon } from "../bold/video-bold.icon";
import { VideoDuotoneIcon } from "../duotone/video-duotone.icon";
import { VideoFillIcon } from "../fill/video-fill.icon";
import { VideoLightIcon } from "../light/video-light.icon";
import { VideoRegularIcon } from "../regular/video-regular.icon";
import { VideoThinIcon } from "../thin/video-thin.icon";

export const VideoIcon = createIcon("Video", {
  bold: VideoBoldIcon,
  duotone: VideoDuotoneIcon,
  fill: VideoFillIcon,
  light: VideoLightIcon,
  regular: VideoRegularIcon,
  thin: VideoThinIcon,
});
