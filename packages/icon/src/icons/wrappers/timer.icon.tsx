import { createIcon } from "../../hocs/create-icon.hoc";
import { TimerBoldIcon } from "../bold/timer-bold.icon";
import { TimerDuotoneIcon } from "../duotone/timer-duotone.icon";
import { TimerFillIcon } from "../fill/timer-fill.icon";
import { TimerLightIcon } from "../light/timer-light.icon";
import { TimerRegularIcon } from "../regular/timer-regular.icon";
import { TimerThinIcon } from "../thin/timer-thin.icon";

export const TimerIcon = createIcon("Timer", {
  bold: TimerBoldIcon,
  duotone: TimerDuotoneIcon,
  fill: TimerFillIcon,
  light: TimerLightIcon,
  regular: TimerRegularIcon,
  thin: TimerThinIcon,
});
