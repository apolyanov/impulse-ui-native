import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowsInLineHorizontalBoldIcon } from "../bold/arrows-in-line-horizontal-bold.icon";
import { ArrowsInLineHorizontalDuotoneIcon } from "../duotone/arrows-in-line-horizontal-duotone.icon";
import { ArrowsInLineHorizontalFillIcon } from "../fill/arrows-in-line-horizontal-fill.icon";
import { ArrowsInLineHorizontalLightIcon } from "../light/arrows-in-line-horizontal-light.icon";
import { ArrowsInLineHorizontalRegularIcon } from "../regular/arrows-in-line-horizontal-regular.icon";
import { ArrowsInLineHorizontalThinIcon } from "../thin/arrows-in-line-horizontal-thin.icon";

export const ArrowsInLineHorizontalIcon = createIcon("ArrowsInLineHorizontal", {
  bold: ArrowsInLineHorizontalBoldIcon,
  duotone: ArrowsInLineHorizontalDuotoneIcon,
  fill: ArrowsInLineHorizontalFillIcon,
  light: ArrowsInLineHorizontalLightIcon,
  regular: ArrowsInLineHorizontalRegularIcon,
  thin: ArrowsInLineHorizontalThinIcon,
});
