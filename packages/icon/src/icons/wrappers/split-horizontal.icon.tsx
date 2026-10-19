import { createIcon } from "../../hocs/create-icon.hoc";
import { SplitHorizontalBoldIcon } from "../bold/split-horizontal-bold.icon";
import { SplitHorizontalDuotoneIcon } from "../duotone/split-horizontal-duotone.icon";
import { SplitHorizontalFillIcon } from "../fill/split-horizontal-fill.icon";
import { SplitHorizontalLightIcon } from "../light/split-horizontal-light.icon";
import { SplitHorizontalRegularIcon } from "../regular/split-horizontal-regular.icon";
import { SplitHorizontalThinIcon } from "../thin/split-horizontal-thin.icon";

export const SplitHorizontalIcon = createIcon("SplitHorizontal", {
  bold: SplitHorizontalBoldIcon,
  duotone: SplitHorizontalDuotoneIcon,
  fill: SplitHorizontalFillIcon,
  light: SplitHorizontalLightIcon,
  regular: SplitHorizontalRegularIcon,
  thin: SplitHorizontalThinIcon,
});
