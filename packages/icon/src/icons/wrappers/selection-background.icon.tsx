import { createIcon } from "../../hocs/create-icon.hoc";
import { SelectionBackgroundBoldIcon } from "../bold/selection-background-bold.icon";
import { SelectionBackgroundDuotoneIcon } from "../duotone/selection-background-duotone.icon";
import { SelectionBackgroundFillIcon } from "../fill/selection-background-fill.icon";
import { SelectionBackgroundLightIcon } from "../light/selection-background-light.icon";
import { SelectionBackgroundRegularIcon } from "../regular/selection-background-regular.icon";
import { SelectionBackgroundThinIcon } from "../thin/selection-background-thin.icon";

export const SelectionBackgroundIcon = createIcon("SelectionBackground", {
  bold: SelectionBackgroundBoldIcon,
  duotone: SelectionBackgroundDuotoneIcon,
  fill: SelectionBackgroundFillIcon,
  light: SelectionBackgroundLightIcon,
  regular: SelectionBackgroundRegularIcon,
  thin: SelectionBackgroundThinIcon,
});
