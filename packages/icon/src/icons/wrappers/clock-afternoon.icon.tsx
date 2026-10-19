import { createIcon } from "../../hocs/create-icon.hoc";
import { ClockAfternoonBoldIcon } from "../bold/clock-afternoon-bold.icon";
import { ClockAfternoonDuotoneIcon } from "../duotone/clock-afternoon-duotone.icon";
import { ClockAfternoonFillIcon } from "../fill/clock-afternoon-fill.icon";
import { ClockAfternoonLightIcon } from "../light/clock-afternoon-light.icon";
import { ClockAfternoonRegularIcon } from "../regular/clock-afternoon-regular.icon";
import { ClockAfternoonThinIcon } from "../thin/clock-afternoon-thin.icon";

export const ClockAfternoonIcon = createIcon("ClockAfternoon", {
  bold: ClockAfternoonBoldIcon,
  duotone: ClockAfternoonDuotoneIcon,
  fill: ClockAfternoonFillIcon,
  light: ClockAfternoonLightIcon,
  regular: ClockAfternoonRegularIcon,
  thin: ClockAfternoonThinIcon,
});
