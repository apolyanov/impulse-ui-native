import { createIcon } from "../../hocs/create-icon.hoc";
import { CaretRightBoldIcon } from "../bold/caret-right-bold.icon";
import { CaretRightDuotoneIcon } from "../duotone/caret-right-duotone.icon";
import { CaretRightFillIcon } from "../fill/caret-right-fill.icon";
import { CaretRightLightIcon } from "../light/caret-right-light.icon";
import { CaretRightRegularIcon } from "../regular/caret-right-regular.icon";
import { CaretRightThinIcon } from "../thin/caret-right-thin.icon";

export const CaretRightIcon = createIcon("CaretRight", {
  bold: CaretRightBoldIcon,
  duotone: CaretRightDuotoneIcon,
  fill: CaretRightFillIcon,
  light: CaretRightLightIcon,
  regular: CaretRightRegularIcon,
  thin: CaretRightThinIcon,
});
