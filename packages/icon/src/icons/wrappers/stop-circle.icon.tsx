import { createIcon } from "../../hocs/create-icon.hoc";
import { StopCircleBoldIcon } from "../bold/stop-circle-bold.icon";
import { StopCircleDuotoneIcon } from "../duotone/stop-circle-duotone.icon";
import { StopCircleFillIcon } from "../fill/stop-circle-fill.icon";
import { StopCircleLightIcon } from "../light/stop-circle-light.icon";
import { StopCircleRegularIcon } from "../regular/stop-circle-regular.icon";
import { StopCircleThinIcon } from "../thin/stop-circle-thin.icon";

export const StopCircleIcon = createIcon("StopCircle", {
  bold: StopCircleBoldIcon,
  duotone: StopCircleDuotoneIcon,
  fill: StopCircleFillIcon,
  light: StopCircleLightIcon,
  regular: StopCircleRegularIcon,
  thin: StopCircleThinIcon,
});
