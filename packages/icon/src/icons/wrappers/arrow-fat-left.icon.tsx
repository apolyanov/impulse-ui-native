import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowFatLeftBoldIcon } from "../bold/arrow-fat-left-bold.icon";
import { ArrowFatLeftDuotoneIcon } from "../duotone/arrow-fat-left-duotone.icon";
import { ArrowFatLeftFillIcon } from "../fill/arrow-fat-left-fill.icon";
import { ArrowFatLeftLightIcon } from "../light/arrow-fat-left-light.icon";
import { ArrowFatLeftRegularIcon } from "../regular/arrow-fat-left-regular.icon";
import { ArrowFatLeftThinIcon } from "../thin/arrow-fat-left-thin.icon";

export const ArrowFatLeftIcon = createIcon("ArrowFatLeft", {
  bold: ArrowFatLeftBoldIcon,
  duotone: ArrowFatLeftDuotoneIcon,
  fill: ArrowFatLeftFillIcon,
  light: ArrowFatLeftLightIcon,
  regular: ArrowFatLeftRegularIcon,
  thin: ArrowFatLeftThinIcon,
});
