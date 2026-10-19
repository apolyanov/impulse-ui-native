import { createIcon } from "../../hocs/create-icon.hoc";
import { CaretCircleDoubleRightBoldIcon } from "../bold/caret-circle-double-right-bold.icon";
import { CaretCircleDoubleRightDuotoneIcon } from "../duotone/caret-circle-double-right-duotone.icon";
import { CaretCircleDoubleRightFillIcon } from "../fill/caret-circle-double-right-fill.icon";
import { CaretCircleDoubleRightLightIcon } from "../light/caret-circle-double-right-light.icon";
import { CaretCircleDoubleRightRegularIcon } from "../regular/caret-circle-double-right-regular.icon";
import { CaretCircleDoubleRightThinIcon } from "../thin/caret-circle-double-right-thin.icon";

export const CaretCircleDoubleRightIcon = createIcon("CaretCircleDoubleRight", {
  bold: CaretCircleDoubleRightBoldIcon,
  duotone: CaretCircleDoubleRightDuotoneIcon,
  fill: CaretCircleDoubleRightFillIcon,
  light: CaretCircleDoubleRightLightIcon,
  regular: CaretCircleDoubleRightRegularIcon,
  thin: CaretCircleDoubleRightThinIcon,
});
