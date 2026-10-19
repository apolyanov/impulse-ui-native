import { createIcon } from "../../hocs/create-icon.hoc";
import { PauseCircleBoldIcon } from "../bold/pause-circle-bold.icon";
import { PauseCircleDuotoneIcon } from "../duotone/pause-circle-duotone.icon";
import { PauseCircleFillIcon } from "../fill/pause-circle-fill.icon";
import { PauseCircleLightIcon } from "../light/pause-circle-light.icon";
import { PauseCircleRegularIcon } from "../regular/pause-circle-regular.icon";
import { PauseCircleThinIcon } from "../thin/pause-circle-thin.icon";

export const PauseCircleIcon = createIcon("PauseCircle", {
  bold: PauseCircleBoldIcon,
  duotone: PauseCircleDuotoneIcon,
  fill: PauseCircleFillIcon,
  light: PauseCircleLightIcon,
  regular: PauseCircleRegularIcon,
  thin: PauseCircleThinIcon,
});
