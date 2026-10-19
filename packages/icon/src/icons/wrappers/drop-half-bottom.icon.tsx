import { createIcon } from "../../hocs/create-icon.hoc";
import { DropHalfBottomBoldIcon } from "../bold/drop-half-bottom-bold.icon";
import { DropHalfBottomDuotoneIcon } from "../duotone/drop-half-bottom-duotone.icon";
import { DropHalfBottomFillIcon } from "../fill/drop-half-bottom-fill.icon";
import { DropHalfBottomLightIcon } from "../light/drop-half-bottom-light.icon";
import { DropHalfBottomRegularIcon } from "../regular/drop-half-bottom-regular.icon";
import { DropHalfBottomThinIcon } from "../thin/drop-half-bottom-thin.icon";

export const DropHalfBottomIcon = createIcon("DropHalfBottom", {
  bold: DropHalfBottomBoldIcon,
  duotone: DropHalfBottomDuotoneIcon,
  fill: DropHalfBottomFillIcon,
  light: DropHalfBottomLightIcon,
  regular: DropHalfBottomRegularIcon,
  thin: DropHalfBottomThinIcon,
});
