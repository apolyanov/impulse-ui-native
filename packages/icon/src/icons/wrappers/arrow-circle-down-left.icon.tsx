import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowCircleDownLeftBoldIcon } from "../bold/arrow-circle-down-left-bold.icon";
import { ArrowCircleDownLeftDuotoneIcon } from "../duotone/arrow-circle-down-left-duotone.icon";
import { ArrowCircleDownLeftFillIcon } from "../fill/arrow-circle-down-left-fill.icon";
import { ArrowCircleDownLeftLightIcon } from "../light/arrow-circle-down-left-light.icon";
import { ArrowCircleDownLeftRegularIcon } from "../regular/arrow-circle-down-left-regular.icon";
import { ArrowCircleDownLeftThinIcon } from "../thin/arrow-circle-down-left-thin.icon";

export const ArrowCircleDownLeftIcon = createIcon("ArrowCircleDownLeft", {
  bold: ArrowCircleDownLeftBoldIcon,
  duotone: ArrowCircleDownLeftDuotoneIcon,
  fill: ArrowCircleDownLeftFillIcon,
  light: ArrowCircleDownLeftLightIcon,
  regular: ArrowCircleDownLeftRegularIcon,
  thin: ArrowCircleDownLeftThinIcon,
});
