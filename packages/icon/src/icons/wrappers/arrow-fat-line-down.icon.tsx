import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowFatLineDownBoldIcon } from "../bold/arrow-fat-line-down-bold.icon";
import { ArrowFatLineDownDuotoneIcon } from "../duotone/arrow-fat-line-down-duotone.icon";
import { ArrowFatLineDownFillIcon } from "../fill/arrow-fat-line-down-fill.icon";
import { ArrowFatLineDownLightIcon } from "../light/arrow-fat-line-down-light.icon";
import { ArrowFatLineDownRegularIcon } from "../regular/arrow-fat-line-down-regular.icon";
import { ArrowFatLineDownThinIcon } from "../thin/arrow-fat-line-down-thin.icon";

export const ArrowFatLineDownIcon = createIcon("ArrowFatLineDown", {
  bold: ArrowFatLineDownBoldIcon,
  duotone: ArrowFatLineDownDuotoneIcon,
  fill: ArrowFatLineDownFillIcon,
  light: ArrowFatLineDownLightIcon,
  regular: ArrowFatLineDownRegularIcon,
  thin: ArrowFatLineDownThinIcon,
});
