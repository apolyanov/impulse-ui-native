import { createIcon } from "../../hocs/create-icon.hoc";
import { CaretDoubleRightBoldIcon } from "../bold/caret-double-right-bold.icon";
import { CaretDoubleRightDuotoneIcon } from "../duotone/caret-double-right-duotone.icon";
import { CaretDoubleRightFillIcon } from "../fill/caret-double-right-fill.icon";
import { CaretDoubleRightLightIcon } from "../light/caret-double-right-light.icon";
import { CaretDoubleRightRegularIcon } from "../regular/caret-double-right-regular.icon";
import { CaretDoubleRightThinIcon } from "../thin/caret-double-right-thin.icon";

export const CaretDoubleRightIcon = createIcon("CaretDoubleRight", {
  bold: CaretDoubleRightBoldIcon,
  duotone: CaretDoubleRightDuotoneIcon,
  fill: CaretDoubleRightFillIcon,
  light: CaretDoubleRightLightIcon,
  regular: CaretDoubleRightRegularIcon,
  thin: CaretDoubleRightThinIcon,
});
