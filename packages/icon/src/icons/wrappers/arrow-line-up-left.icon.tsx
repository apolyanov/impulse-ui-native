import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowLineUpLeftBoldIcon } from "../bold/arrow-line-up-left-bold.icon";
import { ArrowLineUpLeftDuotoneIcon } from "../duotone/arrow-line-up-left-duotone.icon";
import { ArrowLineUpLeftFillIcon } from "../fill/arrow-line-up-left-fill.icon";
import { ArrowLineUpLeftLightIcon } from "../light/arrow-line-up-left-light.icon";
import { ArrowLineUpLeftRegularIcon } from "../regular/arrow-line-up-left-regular.icon";
import { ArrowLineUpLeftThinIcon } from "../thin/arrow-line-up-left-thin.icon";

export const ArrowLineUpLeftIcon = createIcon("ArrowLineUpLeft", {
  bold: ArrowLineUpLeftBoldIcon,
  duotone: ArrowLineUpLeftDuotoneIcon,
  fill: ArrowLineUpLeftFillIcon,
  light: ArrowLineUpLeftLightIcon,
  regular: ArrowLineUpLeftRegularIcon,
  thin: ArrowLineUpLeftThinIcon,
});
