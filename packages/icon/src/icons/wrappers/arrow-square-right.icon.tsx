import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowSquareRightBoldIcon } from "../bold/arrow-square-right-bold.icon";
import { ArrowSquareRightDuotoneIcon } from "../duotone/arrow-square-right-duotone.icon";
import { ArrowSquareRightFillIcon } from "../fill/arrow-square-right-fill.icon";
import { ArrowSquareRightLightIcon } from "../light/arrow-square-right-light.icon";
import { ArrowSquareRightRegularIcon } from "../regular/arrow-square-right-regular.icon";
import { ArrowSquareRightThinIcon } from "../thin/arrow-square-right-thin.icon";

export const ArrowSquareRightIcon = createIcon("ArrowSquareRight", {
  bold: ArrowSquareRightBoldIcon,
  duotone: ArrowSquareRightDuotoneIcon,
  fill: ArrowSquareRightFillIcon,
  light: ArrowSquareRightLightIcon,
  regular: ArrowSquareRightRegularIcon,
  thin: ArrowSquareRightThinIcon,
});
