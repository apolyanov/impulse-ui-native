import { createIcon } from "../../hocs/create-icon.hoc";
import { CaretCircleUpDownBoldIcon } from "../bold/caret-circle-up-down-bold.icon";
import { CaretCircleUpDownDuotoneIcon } from "../duotone/caret-circle-up-down-duotone.icon";
import { CaretCircleUpDownFillIcon } from "../fill/caret-circle-up-down-fill.icon";
import { CaretCircleUpDownLightIcon } from "../light/caret-circle-up-down-light.icon";
import { CaretCircleUpDownRegularIcon } from "../regular/caret-circle-up-down-regular.icon";
import { CaretCircleUpDownThinIcon } from "../thin/caret-circle-up-down-thin.icon";

export const CaretCircleUpDownIcon = createIcon("CaretCircleUpDown", {
  bold: CaretCircleUpDownBoldIcon,
  duotone: CaretCircleUpDownDuotoneIcon,
  fill: CaretCircleUpDownFillIcon,
  light: CaretCircleUpDownLightIcon,
  regular: CaretCircleUpDownRegularIcon,
  thin: CaretCircleUpDownThinIcon,
});
