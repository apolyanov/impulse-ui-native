import { createIcon } from "../../hocs/create-icon.hoc";
import { SelectionPlusBoldIcon } from "../bold/selection-plus-bold.icon";
import { SelectionPlusDuotoneIcon } from "../duotone/selection-plus-duotone.icon";
import { SelectionPlusFillIcon } from "../fill/selection-plus-fill.icon";
import { SelectionPlusLightIcon } from "../light/selection-plus-light.icon";
import { SelectionPlusRegularIcon } from "../regular/selection-plus-regular.icon";
import { SelectionPlusThinIcon } from "../thin/selection-plus-thin.icon";

export const SelectionPlusIcon = createIcon("SelectionPlus", {
  bold: SelectionPlusBoldIcon,
  duotone: SelectionPlusDuotoneIcon,
  fill: SelectionPlusFillIcon,
  light: SelectionPlusLightIcon,
  regular: SelectionPlusRegularIcon,
  thin: SelectionPlusThinIcon,
});
