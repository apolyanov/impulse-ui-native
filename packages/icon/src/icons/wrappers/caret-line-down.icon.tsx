import { createIcon } from "../../hocs/create-icon.hoc";
import { CaretLineDownBoldIcon } from "../bold/caret-line-down-bold.icon";
import { CaretLineDownDuotoneIcon } from "../duotone/caret-line-down-duotone.icon";
import { CaretLineDownFillIcon } from "../fill/caret-line-down-fill.icon";
import { CaretLineDownLightIcon } from "../light/caret-line-down-light.icon";
import { CaretLineDownRegularIcon } from "../regular/caret-line-down-regular.icon";
import { CaretLineDownThinIcon } from "../thin/caret-line-down-thin.icon";

export const CaretLineDownIcon = createIcon("CaretLineDown", {
  bold: CaretLineDownBoldIcon,
  duotone: CaretLineDownDuotoneIcon,
  fill: CaretLineDownFillIcon,
  light: CaretLineDownLightIcon,
  regular: CaretLineDownRegularIcon,
  thin: CaretLineDownThinIcon,
});
