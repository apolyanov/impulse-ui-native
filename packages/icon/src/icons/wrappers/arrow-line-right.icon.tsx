import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowLineRightBoldIcon } from "../bold/arrow-line-right-bold.icon";
import { ArrowLineRightDuotoneIcon } from "../duotone/arrow-line-right-duotone.icon";
import { ArrowLineRightFillIcon } from "../fill/arrow-line-right-fill.icon";
import { ArrowLineRightLightIcon } from "../light/arrow-line-right-light.icon";
import { ArrowLineRightRegularIcon } from "../regular/arrow-line-right-regular.icon";
import { ArrowLineRightThinIcon } from "../thin/arrow-line-right-thin.icon";

export const ArrowLineRightIcon = createIcon("ArrowLineRight", {
  bold: ArrowLineRightBoldIcon,
  duotone: ArrowLineRightDuotoneIcon,
  fill: ArrowLineRightFillIcon,
  light: ArrowLineRightLightIcon,
  regular: ArrowLineRightRegularIcon,
  thin: ArrowLineRightThinIcon,
});
