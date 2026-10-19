import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowFatDownBoldIcon } from "../bold/arrow-fat-down-bold.icon";
import { ArrowFatDownDuotoneIcon } from "../duotone/arrow-fat-down-duotone.icon";
import { ArrowFatDownFillIcon } from "../fill/arrow-fat-down-fill.icon";
import { ArrowFatDownLightIcon } from "../light/arrow-fat-down-light.icon";
import { ArrowFatDownRegularIcon } from "../regular/arrow-fat-down-regular.icon";
import { ArrowFatDownThinIcon } from "../thin/arrow-fat-down-thin.icon";

export const ArrowFatDownIcon = createIcon("ArrowFatDown", {
  bold: ArrowFatDownBoldIcon,
  duotone: ArrowFatDownDuotoneIcon,
  fill: ArrowFatDownFillIcon,
  light: ArrowFatDownLightIcon,
  regular: ArrowFatDownRegularIcon,
  thin: ArrowFatDownThinIcon,
});
