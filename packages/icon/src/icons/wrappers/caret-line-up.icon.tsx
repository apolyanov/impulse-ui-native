import { createIcon } from "../../hocs/create-icon.hoc";
import { CaretLineUpBoldIcon } from "../bold/caret-line-up-bold.icon";
import { CaretLineUpDuotoneIcon } from "../duotone/caret-line-up-duotone.icon";
import { CaretLineUpFillIcon } from "../fill/caret-line-up-fill.icon";
import { CaretLineUpLightIcon } from "../light/caret-line-up-light.icon";
import { CaretLineUpRegularIcon } from "../regular/caret-line-up-regular.icon";
import { CaretLineUpThinIcon } from "../thin/caret-line-up-thin.icon";

export const CaretLineUpIcon = createIcon("CaretLineUp", {
  bold: CaretLineUpBoldIcon,
  duotone: CaretLineUpDuotoneIcon,
  fill: CaretLineUpFillIcon,
  light: CaretLineUpLightIcon,
  regular: CaretLineUpRegularIcon,
  thin: CaretLineUpThinIcon,
});
