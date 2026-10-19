import { createIcon } from "../../hocs/create-icon.hoc";
import { RowsBoldIcon } from "../bold/rows-bold.icon";
import { RowsDuotoneIcon } from "../duotone/rows-duotone.icon";
import { RowsFillIcon } from "../fill/rows-fill.icon";
import { RowsLightIcon } from "../light/rows-light.icon";
import { RowsRegularIcon } from "../regular/rows-regular.icon";
import { RowsThinIcon } from "../thin/rows-thin.icon";

export const RowsIcon = createIcon("Rows", {
  bold: RowsBoldIcon,
  duotone: RowsDuotoneIcon,
  fill: RowsFillIcon,
  light: RowsLightIcon,
  regular: RowsRegularIcon,
  thin: RowsThinIcon,
});
