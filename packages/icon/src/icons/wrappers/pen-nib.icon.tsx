import { createIcon } from "../../hocs/create-icon.hoc";
import { PenNibBoldIcon } from "../bold/pen-nib-bold.icon";
import { PenNibDuotoneIcon } from "../duotone/pen-nib-duotone.icon";
import { PenNibFillIcon } from "../fill/pen-nib-fill.icon";
import { PenNibLightIcon } from "../light/pen-nib-light.icon";
import { PenNibRegularIcon } from "../regular/pen-nib-regular.icon";
import { PenNibThinIcon } from "../thin/pen-nib-thin.icon";

export const PenNibIcon = createIcon("PenNib", {
  bold: PenNibBoldIcon,
  duotone: PenNibDuotoneIcon,
  fill: PenNibFillIcon,
  light: PenNibLightIcon,
  regular: PenNibRegularIcon,
  thin: PenNibThinIcon,
});
