import { createIcon } from "../../hocs/create-icon.hoc";
import { PauseBoldIcon } from "../bold/pause-bold.icon";
import { PauseDuotoneIcon } from "../duotone/pause-duotone.icon";
import { PauseFillIcon } from "../fill/pause-fill.icon";
import { PauseLightIcon } from "../light/pause-light.icon";
import { PauseRegularIcon } from "../regular/pause-regular.icon";
import { PauseThinIcon } from "../thin/pause-thin.icon";

export const PauseIcon = createIcon("Pause", {
  bold: PauseBoldIcon,
  duotone: PauseDuotoneIcon,
  fill: PauseFillIcon,
  light: PauseLightIcon,
  regular: PauseRegularIcon,
  thin: PauseThinIcon,
});
