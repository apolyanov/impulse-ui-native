import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowSquareDownBoldIcon } from "../bold/arrow-square-down-bold.icon";
import { ArrowSquareDownDuotoneIcon } from "../duotone/arrow-square-down-duotone.icon";
import { ArrowSquareDownFillIcon } from "../fill/arrow-square-down-fill.icon";
import { ArrowSquareDownLightIcon } from "../light/arrow-square-down-light.icon";
import { ArrowSquareDownRegularIcon } from "../regular/arrow-square-down-regular.icon";
import { ArrowSquareDownThinIcon } from "../thin/arrow-square-down-thin.icon";

export const ArrowSquareDownIcon = createIcon("ArrowSquareDown", {
  bold: ArrowSquareDownBoldIcon,
  duotone: ArrowSquareDownDuotoneIcon,
  fill: ArrowSquareDownFillIcon,
  light: ArrowSquareDownLightIcon,
  regular: ArrowSquareDownRegularIcon,
  thin: ArrowSquareDownThinIcon,
});
