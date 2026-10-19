import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowSquareInBoldIcon } from "../bold/arrow-square-in-bold.icon";
import { ArrowSquareInDuotoneIcon } from "../duotone/arrow-square-in-duotone.icon";
import { ArrowSquareInFillIcon } from "../fill/arrow-square-in-fill.icon";
import { ArrowSquareInLightIcon } from "../light/arrow-square-in-light.icon";
import { ArrowSquareInRegularIcon } from "../regular/arrow-square-in-regular.icon";
import { ArrowSquareInThinIcon } from "../thin/arrow-square-in-thin.icon";

export const ArrowSquareInIcon = createIcon("ArrowSquareIn", {
  bold: ArrowSquareInBoldIcon,
  duotone: ArrowSquareInDuotoneIcon,
  fill: ArrowSquareInFillIcon,
  light: ArrowSquareInLightIcon,
  regular: ArrowSquareInRegularIcon,
  thin: ArrowSquareInThinIcon,
});
