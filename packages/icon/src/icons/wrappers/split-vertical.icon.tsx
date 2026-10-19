import { createIcon } from "../../hocs/create-icon.hoc";
import { SplitVerticalBoldIcon } from "../bold/split-vertical-bold.icon";
import { SplitVerticalDuotoneIcon } from "../duotone/split-vertical-duotone.icon";
import { SplitVerticalFillIcon } from "../fill/split-vertical-fill.icon";
import { SplitVerticalLightIcon } from "../light/split-vertical-light.icon";
import { SplitVerticalRegularIcon } from "../regular/split-vertical-regular.icon";
import { SplitVerticalThinIcon } from "../thin/split-vertical-thin.icon";

export const SplitVerticalIcon = createIcon("SplitVertical", {
  bold: SplitVerticalBoldIcon,
  duotone: SplitVerticalDuotoneIcon,
  fill: SplitVerticalFillIcon,
  light: SplitVerticalLightIcon,
  regular: SplitVerticalRegularIcon,
  thin: SplitVerticalThinIcon,
});
