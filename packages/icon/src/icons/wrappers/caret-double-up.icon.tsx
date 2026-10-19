import { createIcon } from "../../hocs/create-icon.hoc";
import { CaretDoubleUpBoldIcon } from "../bold/caret-double-up-bold.icon";
import { CaretDoubleUpDuotoneIcon } from "../duotone/caret-double-up-duotone.icon";
import { CaretDoubleUpFillIcon } from "../fill/caret-double-up-fill.icon";
import { CaretDoubleUpLightIcon } from "../light/caret-double-up-light.icon";
import { CaretDoubleUpRegularIcon } from "../regular/caret-double-up-regular.icon";
import { CaretDoubleUpThinIcon } from "../thin/caret-double-up-thin.icon";

export const CaretDoubleUpIcon = createIcon("CaretDoubleUp", {
  bold: CaretDoubleUpBoldIcon,
  duotone: CaretDoubleUpDuotoneIcon,
  fill: CaretDoubleUpFillIcon,
  light: CaretDoubleUpLightIcon,
  regular: CaretDoubleUpRegularIcon,
  thin: CaretDoubleUpThinIcon,
});
