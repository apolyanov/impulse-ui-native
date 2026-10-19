import { createIcon } from "../../hocs/create-icon.hoc";
import { SquareHalfBoldIcon } from "../bold/square-half-bold.icon";
import { SquareHalfDuotoneIcon } from "../duotone/square-half-duotone.icon";
import { SquareHalfFillIcon } from "../fill/square-half-fill.icon";
import { SquareHalfLightIcon } from "../light/square-half-light.icon";
import { SquareHalfRegularIcon } from "../regular/square-half-regular.icon";
import { SquareHalfThinIcon } from "../thin/square-half-thin.icon";

export const SquareHalfIcon = createIcon("SquareHalf", {
  bold: SquareHalfBoldIcon,
  duotone: SquareHalfDuotoneIcon,
  fill: SquareHalfFillIcon,
  light: SquareHalfLightIcon,
  regular: SquareHalfRegularIcon,
  thin: SquareHalfThinIcon,
});
