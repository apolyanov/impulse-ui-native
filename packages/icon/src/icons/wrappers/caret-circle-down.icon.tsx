import { createIcon } from "../../hocs/create-icon.hoc";
import { CaretCircleDownBoldIcon } from "../bold/caret-circle-down-bold.icon";
import { CaretCircleDownDuotoneIcon } from "../duotone/caret-circle-down-duotone.icon";
import { CaretCircleDownFillIcon } from "../fill/caret-circle-down-fill.icon";
import { CaretCircleDownLightIcon } from "../light/caret-circle-down-light.icon";
import { CaretCircleDownRegularIcon } from "../regular/caret-circle-down-regular.icon";
import { CaretCircleDownThinIcon } from "../thin/caret-circle-down-thin.icon";

export const CaretCircleDownIcon = createIcon("CaretCircleDown", {
  bold: CaretCircleDownBoldIcon,
  duotone: CaretCircleDownDuotoneIcon,
  fill: CaretCircleDownFillIcon,
  light: CaretCircleDownLightIcon,
  regular: CaretCircleDownRegularIcon,
  thin: CaretCircleDownThinIcon,
});
