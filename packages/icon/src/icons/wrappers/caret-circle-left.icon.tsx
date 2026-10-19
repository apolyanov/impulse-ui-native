import { createIcon } from "../../hocs/create-icon.hoc";
import { CaretCircleLeftBoldIcon } from "../bold/caret-circle-left-bold.icon";
import { CaretCircleLeftDuotoneIcon } from "../duotone/caret-circle-left-duotone.icon";
import { CaretCircleLeftFillIcon } from "../fill/caret-circle-left-fill.icon";
import { CaretCircleLeftLightIcon } from "../light/caret-circle-left-light.icon";
import { CaretCircleLeftRegularIcon } from "../regular/caret-circle-left-regular.icon";
import { CaretCircleLeftThinIcon } from "../thin/caret-circle-left-thin.icon";

export const CaretCircleLeftIcon = createIcon("CaretCircleLeft", {
  bold: CaretCircleLeftBoldIcon,
  duotone: CaretCircleLeftDuotoneIcon,
  fill: CaretCircleLeftFillIcon,
  light: CaretCircleLeftLightIcon,
  regular: CaretCircleLeftRegularIcon,
  thin: CaretCircleLeftThinIcon,
});
