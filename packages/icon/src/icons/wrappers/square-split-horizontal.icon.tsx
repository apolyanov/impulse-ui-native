import { createIcon } from "../../hocs/create-icon.hoc";
import { SquareSplitHorizontalBoldIcon } from "../bold/square-split-horizontal-bold.icon";
import { SquareSplitHorizontalDuotoneIcon } from "../duotone/square-split-horizontal-duotone.icon";
import { SquareSplitHorizontalFillIcon } from "../fill/square-split-horizontal-fill.icon";
import { SquareSplitHorizontalLightIcon } from "../light/square-split-horizontal-light.icon";
import { SquareSplitHorizontalRegularIcon } from "../regular/square-split-horizontal-regular.icon";
import { SquareSplitHorizontalThinIcon } from "../thin/square-split-horizontal-thin.icon";

export const SquareSplitHorizontalIcon = createIcon("SquareSplitHorizontal", {
  bold: SquareSplitHorizontalBoldIcon,
  duotone: SquareSplitHorizontalDuotoneIcon,
  fill: SquareSplitHorizontalFillIcon,
  light: SquareSplitHorizontalLightIcon,
  regular: SquareSplitHorizontalRegularIcon,
  thin: SquareSplitHorizontalThinIcon,
});
