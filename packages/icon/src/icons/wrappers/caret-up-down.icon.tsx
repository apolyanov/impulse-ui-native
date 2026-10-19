import { createIcon } from "../../hocs/create-icon.hoc";
import { CaretUpDownBoldIcon } from "../bold/caret-up-down-bold.icon";
import { CaretUpDownDuotoneIcon } from "../duotone/caret-up-down-duotone.icon";
import { CaretUpDownFillIcon } from "../fill/caret-up-down-fill.icon";
import { CaretUpDownLightIcon } from "../light/caret-up-down-light.icon";
import { CaretUpDownRegularIcon } from "../regular/caret-up-down-regular.icon";
import { CaretUpDownThinIcon } from "../thin/caret-up-down-thin.icon";

export const CaretUpDownIcon = createIcon("CaretUpDown", {
  bold: CaretUpDownBoldIcon,
  duotone: CaretUpDownDuotoneIcon,
  fill: CaretUpDownFillIcon,
  light: CaretUpDownLightIcon,
  regular: CaretUpDownRegularIcon,
  thin: CaretUpDownThinIcon,
});
