import { createIcon } from "../../hocs/create-icon.hoc";
import { HeartHalfBoldIcon } from "../bold/heart-half-bold.icon";
import { HeartHalfDuotoneIcon } from "../duotone/heart-half-duotone.icon";
import { HeartHalfFillIcon } from "../fill/heart-half-fill.icon";
import { HeartHalfLightIcon } from "../light/heart-half-light.icon";
import { HeartHalfRegularIcon } from "../regular/heart-half-regular.icon";
import { HeartHalfThinIcon } from "../thin/heart-half-thin.icon";

export const HeartHalfIcon = createIcon("HeartHalf", {
  bold: HeartHalfBoldIcon,
  duotone: HeartHalfDuotoneIcon,
  fill: HeartHalfFillIcon,
  light: HeartHalfLightIcon,
  regular: HeartHalfRegularIcon,
  thin: HeartHalfThinIcon,
});
