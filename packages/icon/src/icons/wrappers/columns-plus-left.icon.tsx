import { createIcon } from "../../hocs/create-icon.hoc";
import { ColumnsPlusLeftBoldIcon } from "../bold/columns-plus-left-bold.icon";
import { ColumnsPlusLeftDuotoneIcon } from "../duotone/columns-plus-left-duotone.icon";
import { ColumnsPlusLeftFillIcon } from "../fill/columns-plus-left-fill.icon";
import { ColumnsPlusLeftLightIcon } from "../light/columns-plus-left-light.icon";
import { ColumnsPlusLeftRegularIcon } from "../regular/columns-plus-left-regular.icon";
import { ColumnsPlusLeftThinIcon } from "../thin/columns-plus-left-thin.icon";

export const ColumnsPlusLeftIcon = createIcon("ColumnsPlusLeft", {
  bold: ColumnsPlusLeftBoldIcon,
  duotone: ColumnsPlusLeftDuotoneIcon,
  fill: ColumnsPlusLeftFillIcon,
  light: ColumnsPlusLeftLightIcon,
  regular: ColumnsPlusLeftRegularIcon,
  thin: ColumnsPlusLeftThinIcon,
});
