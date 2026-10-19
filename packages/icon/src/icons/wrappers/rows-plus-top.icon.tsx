import { createIcon } from "../../hocs/create-icon.hoc";
import { RowsPlusTopBoldIcon } from "../bold/rows-plus-top-bold.icon";
import { RowsPlusTopDuotoneIcon } from "../duotone/rows-plus-top-duotone.icon";
import { RowsPlusTopFillIcon } from "../fill/rows-plus-top-fill.icon";
import { RowsPlusTopLightIcon } from "../light/rows-plus-top-light.icon";
import { RowsPlusTopRegularIcon } from "../regular/rows-plus-top-regular.icon";
import { RowsPlusTopThinIcon } from "../thin/rows-plus-top-thin.icon";

export const RowsPlusTopIcon = createIcon("RowsPlusTop", {
  bold: RowsPlusTopBoldIcon,
  duotone: RowsPlusTopDuotoneIcon,
  fill: RowsPlusTopFillIcon,
  light: RowsPlusTopLightIcon,
  regular: RowsPlusTopRegularIcon,
  thin: RowsPlusTopThinIcon,
});
