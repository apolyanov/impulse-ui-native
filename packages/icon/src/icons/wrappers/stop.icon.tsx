import { createIcon } from "../../hocs/create-icon.hoc";
import { StopBoldIcon } from "../bold/stop-bold.icon";
import { StopDuotoneIcon } from "../duotone/stop-duotone.icon";
import { StopFillIcon } from "../fill/stop-fill.icon";
import { StopLightIcon } from "../light/stop-light.icon";
import { StopRegularIcon } from "../regular/stop-regular.icon";
import { StopThinIcon } from "../thin/stop-thin.icon";

export const StopIcon = createIcon("Stop", {
  bold: StopBoldIcon,
  duotone: StopDuotoneIcon,
  fill: StopFillIcon,
  light: StopLightIcon,
  regular: StopRegularIcon,
  thin: StopThinIcon,
});
