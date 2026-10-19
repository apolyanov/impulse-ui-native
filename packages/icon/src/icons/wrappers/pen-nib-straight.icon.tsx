import { createIcon } from "../../hocs/create-icon.hoc";
import { PenNibStraightBoldIcon } from "../bold/pen-nib-straight-bold.icon";
import { PenNibStraightDuotoneIcon } from "../duotone/pen-nib-straight-duotone.icon";
import { PenNibStraightFillIcon } from "../fill/pen-nib-straight-fill.icon";
import { PenNibStraightLightIcon } from "../light/pen-nib-straight-light.icon";
import { PenNibStraightRegularIcon } from "../regular/pen-nib-straight-regular.icon";
import { PenNibStraightThinIcon } from "../thin/pen-nib-straight-thin.icon";

export const PenNibStraightIcon = createIcon("PenNibStraight", {
  bold: PenNibStraightBoldIcon,
  duotone: PenNibStraightDuotoneIcon,
  fill: PenNibStraightFillIcon,
  light: PenNibStraightLightIcon,
  regular: PenNibStraightRegularIcon,
  thin: PenNibStraightThinIcon,
});
