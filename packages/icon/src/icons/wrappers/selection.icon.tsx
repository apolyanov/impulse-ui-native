import { createIcon } from "../../hocs/create-icon.hoc";
import { SelectionBoldIcon } from "../bold/selection-bold.icon";
import { SelectionDuotoneIcon } from "../duotone/selection-duotone.icon";
import { SelectionFillIcon } from "../fill/selection-fill.icon";
import { SelectionLightIcon } from "../light/selection-light.icon";
import { SelectionRegularIcon } from "../regular/selection-regular.icon";
import { SelectionThinIcon } from "../thin/selection-thin.icon";

export const SelectionIcon = createIcon("Selection", {
  bold: SelectionBoldIcon,
  duotone: SelectionDuotoneIcon,
  fill: SelectionFillIcon,
  light: SelectionLightIcon,
  regular: SelectionRegularIcon,
  thin: SelectionThinIcon,
});
