import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowFatRightBoldIcon } from "../bold/arrow-fat-right-bold.icon";
import { ArrowFatRightDuotoneIcon } from "../duotone/arrow-fat-right-duotone.icon";
import { ArrowFatRightFillIcon } from "../fill/arrow-fat-right-fill.icon";
import { ArrowFatRightLightIcon } from "../light/arrow-fat-right-light.icon";
import { ArrowFatRightRegularIcon } from "../regular/arrow-fat-right-regular.icon";
import { ArrowFatRightThinIcon } from "../thin/arrow-fat-right-thin.icon";

export const ArrowFatRightIcon = createIcon("ArrowFatRight", {
  bold: ArrowFatRightBoldIcon,
  duotone: ArrowFatRightDuotoneIcon,
  fill: ArrowFatRightFillIcon,
  light: ArrowFatRightLightIcon,
  regular: ArrowFatRightRegularIcon,
  thin: ArrowFatRightThinIcon,
});
