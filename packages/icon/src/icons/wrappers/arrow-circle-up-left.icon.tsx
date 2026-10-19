import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowCircleUpLeftBoldIcon } from "../bold/arrow-circle-up-left-bold.icon";
import { ArrowCircleUpLeftDuotoneIcon } from "../duotone/arrow-circle-up-left-duotone.icon";
import { ArrowCircleUpLeftFillIcon } from "../fill/arrow-circle-up-left-fill.icon";
import { ArrowCircleUpLeftLightIcon } from "../light/arrow-circle-up-left-light.icon";
import { ArrowCircleUpLeftRegularIcon } from "../regular/arrow-circle-up-left-regular.icon";
import { ArrowCircleUpLeftThinIcon } from "../thin/arrow-circle-up-left-thin.icon";

export const ArrowCircleUpLeftIcon = createIcon("ArrowCircleUpLeft", {
  bold: ArrowCircleUpLeftBoldIcon,
  duotone: ArrowCircleUpLeftDuotoneIcon,
  fill: ArrowCircleUpLeftFillIcon,
  light: ArrowCircleUpLeftLightIcon,
  regular: ArrowCircleUpLeftRegularIcon,
  thin: ArrowCircleUpLeftThinIcon,
});
