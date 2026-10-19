import { createIcon } from "../../hocs/create-icon.hoc";
import { CaretCircleDoubleUpBoldIcon } from "../bold/caret-circle-double-up-bold.icon";
import { CaretCircleDoubleUpDuotoneIcon } from "../duotone/caret-circle-double-up-duotone.icon";
import { CaretCircleDoubleUpFillIcon } from "../fill/caret-circle-double-up-fill.icon";
import { CaretCircleDoubleUpLightIcon } from "../light/caret-circle-double-up-light.icon";
import { CaretCircleDoubleUpRegularIcon } from "../regular/caret-circle-double-up-regular.icon";
import { CaretCircleDoubleUpThinIcon } from "../thin/caret-circle-double-up-thin.icon";

export const CaretCircleDoubleUpIcon = createIcon("CaretCircleDoubleUp", {
  bold: CaretCircleDoubleUpBoldIcon,
  duotone: CaretCircleDoubleUpDuotoneIcon,
  fill: CaretCircleDoubleUpFillIcon,
  light: CaretCircleDoubleUpLightIcon,
  regular: CaretCircleDoubleUpRegularIcon,
  thin: CaretCircleDoubleUpThinIcon,
});
