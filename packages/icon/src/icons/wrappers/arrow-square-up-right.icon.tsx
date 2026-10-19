import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowSquareUpRightBoldIcon } from "../bold/arrow-square-up-right-bold.icon";
import { ArrowSquareUpRightDuotoneIcon } from "../duotone/arrow-square-up-right-duotone.icon";
import { ArrowSquareUpRightFillIcon } from "../fill/arrow-square-up-right-fill.icon";
import { ArrowSquareUpRightLightIcon } from "../light/arrow-square-up-right-light.icon";
import { ArrowSquareUpRightRegularIcon } from "../regular/arrow-square-up-right-regular.icon";
import { ArrowSquareUpRightThinIcon } from "../thin/arrow-square-up-right-thin.icon";

export const ArrowSquareUpRightIcon = createIcon("ArrowSquareUpRight", {
  bold: ArrowSquareUpRightBoldIcon,
  duotone: ArrowSquareUpRightDuotoneIcon,
  fill: ArrowSquareUpRightFillIcon,
  light: ArrowSquareUpRightLightIcon,
  regular: ArrowSquareUpRightRegularIcon,
  thin: ArrowSquareUpRightThinIcon,
});
