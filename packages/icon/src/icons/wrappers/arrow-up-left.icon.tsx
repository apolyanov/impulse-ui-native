import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowUpLeftBoldIcon } from "../bold/arrow-up-left-bold.icon";
import { ArrowUpLeftDuotoneIcon } from "../duotone/arrow-up-left-duotone.icon";
import { ArrowUpLeftFillIcon } from "../fill/arrow-up-left-fill.icon";
import { ArrowUpLeftLightIcon } from "../light/arrow-up-left-light.icon";
import { ArrowUpLeftRegularIcon } from "../regular/arrow-up-left-regular.icon";
import { ArrowUpLeftThinIcon } from "../thin/arrow-up-left-thin.icon";

export const ArrowUpLeftIcon = createIcon("ArrowUpLeft", {
  bold: ArrowUpLeftBoldIcon,
  duotone: ArrowUpLeftDuotoneIcon,
  fill: ArrowUpLeftFillIcon,
  light: ArrowUpLeftLightIcon,
  regular: ArrowUpLeftRegularIcon,
  thin: ArrowUpLeftThinIcon,
});
