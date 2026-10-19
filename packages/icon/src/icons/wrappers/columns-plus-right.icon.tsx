import { createIcon } from "../../hocs/create-icon.hoc";
import { ColumnsPlusRightBoldIcon } from "../bold/columns-plus-right-bold.icon";
import { ColumnsPlusRightDuotoneIcon } from "../duotone/columns-plus-right-duotone.icon";
import { ColumnsPlusRightFillIcon } from "../fill/columns-plus-right-fill.icon";
import { ColumnsPlusRightLightIcon } from "../light/columns-plus-right-light.icon";
import { ColumnsPlusRightRegularIcon } from "../regular/columns-plus-right-regular.icon";
import { ColumnsPlusRightThinIcon } from "../thin/columns-plus-right-thin.icon";

export const ColumnsPlusRightIcon = createIcon("ColumnsPlusRight", {
  bold: ColumnsPlusRightBoldIcon,
  duotone: ColumnsPlusRightDuotoneIcon,
  fill: ColumnsPlusRightFillIcon,
  light: ColumnsPlusRightLightIcon,
  regular: ColumnsPlusRightRegularIcon,
  thin: ColumnsPlusRightThinIcon,
});
