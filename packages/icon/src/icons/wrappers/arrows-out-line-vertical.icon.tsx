import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowsOutLineVerticalBoldIcon } from "../bold/arrows-out-line-vertical-bold.icon";
import { ArrowsOutLineVerticalDuotoneIcon } from "../duotone/arrows-out-line-vertical-duotone.icon";
import { ArrowsOutLineVerticalFillIcon } from "../fill/arrows-out-line-vertical-fill.icon";
import { ArrowsOutLineVerticalLightIcon } from "../light/arrows-out-line-vertical-light.icon";
import { ArrowsOutLineVerticalRegularIcon } from "../regular/arrows-out-line-vertical-regular.icon";
import { ArrowsOutLineVerticalThinIcon } from "../thin/arrows-out-line-vertical-thin.icon";

export const ArrowsOutLineVerticalIcon = createIcon("ArrowsOutLineVertical", {
  bold: ArrowsOutLineVerticalBoldIcon,
  duotone: ArrowsOutLineVerticalDuotoneIcon,
  fill: ArrowsOutLineVerticalFillIcon,
  light: ArrowsOutLineVerticalLightIcon,
  regular: ArrowsOutLineVerticalRegularIcon,
  thin: ArrowsOutLineVerticalThinIcon,
});
