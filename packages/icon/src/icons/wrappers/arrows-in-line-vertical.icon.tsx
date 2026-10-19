import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowsInLineVerticalBoldIcon } from "../bold/arrows-in-line-vertical-bold.icon";
import { ArrowsInLineVerticalDuotoneIcon } from "../duotone/arrows-in-line-vertical-duotone.icon";
import { ArrowsInLineVerticalFillIcon } from "../fill/arrows-in-line-vertical-fill.icon";
import { ArrowsInLineVerticalLightIcon } from "../light/arrows-in-line-vertical-light.icon";
import { ArrowsInLineVerticalRegularIcon } from "../regular/arrows-in-line-vertical-regular.icon";
import { ArrowsInLineVerticalThinIcon } from "../thin/arrows-in-line-vertical-thin.icon";

export const ArrowsInLineVerticalIcon = createIcon("ArrowsInLineVertical", {
  bold: ArrowsInLineVerticalBoldIcon,
  duotone: ArrowsInLineVerticalDuotoneIcon,
  fill: ArrowsInLineVerticalFillIcon,
  light: ArrowsInLineVerticalLightIcon,
  regular: ArrowsInLineVerticalRegularIcon,
  thin: ArrowsInLineVerticalThinIcon,
});
