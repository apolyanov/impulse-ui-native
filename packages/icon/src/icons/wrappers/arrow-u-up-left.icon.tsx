import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowUUpLeftBoldIcon } from "../bold/arrow-u-up-left-bold.icon";
import { ArrowUUpLeftDuotoneIcon } from "../duotone/arrow-u-up-left-duotone.icon";
import { ArrowUUpLeftFillIcon } from "../fill/arrow-u-up-left-fill.icon";
import { ArrowUUpLeftLightIcon } from "../light/arrow-u-up-left-light.icon";
import { ArrowUUpLeftRegularIcon } from "../regular/arrow-u-up-left-regular.icon";
import { ArrowUUpLeftThinIcon } from "../thin/arrow-u-up-left-thin.icon";

export const ArrowUUpLeftIcon = createIcon("ArrowUUpLeft", {
  bold: ArrowUUpLeftBoldIcon,
  duotone: ArrowUUpLeftDuotoneIcon,
  fill: ArrowUUpLeftFillIcon,
  light: ArrowUUpLeftLightIcon,
  regular: ArrowUUpLeftRegularIcon,
  thin: ArrowUUpLeftThinIcon,
});
