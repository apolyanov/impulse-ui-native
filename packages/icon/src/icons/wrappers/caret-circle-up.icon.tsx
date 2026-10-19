import { createIcon } from "../../hocs/create-icon.hoc";
import { CaretCircleUpBoldIcon } from "../bold/caret-circle-up-bold.icon";
import { CaretCircleUpDuotoneIcon } from "../duotone/caret-circle-up-duotone.icon";
import { CaretCircleUpFillIcon } from "../fill/caret-circle-up-fill.icon";
import { CaretCircleUpLightIcon } from "../light/caret-circle-up-light.icon";
import { CaretCircleUpRegularIcon } from "../regular/caret-circle-up-regular.icon";
import { CaretCircleUpThinIcon } from "../thin/caret-circle-up-thin.icon";

export const CaretCircleUpIcon = createIcon("CaretCircleUp", {
  bold: CaretCircleUpBoldIcon,
  duotone: CaretCircleUpDuotoneIcon,
  fill: CaretCircleUpFillIcon,
  light: CaretCircleUpLightIcon,
  regular: CaretCircleUpRegularIcon,
  thin: CaretCircleUpThinIcon,
});
