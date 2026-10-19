import { createIcon } from "../../hocs/create-icon.hoc";
import { CaretLineLeftBoldIcon } from "../bold/caret-line-left-bold.icon";
import { CaretLineLeftDuotoneIcon } from "../duotone/caret-line-left-duotone.icon";
import { CaretLineLeftFillIcon } from "../fill/caret-line-left-fill.icon";
import { CaretLineLeftLightIcon } from "../light/caret-line-left-light.icon";
import { CaretLineLeftRegularIcon } from "../regular/caret-line-left-regular.icon";
import { CaretLineLeftThinIcon } from "../thin/caret-line-left-thin.icon";

export const CaretLineLeftIcon = createIcon("CaretLineLeft", {
  bold: CaretLineLeftBoldIcon,
  duotone: CaretLineLeftDuotoneIcon,
  fill: CaretLineLeftFillIcon,
  light: CaretLineLeftLightIcon,
  regular: CaretLineLeftRegularIcon,
  thin: CaretLineLeftThinIcon,
});
