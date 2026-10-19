import { createIcon } from "../../hocs/create-icon.hoc";
import { CaretCircleRightBoldIcon } from "../bold/caret-circle-right-bold.icon";
import { CaretCircleRightDuotoneIcon } from "../duotone/caret-circle-right-duotone.icon";
import { CaretCircleRightFillIcon } from "../fill/caret-circle-right-fill.icon";
import { CaretCircleRightLightIcon } from "../light/caret-circle-right-light.icon";
import { CaretCircleRightRegularIcon } from "../regular/caret-circle-right-regular.icon";
import { CaretCircleRightThinIcon } from "../thin/caret-circle-right-thin.icon";

export const CaretCircleRightIcon = createIcon("CaretCircleRight", {
  bold: CaretCircleRightBoldIcon,
  duotone: CaretCircleRightDuotoneIcon,
  fill: CaretCircleRightFillIcon,
  light: CaretCircleRightLightIcon,
  regular: CaretCircleRightRegularIcon,
  thin: CaretCircleRightThinIcon,
});
