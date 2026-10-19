import { createIcon } from "../../hocs/create-icon.hoc";
import { PlayPauseBoldIcon } from "../bold/play-pause-bold.icon";
import { PlayPauseDuotoneIcon } from "../duotone/play-pause-duotone.icon";
import { PlayPauseFillIcon } from "../fill/play-pause-fill.icon";
import { PlayPauseLightIcon } from "../light/play-pause-light.icon";
import { PlayPauseRegularIcon } from "../regular/play-pause-regular.icon";
import { PlayPauseThinIcon } from "../thin/play-pause-thin.icon";

export const PlayPauseIcon = createIcon("PlayPause", {
  bold: PlayPauseBoldIcon,
  duotone: PlayPauseDuotoneIcon,
  fill: PlayPauseFillIcon,
  light: PlayPauseLightIcon,
  regular: PlayPauseRegularIcon,
  thin: PlayPauseThinIcon,
});
