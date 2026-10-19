import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowsSplitBoldIcon } from "../bold/arrows-split-bold.icon";
import { ArrowsSplitDuotoneIcon } from "../duotone/arrows-split-duotone.icon";
import { ArrowsSplitFillIcon } from "../fill/arrows-split-fill.icon";
import { ArrowsSplitLightIcon } from "../light/arrows-split-light.icon";
import { ArrowsSplitRegularIcon } from "../regular/arrows-split-regular.icon";
import { ArrowsSplitThinIcon } from "../thin/arrows-split-thin.icon";

export const ArrowsSplitIcon = createIcon("ArrowsSplit", {
  bold: ArrowsSplitBoldIcon,
  duotone: ArrowsSplitDuotoneIcon,
  fill: ArrowsSplitFillIcon,
  light: ArrowsSplitLightIcon,
  regular: ArrowsSplitRegularIcon,
  thin: ArrowsSplitThinIcon,
});
