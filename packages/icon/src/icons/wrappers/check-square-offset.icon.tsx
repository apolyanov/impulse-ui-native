import { createIcon } from "../../hocs/create-icon.hoc";
import { CheckSquareOffsetBoldIcon } from "../bold/check-square-offset-bold.icon";
import { CheckSquareOffsetDuotoneIcon } from "../duotone/check-square-offset-duotone.icon";
import { CheckSquareOffsetFillIcon } from "../fill/check-square-offset-fill.icon";
import { CheckSquareOffsetLightIcon } from "../light/check-square-offset-light.icon";
import { CheckSquareOffsetRegularIcon } from "../regular/check-square-offset-regular.icon";
import { CheckSquareOffsetThinIcon } from "../thin/check-square-offset-thin.icon";

export const CheckSquareOffsetIcon = createIcon("CheckSquareOffset", {
  bold: CheckSquareOffsetBoldIcon,
  duotone: CheckSquareOffsetDuotoneIcon,
  fill: CheckSquareOffsetFillIcon,
  light: CheckSquareOffsetLightIcon,
  regular: CheckSquareOffsetRegularIcon,
  thin: CheckSquareOffsetThinIcon,
});
