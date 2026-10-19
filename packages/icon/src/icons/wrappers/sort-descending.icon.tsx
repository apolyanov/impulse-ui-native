import { createIcon } from "../../hocs/create-icon.hoc";
import { SortDescendingBoldIcon } from "../bold/sort-descending-bold.icon";
import { SortDescendingDuotoneIcon } from "../duotone/sort-descending-duotone.icon";
import { SortDescendingFillIcon } from "../fill/sort-descending-fill.icon";
import { SortDescendingLightIcon } from "../light/sort-descending-light.icon";
import { SortDescendingRegularIcon } from "../regular/sort-descending-regular.icon";
import { SortDescendingThinIcon } from "../thin/sort-descending-thin.icon";

export const SortDescendingIcon = createIcon("SortDescending", {
  bold: SortDescendingBoldIcon,
  duotone: SortDescendingDuotoneIcon,
  fill: SortDescendingFillIcon,
  light: SortDescendingLightIcon,
  regular: SortDescendingRegularIcon,
  thin: SortDescendingThinIcon,
});
