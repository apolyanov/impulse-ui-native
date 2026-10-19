import { createIcon } from "../../hocs/create-icon.hoc";
import { CaretUpBoldIcon } from "../bold/caret-up-bold.icon";
import { CaretUpDuotoneIcon } from "../duotone/caret-up-duotone.icon";
import { CaretUpFillIcon } from "../fill/caret-up-fill.icon";
import { CaretUpLightIcon } from "../light/caret-up-light.icon";
import { CaretUpRegularIcon } from "../regular/caret-up-regular.icon";
import { CaretUpThinIcon } from "../thin/caret-up-thin.icon";

export const CaretUpIcon = createIcon("CaretUp", {
  bold: CaretUpBoldIcon,
  duotone: CaretUpDuotoneIcon,
  fill: CaretUpFillIcon,
  light: CaretUpLightIcon,
  regular: CaretUpRegularIcon,
  thin: CaretUpThinIcon,
});
