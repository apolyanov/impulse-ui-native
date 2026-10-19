import { createIcon } from "../../hocs/create-icon.hoc";
import { SelectionAllBoldIcon } from "../bold/selection-all-bold.icon";
import { SelectionAllDuotoneIcon } from "../duotone/selection-all-duotone.icon";
import { SelectionAllFillIcon } from "../fill/selection-all-fill.icon";
import { SelectionAllLightIcon } from "../light/selection-all-light.icon";
import { SelectionAllRegularIcon } from "../regular/selection-all-regular.icon";
import { SelectionAllThinIcon } from "../thin/selection-all-thin.icon";

export const SelectionAllIcon = createIcon("SelectionAll", {
  bold: SelectionAllBoldIcon,
  duotone: SelectionAllDuotoneIcon,
  fill: SelectionAllFillIcon,
  light: SelectionAllLightIcon,
  regular: SelectionAllRegularIcon,
  thin: SelectionAllThinIcon,
});
