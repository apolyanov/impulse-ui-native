import { createIcon } from "../../hocs/create-icon.hoc";
import { CaretDoubleLeftBoldIcon } from "../bold/caret-double-left-bold.icon";
import { CaretDoubleLeftDuotoneIcon } from "../duotone/caret-double-left-duotone.icon";
import { CaretDoubleLeftFillIcon } from "../fill/caret-double-left-fill.icon";
import { CaretDoubleLeftLightIcon } from "../light/caret-double-left-light.icon";
import { CaretDoubleLeftRegularIcon } from "../regular/caret-double-left-regular.icon";
import { CaretDoubleLeftThinIcon } from "../thin/caret-double-left-thin.icon";

export const CaretDoubleLeftIcon = createIcon("CaretDoubleLeft", {
  bold: CaretDoubleLeftBoldIcon,
  duotone: CaretDoubleLeftDuotoneIcon,
  fill: CaretDoubleLeftFillIcon,
  light: CaretDoubleLeftLightIcon,
  regular: CaretDoubleLeftRegularIcon,
  thin: CaretDoubleLeftThinIcon,
});
