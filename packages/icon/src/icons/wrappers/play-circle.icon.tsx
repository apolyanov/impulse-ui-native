import { createIcon } from "../../hocs/create-icon.hoc";
import { PlayCircleBoldIcon } from "../bold/play-circle-bold.icon";
import { PlayCircleDuotoneIcon } from "../duotone/play-circle-duotone.icon";
import { PlayCircleFillIcon } from "../fill/play-circle-fill.icon";
import { PlayCircleLightIcon } from "../light/play-circle-light.icon";
import { PlayCircleRegularIcon } from "../regular/play-circle-regular.icon";
import { PlayCircleThinIcon } from "../thin/play-circle-thin.icon";

export const PlayCircleIcon = createIcon("PlayCircle", {
  bold: PlayCircleBoldIcon,
  duotone: PlayCircleDuotoneIcon,
  fill: PlayCircleFillIcon,
  light: PlayCircleLightIcon,
  regular: PlayCircleRegularIcon,
  thin: PlayCircleThinIcon,
});
