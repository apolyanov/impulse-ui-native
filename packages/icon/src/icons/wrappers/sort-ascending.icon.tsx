import { createIcon } from "../../hocs/create-icon.hoc";
import { SortAscendingBoldIcon } from "../bold/sort-ascending-bold.icon";
import { SortAscendingDuotoneIcon } from "../duotone/sort-ascending-duotone.icon";
import { SortAscendingFillIcon } from "../fill/sort-ascending-fill.icon";
import { SortAscendingLightIcon } from "../light/sort-ascending-light.icon";
import { SortAscendingRegularIcon } from "../regular/sort-ascending-regular.icon";
import { SortAscendingThinIcon } from "../thin/sort-ascending-thin.icon";

export const SortAscendingIcon = createIcon("SortAscending", {
  bold: SortAscendingBoldIcon,
  duotone: SortAscendingDuotoneIcon,
  fill: SortAscendingFillIcon,
  light: SortAscendingLightIcon,
  regular: SortAscendingRegularIcon,
  thin: SortAscendingThinIcon,
});
