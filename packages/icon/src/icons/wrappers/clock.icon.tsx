import { createIcon } from "../../hocs/create-icon.hoc";
import { ClockBoldIcon } from "../bold/clock-bold.icon";
import { ClockDuotoneIcon } from "../duotone/clock-duotone.icon";
import { ClockFillIcon } from "../fill/clock-fill.icon";
import { ClockLightIcon } from "../light/clock-light.icon";
import { ClockRegularIcon } from "../regular/clock-regular.icon";
import { ClockThinIcon } from "../thin/clock-thin.icon";

export const ClockIcon = createIcon("Clock", {
  bold: ClockBoldIcon,
  duotone: ClockDuotoneIcon,
  fill: ClockFillIcon,
  light: ClockLightIcon,
  regular: ClockRegularIcon,
  thin: ClockThinIcon,
});
