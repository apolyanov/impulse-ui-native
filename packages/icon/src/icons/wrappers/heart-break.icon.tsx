import { createIcon } from "../../hocs/create-icon.hoc";
import { HeartBreakBoldIcon } from "../bold/heart-break-bold.icon";
import { HeartBreakDuotoneIcon } from "../duotone/heart-break-duotone.icon";
import { HeartBreakFillIcon } from "../fill/heart-break-fill.icon";
import { HeartBreakLightIcon } from "../light/heart-break-light.icon";
import { HeartBreakRegularIcon } from "../regular/heart-break-regular.icon";
import { HeartBreakThinIcon } from "../thin/heart-break-thin.icon";

export const HeartBreakIcon = createIcon("HeartBreak", {
  bold: HeartBreakBoldIcon,
  duotone: HeartBreakDuotoneIcon,
  fill: HeartBreakFillIcon,
  light: HeartBreakLightIcon,
  regular: HeartBreakRegularIcon,
  thin: HeartBreakThinIcon,
});
