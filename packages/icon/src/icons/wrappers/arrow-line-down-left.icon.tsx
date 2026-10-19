import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowLineDownLeftBoldIcon } from "../bold/arrow-line-down-left-bold.icon";
import { ArrowLineDownLeftDuotoneIcon } from "../duotone/arrow-line-down-left-duotone.icon";
import { ArrowLineDownLeftFillIcon } from "../fill/arrow-line-down-left-fill.icon";
import { ArrowLineDownLeftLightIcon } from "../light/arrow-line-down-left-light.icon";
import { ArrowLineDownLeftRegularIcon } from "../regular/arrow-line-down-left-regular.icon";
import { ArrowLineDownLeftThinIcon } from "../thin/arrow-line-down-left-thin.icon";

export const ArrowLineDownLeftIcon = createIcon("ArrowLineDownLeft", {
  bold: ArrowLineDownLeftBoldIcon,
  duotone: ArrowLineDownLeftDuotoneIcon,
  fill: ArrowLineDownLeftFillIcon,
  light: ArrowLineDownLeftLightIcon,
  regular: ArrowLineDownLeftRegularIcon,
  thin: ArrowLineDownLeftThinIcon,
});
