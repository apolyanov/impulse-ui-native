import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowLeftBoldIcon } from "../bold/arrow-left-bold.icon";
import { ArrowLeftDuotoneIcon } from "../duotone/arrow-left-duotone.icon";
import { ArrowLeftFillIcon } from "../fill/arrow-left-fill.icon";
import { ArrowLeftLightIcon } from "../light/arrow-left-light.icon";
import { ArrowLeftRegularIcon } from "../regular/arrow-left-regular.icon";
import { ArrowLeftThinIcon } from "../thin/arrow-left-thin.icon";

export const ArrowLeftIcon = createIcon("ArrowLeft", {
  bold: ArrowLeftBoldIcon,
  duotone: ArrowLeftDuotoneIcon,
  fill: ArrowLeftFillIcon,
  light: ArrowLeftLightIcon,
  regular: ArrowLeftRegularIcon,
  thin: ArrowLeftThinIcon,
});
