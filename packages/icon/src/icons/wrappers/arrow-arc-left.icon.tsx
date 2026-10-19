import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowArcLeftBoldIcon } from "../bold/arrow-arc-left-bold.icon";
import { ArrowArcLeftDuotoneIcon } from "../duotone/arrow-arc-left-duotone.icon";
import { ArrowArcLeftFillIcon } from "../fill/arrow-arc-left-fill.icon";
import { ArrowArcLeftLightIcon } from "../light/arrow-arc-left-light.icon";
import { ArrowArcLeftRegularIcon } from "../regular/arrow-arc-left-regular.icon";
import { ArrowArcLeftThinIcon } from "../thin/arrow-arc-left-thin.icon";

export const ArrowArcLeftIcon = createIcon("ArrowArcLeft", {
  bold: ArrowArcLeftBoldIcon,
  duotone: ArrowArcLeftDuotoneIcon,
  fill: ArrowArcLeftFillIcon,
  light: ArrowArcLeftLightIcon,
  regular: ArrowArcLeftRegularIcon,
  thin: ArrowArcLeftThinIcon,
});
