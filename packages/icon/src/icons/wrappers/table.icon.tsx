import { createIcon } from "../../hocs/create-icon.hoc";
import { TableBoldIcon } from "../bold/table-bold.icon";
import { TableDuotoneIcon } from "../duotone/table-duotone.icon";
import { TableFillIcon } from "../fill/table-fill.icon";
import { TableLightIcon } from "../light/table-light.icon";
import { TableRegularIcon } from "../regular/table-regular.icon";
import { TableThinIcon } from "../thin/table-thin.icon";

export const TableIcon = createIcon("Table", {
  bold: TableBoldIcon,
  duotone: TableDuotoneIcon,
  fill: TableFillIcon,
  light: TableLightIcon,
  regular: TableRegularIcon,
  thin: TableThinIcon,
});
