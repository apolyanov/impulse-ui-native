import { createIcon } from "../../hocs/create-icon.hoc";
import { SelectionSlashBoldIcon } from "../bold/selection-slash-bold.icon";
import { SelectionSlashDuotoneIcon } from "../duotone/selection-slash-duotone.icon";
import { SelectionSlashFillIcon } from "../fill/selection-slash-fill.icon";
import { SelectionSlashLightIcon } from "../light/selection-slash-light.icon";
import { SelectionSlashRegularIcon } from "../regular/selection-slash-regular.icon";
import { SelectionSlashThinIcon } from "../thin/selection-slash-thin.icon";

export const SelectionSlashIcon = createIcon("SelectionSlash", {
  bold: SelectionSlashBoldIcon,
  duotone: SelectionSlashDuotoneIcon,
  fill: SelectionSlashFillIcon,
  light: SelectionSlashLightIcon,
  regular: SelectionSlashRegularIcon,
  thin: SelectionSlashThinIcon,
});
