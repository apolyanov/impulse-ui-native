import { createIcon } from "../../hocs/create-icon.hoc";
import { HeartStraightBoldIcon } from "../bold/heart-straight-bold.icon";
import { HeartStraightDuotoneIcon } from "../duotone/heart-straight-duotone.icon";
import { HeartStraightFillIcon } from "../fill/heart-straight-fill.icon";
import { HeartStraightLightIcon } from "../light/heart-straight-light.icon";
import { HeartStraightRegularIcon } from "../regular/heart-straight-regular.icon";
import { HeartStraightThinIcon } from "../thin/heart-straight-thin.icon";

export const HeartStraightIcon = createIcon("HeartStraight", {
  bold: HeartStraightBoldIcon,
  duotone: HeartStraightDuotoneIcon,
  fill: HeartStraightFillIcon,
  light: HeartStraightLightIcon,
  regular: HeartStraightRegularIcon,
  thin: HeartStraightThinIcon,
});
