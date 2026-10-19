import { createIcon } from "../../hocs/create-icon.hoc";
import { CaretDoubleDownBoldIcon } from "../bold/caret-double-down-bold.icon";
import { CaretDoubleDownDuotoneIcon } from "../duotone/caret-double-down-duotone.icon";
import { CaretDoubleDownFillIcon } from "../fill/caret-double-down-fill.icon";
import { CaretDoubleDownLightIcon } from "../light/caret-double-down-light.icon";
import { CaretDoubleDownRegularIcon } from "../regular/caret-double-down-regular.icon";
import { CaretDoubleDownThinIcon } from "../thin/caret-double-down-thin.icon";

export const CaretDoubleDownIcon = createIcon("CaretDoubleDown", {
  bold: CaretDoubleDownBoldIcon,
  duotone: CaretDoubleDownDuotoneIcon,
  fill: CaretDoubleDownFillIcon,
  light: CaretDoubleDownLightIcon,
  regular: CaretDoubleDownRegularIcon,
  thin: CaretDoubleDownThinIcon,
});
