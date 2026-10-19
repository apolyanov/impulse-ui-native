import { createIcon } from "../../hocs/create-icon.hoc";
import { ColumnsBoldIcon } from "../bold/columns-bold.icon";
import { ColumnsDuotoneIcon } from "../duotone/columns-duotone.icon";
import { ColumnsFillIcon } from "../fill/columns-fill.icon";
import { ColumnsLightIcon } from "../light/columns-light.icon";
import { ColumnsRegularIcon } from "../regular/columns-regular.icon";
import { ColumnsThinIcon } from "../thin/columns-thin.icon";

export const ColumnsIcon = createIcon("Columns", {
  bold: ColumnsBoldIcon,
  duotone: ColumnsDuotoneIcon,
  fill: ColumnsFillIcon,
  light: ColumnsLightIcon,
  regular: ColumnsRegularIcon,
  thin: ColumnsThinIcon,
});
