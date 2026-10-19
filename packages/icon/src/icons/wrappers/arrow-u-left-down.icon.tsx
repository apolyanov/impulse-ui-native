import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowULeftDownBoldIcon } from "../bold/arrow-u-left-down-bold.icon";
import { ArrowULeftDownDuotoneIcon } from "../duotone/arrow-u-left-down-duotone.icon";
import { ArrowULeftDownFillIcon } from "../fill/arrow-u-left-down-fill.icon";
import { ArrowULeftDownLightIcon } from "../light/arrow-u-left-down-light.icon";
import { ArrowULeftDownRegularIcon } from "../regular/arrow-u-left-down-regular.icon";
import { ArrowULeftDownThinIcon } from "../thin/arrow-u-left-down-thin.icon";

export const ArrowULeftDownIcon = createIcon("ArrowULeftDown", {
  bold: ArrowULeftDownBoldIcon,
  duotone: ArrowULeftDownDuotoneIcon,
  fill: ArrowULeftDownFillIcon,
  light: ArrowULeftDownLightIcon,
  regular: ArrowULeftDownRegularIcon,
  thin: ArrowULeftDownThinIcon,
});
