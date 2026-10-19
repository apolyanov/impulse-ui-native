import { createIcon } from "../../hocs/create-icon.hoc";
import { RowsPlusBottomBoldIcon } from "../bold/rows-plus-bottom-bold.icon";
import { RowsPlusBottomDuotoneIcon } from "../duotone/rows-plus-bottom-duotone.icon";
import { RowsPlusBottomFillIcon } from "../fill/rows-plus-bottom-fill.icon";
import { RowsPlusBottomLightIcon } from "../light/rows-plus-bottom-light.icon";
import { RowsPlusBottomRegularIcon } from "../regular/rows-plus-bottom-regular.icon";
import { RowsPlusBottomThinIcon } from "../thin/rows-plus-bottom-thin.icon";

export const RowsPlusBottomIcon = createIcon("RowsPlusBottom", {
  bold: RowsPlusBottomBoldIcon,
  duotone: RowsPlusBottomDuotoneIcon,
  fill: RowsPlusBottomFillIcon,
  light: RowsPlusBottomLightIcon,
  regular: RowsPlusBottomRegularIcon,
  thin: RowsPlusBottomThinIcon,
});
