import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowSquareDownLeftBoldIcon } from "../bold/arrow-square-down-left-bold.icon";
import { ArrowSquareDownLeftDuotoneIcon } from "../duotone/arrow-square-down-left-duotone.icon";
import { ArrowSquareDownLeftFillIcon } from "../fill/arrow-square-down-left-fill.icon";
import { ArrowSquareDownLeftLightIcon } from "../light/arrow-square-down-left-light.icon";
import { ArrowSquareDownLeftRegularIcon } from "../regular/arrow-square-down-left-regular.icon";
import { ArrowSquareDownLeftThinIcon } from "../thin/arrow-square-down-left-thin.icon";

export const ArrowSquareDownLeftIcon = createIcon("ArrowSquareDownLeft", {
  bold: ArrowSquareDownLeftBoldIcon,
  duotone: ArrowSquareDownLeftDuotoneIcon,
  fill: ArrowSquareDownLeftFillIcon,
  light: ArrowSquareDownLeftLightIcon,
  regular: ArrowSquareDownLeftRegularIcon,
  thin: ArrowSquareDownLeftThinIcon,
});
