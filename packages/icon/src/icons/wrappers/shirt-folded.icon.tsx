import { createIcon } from "../../hocs/create-icon.hoc";
import { ShirtFoldedBoldIcon } from "../bold/shirt-folded-bold.icon";
import { ShirtFoldedDuotoneIcon } from "../duotone/shirt-folded-duotone.icon";
import { ShirtFoldedFillIcon } from "../fill/shirt-folded-fill.icon";
import { ShirtFoldedLightIcon } from "../light/shirt-folded-light.icon";
import { ShirtFoldedRegularIcon } from "../regular/shirt-folded-regular.icon";
import { ShirtFoldedThinIcon } from "../thin/shirt-folded-thin.icon";

export const ShirtFoldedIcon = createIcon("ShirtFolded", {
  bold: ShirtFoldedBoldIcon,
  duotone: ShirtFoldedDuotoneIcon,
  fill: ShirtFoldedFillIcon,
  light: ShirtFoldedLightIcon,
  regular: ShirtFoldedRegularIcon,
  thin: ShirtFoldedThinIcon,
});
