import { createIcon } from "../../hocs/create-icon.hoc";
import { CaretCircleDoubleLeftBoldIcon } from "../bold/caret-circle-double-left-bold.icon";
import { CaretCircleDoubleLeftDuotoneIcon } from "../duotone/caret-circle-double-left-duotone.icon";
import { CaretCircleDoubleLeftFillIcon } from "../fill/caret-circle-double-left-fill.icon";
import { CaretCircleDoubleLeftLightIcon } from "../light/caret-circle-double-left-light.icon";
import { CaretCircleDoubleLeftRegularIcon } from "../regular/caret-circle-double-left-regular.icon";
import { CaretCircleDoubleLeftThinIcon } from "../thin/caret-circle-double-left-thin.icon";

export const CaretCircleDoubleLeftIcon = createIcon("CaretCircleDoubleLeft", {
  bold: CaretCircleDoubleLeftBoldIcon,
  duotone: CaretCircleDoubleLeftDuotoneIcon,
  fill: CaretCircleDoubleLeftFillIcon,
  light: CaretCircleDoubleLeftLightIcon,
  regular: CaretCircleDoubleLeftRegularIcon,
  thin: CaretCircleDoubleLeftThinIcon,
});
