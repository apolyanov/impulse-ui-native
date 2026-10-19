import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowDownLeftBoldIcon } from "../bold/arrow-down-left-bold.icon";
import { ArrowDownLeftDuotoneIcon } from "../duotone/arrow-down-left-duotone.icon";
import { ArrowDownLeftFillIcon } from "../fill/arrow-down-left-fill.icon";
import { ArrowDownLeftLightIcon } from "../light/arrow-down-left-light.icon";
import { ArrowDownLeftRegularIcon } from "../regular/arrow-down-left-regular.icon";
import { ArrowDownLeftThinIcon } from "../thin/arrow-down-left-thin.icon";

export const ArrowDownLeftIcon = createIcon("ArrowDownLeft", {
  bold: ArrowDownLeftBoldIcon,
  duotone: ArrowDownLeftDuotoneIcon,
  fill: ArrowDownLeftFillIcon,
  light: ArrowDownLeftLightIcon,
  regular: ArrowDownLeftRegularIcon,
  thin: ArrowDownLeftThinIcon,
});
