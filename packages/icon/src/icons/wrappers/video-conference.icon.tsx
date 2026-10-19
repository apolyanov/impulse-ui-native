import { createIcon } from "../../hocs/create-icon.hoc";
import { VideoConferenceBoldIcon } from "../bold/video-conference-bold.icon";
import { VideoConferenceDuotoneIcon } from "../duotone/video-conference-duotone.icon";
import { VideoConferenceFillIcon } from "../fill/video-conference-fill.icon";
import { VideoConferenceLightIcon } from "../light/video-conference-light.icon";
import { VideoConferenceRegularIcon } from "../regular/video-conference-regular.icon";
import { VideoConferenceThinIcon } from "../thin/video-conference-thin.icon";

export const VideoConferenceIcon = createIcon("VideoConference", {
  bold: VideoConferenceBoldIcon,
  duotone: VideoConferenceDuotoneIcon,
  fill: VideoConferenceFillIcon,
  light: VideoConferenceLightIcon,
  regular: VideoConferenceRegularIcon,
  thin: VideoConferenceThinIcon,
});
