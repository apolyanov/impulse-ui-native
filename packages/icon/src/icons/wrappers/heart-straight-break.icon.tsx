import { createIcon } from "../../hocs/create-icon.hoc";
import { HeartStraightBreakBoldIcon } from "../bold/heart-straight-break-bold.icon";
import { HeartStraightBreakDuotoneIcon } from "../duotone/heart-straight-break-duotone.icon";
import { HeartStraightBreakFillIcon } from "../fill/heart-straight-break-fill.icon";
import { HeartStraightBreakLightIcon } from "../light/heart-straight-break-light.icon";
import { HeartStraightBreakRegularIcon } from "../regular/heart-straight-break-regular.icon";
import { HeartStraightBreakThinIcon } from "../thin/heart-straight-break-thin.icon";

export const HeartStraightBreakIcon = createIcon("HeartStraightBreak", {
  bold: HeartStraightBreakBoldIcon,
  duotone: HeartStraightBreakDuotoneIcon,
  fill: HeartStraightBreakFillIcon,
  light: HeartStraightBreakLightIcon,
  regular: HeartStraightBreakRegularIcon,
  thin: HeartStraightBreakThinIcon,
});
