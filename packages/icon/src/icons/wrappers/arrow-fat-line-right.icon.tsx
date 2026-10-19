import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowFatLineRightBoldIcon } from "../bold/arrow-fat-line-right-bold.icon";
import { ArrowFatLineRightDuotoneIcon } from "../duotone/arrow-fat-line-right-duotone.icon";
import { ArrowFatLineRightFillIcon } from "../fill/arrow-fat-line-right-fill.icon";
import { ArrowFatLineRightLightIcon } from "../light/arrow-fat-line-right-light.icon";
import { ArrowFatLineRightRegularIcon } from "../regular/arrow-fat-line-right-regular.icon";
import { ArrowFatLineRightThinIcon } from "../thin/arrow-fat-line-right-thin.icon";

export const ArrowFatLineRightIcon = createIcon("ArrowFatLineRight", {
  bold: ArrowFatLineRightBoldIcon,
  duotone: ArrowFatLineRightDuotoneIcon,
  fill: ArrowFatLineRightFillIcon,
  light: ArrowFatLineRightLightIcon,
  regular: ArrowFatLineRightRegularIcon,
  thin: ArrowFatLineRightThinIcon,
});
