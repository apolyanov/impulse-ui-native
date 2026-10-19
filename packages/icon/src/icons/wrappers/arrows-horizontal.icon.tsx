import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowsHorizontalBoldIcon } from "../bold/arrows-horizontal-bold.icon";
import { ArrowsHorizontalDuotoneIcon } from "../duotone/arrows-horizontal-duotone.icon";
import { ArrowsHorizontalFillIcon } from "../fill/arrows-horizontal-fill.icon";
import { ArrowsHorizontalLightIcon } from "../light/arrows-horizontal-light.icon";
import { ArrowsHorizontalRegularIcon } from "../regular/arrows-horizontal-regular.icon";
import { ArrowsHorizontalThinIcon } from "../thin/arrows-horizontal-thin.icon";

export const ArrowsHorizontalIcon = createIcon("ArrowsHorizontal", {
  bold: ArrowsHorizontalBoldIcon,
  duotone: ArrowsHorizontalDuotoneIcon,
  fill: ArrowsHorizontalFillIcon,
  light: ArrowsHorizontalLightIcon,
  regular: ArrowsHorizontalRegularIcon,
  thin: ArrowsHorizontalThinIcon,
});
