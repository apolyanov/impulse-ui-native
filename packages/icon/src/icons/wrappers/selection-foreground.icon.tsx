import { createIcon } from "../../hocs/create-icon.hoc";
import { SelectionForegroundBoldIcon } from "../bold/selection-foreground-bold.icon";
import { SelectionForegroundDuotoneIcon } from "../duotone/selection-foreground-duotone.icon";
import { SelectionForegroundFillIcon } from "../fill/selection-foreground-fill.icon";
import { SelectionForegroundLightIcon } from "../light/selection-foreground-light.icon";
import { SelectionForegroundRegularIcon } from "../regular/selection-foreground-regular.icon";
import { SelectionForegroundThinIcon } from "../thin/selection-foreground-thin.icon";

export const SelectionForegroundIcon = createIcon("SelectionForeground", {
  bold: SelectionForegroundBoldIcon,
  duotone: SelectionForegroundDuotoneIcon,
  fill: SelectionForegroundFillIcon,
  light: SelectionForegroundLightIcon,
  regular: SelectionForegroundRegularIcon,
  thin: SelectionForegroundThinIcon,
});
