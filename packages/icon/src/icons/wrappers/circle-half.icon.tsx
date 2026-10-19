import { createIcon } from "../../hocs/create-icon.hoc";
import { CircleHalfBoldIcon } from "../bold/circle-half-bold.icon";
import { CircleHalfDuotoneIcon } from "../duotone/circle-half-duotone.icon";
import { CircleHalfFillIcon } from "../fill/circle-half-fill.icon";
import { CircleHalfLightIcon } from "../light/circle-half-light.icon";
import { CircleHalfRegularIcon } from "../regular/circle-half-regular.icon";
import { CircleHalfThinIcon } from "../thin/circle-half-thin.icon";

export const CircleHalfIcon = createIcon("CircleHalf", {
  bold: CircleHalfBoldIcon,
  duotone: CircleHalfDuotoneIcon,
  fill: CircleHalfFillIcon,
  light: CircleHalfLightIcon,
  regular: CircleHalfRegularIcon,
  thin: CircleHalfThinIcon,
});
