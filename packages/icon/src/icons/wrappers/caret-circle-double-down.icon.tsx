import { createIcon } from "../../hocs/create-icon.hoc";
import { CaretCircleDoubleDownBoldIcon } from "../bold/caret-circle-double-down-bold.icon";
import { CaretCircleDoubleDownDuotoneIcon } from "../duotone/caret-circle-double-down-duotone.icon";
import { CaretCircleDoubleDownFillIcon } from "../fill/caret-circle-double-down-fill.icon";
import { CaretCircleDoubleDownLightIcon } from "../light/caret-circle-double-down-light.icon";
import { CaretCircleDoubleDownRegularIcon } from "../regular/caret-circle-double-down-regular.icon";
import { CaretCircleDoubleDownThinIcon } from "../thin/caret-circle-double-down-thin.icon";

export const CaretCircleDoubleDownIcon = createIcon("CaretCircleDoubleDown", {
  bold: CaretCircleDoubleDownBoldIcon,
  duotone: CaretCircleDoubleDownDuotoneIcon,
  fill: CaretCircleDoubleDownFillIcon,
  light: CaretCircleDoubleDownLightIcon,
  regular: CaretCircleDoubleDownRegularIcon,
  thin: CaretCircleDoubleDownThinIcon,
});
