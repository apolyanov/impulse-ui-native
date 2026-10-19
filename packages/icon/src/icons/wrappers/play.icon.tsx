import { createIcon } from "../../hocs/create-icon.hoc";
import { PlayBoldIcon } from "../bold/play-bold.icon";
import { PlayDuotoneIcon } from "../duotone/play-duotone.icon";
import { PlayFillIcon } from "../fill/play-fill.icon";
import { PlayLightIcon } from "../light/play-light.icon";
import { PlayRegularIcon } from "../regular/play-regular.icon";
import { PlayThinIcon } from "../thin/play-thin.icon";

export const PlayIcon = createIcon("Play", {
  bold: PlayBoldIcon,
  duotone: PlayDuotoneIcon,
  fill: PlayFillIcon,
  light: PlayLightIcon,
  regular: PlayRegularIcon,
  thin: PlayThinIcon,
});
