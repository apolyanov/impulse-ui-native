import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowsVerticalBoldIcon } from "../bold/arrows-vertical-bold.icon";
import { ArrowsVerticalDuotoneIcon } from "../duotone/arrows-vertical-duotone.icon";
import { ArrowsVerticalFillIcon } from "../fill/arrows-vertical-fill.icon";
import { ArrowsVerticalLightIcon } from "../light/arrows-vertical-light.icon";
import { ArrowsVerticalRegularIcon } from "../regular/arrows-vertical-regular.icon";
import { ArrowsVerticalThinIcon } from "../thin/arrows-vertical-thin.icon";

export const ArrowsVerticalIcon = createIcon("ArrowsVertical", {
  bold: ArrowsVerticalBoldIcon,
  duotone: ArrowsVerticalDuotoneIcon,
  fill: ArrowsVerticalFillIcon,
  light: ArrowsVerticalLightIcon,
  regular: ArrowsVerticalRegularIcon,
  thin: ArrowsVerticalThinIcon,
});
