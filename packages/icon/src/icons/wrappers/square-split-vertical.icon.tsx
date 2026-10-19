import { createIcon } from "../../hocs/create-icon.hoc";
import { SquareSplitVerticalBoldIcon } from "../bold/square-split-vertical-bold.icon";
import { SquareSplitVerticalDuotoneIcon } from "../duotone/square-split-vertical-duotone.icon";
import { SquareSplitVerticalFillIcon } from "../fill/square-split-vertical-fill.icon";
import { SquareSplitVerticalLightIcon } from "../light/square-split-vertical-light.icon";
import { SquareSplitVerticalRegularIcon } from "../regular/square-split-vertical-regular.icon";
import { SquareSplitVerticalThinIcon } from "../thin/square-split-vertical-thin.icon";

export const SquareSplitVerticalIcon = createIcon("SquareSplitVertical", {
  bold: SquareSplitVerticalBoldIcon,
  duotone: SquareSplitVerticalDuotoneIcon,
  fill: SquareSplitVerticalFillIcon,
  light: SquareSplitVerticalLightIcon,
  regular: SquareSplitVerticalRegularIcon,
  thin: SquareSplitVerticalThinIcon,
});
