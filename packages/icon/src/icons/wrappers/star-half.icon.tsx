import { createIcon } from "../../hocs/create-icon.hoc";
import { StarHalfBoldIcon } from "../bold/star-half-bold.icon";
import { StarHalfDuotoneIcon } from "../duotone/star-half-duotone.icon";
import { StarHalfFillIcon } from "../fill/star-half-fill.icon";
import { StarHalfLightIcon } from "../light/star-half-light.icon";
import { StarHalfRegularIcon } from "../regular/star-half-regular.icon";
import { StarHalfThinIcon } from "../thin/star-half-thin.icon";

export const StarHalfIcon = createIcon("StarHalf", {
  bold: StarHalfBoldIcon,
  duotone: StarHalfDuotoneIcon,
  fill: StarHalfFillIcon,
  light: StarHalfLightIcon,
  regular: StarHalfRegularIcon,
  thin: StarHalfThinIcon,
});
