import { createIcon } from "../../hocs/create-icon.hoc";
import { CaretLeftBoldIcon } from "../bold/caret-left-bold.icon";
import { CaretLeftDuotoneIcon } from "../duotone/caret-left-duotone.icon";
import { CaretLeftFillIcon } from "../fill/caret-left-fill.icon";
import { CaretLeftLightIcon } from "../light/caret-left-light.icon";
import { CaretLeftRegularIcon } from "../regular/caret-left-regular.icon";
import { CaretLeftThinIcon } from "../thin/caret-left-thin.icon";

export const CaretLeftIcon = createIcon("CaretLeft", {
  bold: CaretLeftBoldIcon,
  duotone: CaretLeftDuotoneIcon,
  fill: CaretLeftFillIcon,
  light: CaretLeftLightIcon,
  regular: CaretLeftRegularIcon,
  thin: CaretLeftThinIcon,
});
