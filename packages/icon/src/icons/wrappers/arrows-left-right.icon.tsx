import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowsLeftRightBoldIcon } from "../bold/arrows-left-right-bold.icon";
import { ArrowsLeftRightDuotoneIcon } from "../duotone/arrows-left-right-duotone.icon";
import { ArrowsLeftRightFillIcon } from "../fill/arrows-left-right-fill.icon";
import { ArrowsLeftRightLightIcon } from "../light/arrows-left-right-light.icon";
import { ArrowsLeftRightRegularIcon } from "../regular/arrows-left-right-regular.icon";
import { ArrowsLeftRightThinIcon } from "../thin/arrows-left-right-thin.icon";

export const ArrowsLeftRightIcon = createIcon("ArrowsLeftRight", {
  bold: ArrowsLeftRightBoldIcon,
  duotone: ArrowsLeftRightDuotoneIcon,
  fill: ArrowsLeftRightFillIcon,
  light: ArrowsLeftRightLightIcon,
  regular: ArrowsLeftRightRegularIcon,
  thin: ArrowsLeftRightThinIcon,
});
