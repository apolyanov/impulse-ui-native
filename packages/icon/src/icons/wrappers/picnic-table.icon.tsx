import { createIcon } from "../../hocs/create-icon.hoc";
import { PicnicTableBoldIcon } from "../bold/picnic-table-bold.icon";
import { PicnicTableDuotoneIcon } from "../duotone/picnic-table-duotone.icon";
import { PicnicTableFillIcon } from "../fill/picnic-table-fill.icon";
import { PicnicTableLightIcon } from "../light/picnic-table-light.icon";
import { PicnicTableRegularIcon } from "../regular/picnic-table-regular.icon";
import { PicnicTableThinIcon } from "../thin/picnic-table-thin.icon";

export const PicnicTableIcon = createIcon("PicnicTable", {
  bold: PicnicTableBoldIcon,
  duotone: PicnicTableDuotoneIcon,
  fill: PicnicTableFillIcon,
  light: PicnicTableLightIcon,
  regular: PicnicTableRegularIcon,
  thin: PicnicTableThinIcon,
});
