import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowSquareUpBoldIcon } from "../bold/arrow-square-up-bold.icon";
import { ArrowSquareUpDuotoneIcon } from "../duotone/arrow-square-up-duotone.icon";
import { ArrowSquareUpFillIcon } from "../fill/arrow-square-up-fill.icon";
import { ArrowSquareUpLightIcon } from "../light/arrow-square-up-light.icon";
import { ArrowSquareUpRegularIcon } from "../regular/arrow-square-up-regular.icon";
import { ArrowSquareUpThinIcon } from "../thin/arrow-square-up-thin.icon";

export const ArrowSquareUpIcon = createIcon("ArrowSquareUp", {
  bold: ArrowSquareUpBoldIcon,
  duotone: ArrowSquareUpDuotoneIcon,
  fill: ArrowSquareUpFillIcon,
  light: ArrowSquareUpLightIcon,
  regular: ArrowSquareUpRegularIcon,
  thin: ArrowSquareUpThinIcon,
});
