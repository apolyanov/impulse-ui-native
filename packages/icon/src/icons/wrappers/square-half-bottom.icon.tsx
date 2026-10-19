import { createIcon } from "../../hocs/create-icon.hoc";
import { SquareHalfBottomBoldIcon } from "../bold/square-half-bottom-bold.icon";
import { SquareHalfBottomDuotoneIcon } from "../duotone/square-half-bottom-duotone.icon";
import { SquareHalfBottomFillIcon } from "../fill/square-half-bottom-fill.icon";
import { SquareHalfBottomLightIcon } from "../light/square-half-bottom-light.icon";
import { SquareHalfBottomRegularIcon } from "../regular/square-half-bottom-regular.icon";
import { SquareHalfBottomThinIcon } from "../thin/square-half-bottom-thin.icon";

export const SquareHalfBottomIcon = createIcon("SquareHalfBottom", {
  bold: SquareHalfBottomBoldIcon,
  duotone: SquareHalfBottomDuotoneIcon,
  fill: SquareHalfBottomFillIcon,
  light: SquareHalfBottomLightIcon,
  regular: SquareHalfBottomRegularIcon,
  thin: SquareHalfBottomThinIcon,
});
