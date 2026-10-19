import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowArcRightBoldIcon } from "../bold/arrow-arc-right-bold.icon";
import { ArrowArcRightDuotoneIcon } from "../duotone/arrow-arc-right-duotone.icon";
import { ArrowArcRightFillIcon } from "../fill/arrow-arc-right-fill.icon";
import { ArrowArcRightLightIcon } from "../light/arrow-arc-right-light.icon";
import { ArrowArcRightRegularIcon } from "../regular/arrow-arc-right-regular.icon";
import { ArrowArcRightThinIcon } from "../thin/arrow-arc-right-thin.icon";

export const ArrowArcRightIcon = createIcon("ArrowArcRight", {
  bold: ArrowArcRightBoldIcon,
  duotone: ArrowArcRightDuotoneIcon,
  fill: ArrowArcRightFillIcon,
  light: ArrowArcRightLightIcon,
  regular: ArrowArcRightRegularIcon,
  thin: ArrowArcRightThinIcon,
});
