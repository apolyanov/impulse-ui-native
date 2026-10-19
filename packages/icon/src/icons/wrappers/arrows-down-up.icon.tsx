import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowsDownUpBoldIcon } from "../bold/arrows-down-up-bold.icon";
import { ArrowsDownUpDuotoneIcon } from "../duotone/arrows-down-up-duotone.icon";
import { ArrowsDownUpFillIcon } from "../fill/arrows-down-up-fill.icon";
import { ArrowsDownUpLightIcon } from "../light/arrows-down-up-light.icon";
import { ArrowsDownUpRegularIcon } from "../regular/arrows-down-up-regular.icon";
import { ArrowsDownUpThinIcon } from "../thin/arrows-down-up-thin.icon";

export const ArrowsDownUpIcon = createIcon("ArrowsDownUp", {
  bold: ArrowsDownUpBoldIcon,
  duotone: ArrowsDownUpDuotoneIcon,
  fill: ArrowsDownUpFillIcon,
  light: ArrowsDownUpLightIcon,
  regular: ArrowsDownUpRegularIcon,
  thin: ArrowsDownUpThinIcon,
});
