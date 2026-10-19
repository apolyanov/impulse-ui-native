import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowFatLinesRightBoldIcon } from "../bold/arrow-fat-lines-right-bold.icon";
import { ArrowFatLinesRightDuotoneIcon } from "../duotone/arrow-fat-lines-right-duotone.icon";
import { ArrowFatLinesRightFillIcon } from "../fill/arrow-fat-lines-right-fill.icon";
import { ArrowFatLinesRightLightIcon } from "../light/arrow-fat-lines-right-light.icon";
import { ArrowFatLinesRightRegularIcon } from "../regular/arrow-fat-lines-right-regular.icon";
import { ArrowFatLinesRightThinIcon } from "../thin/arrow-fat-lines-right-thin.icon";

export const ArrowFatLinesRightIcon = createIcon("ArrowFatLinesRight", {
  bold: ArrowFatLinesRightBoldIcon,
  duotone: ArrowFatLinesRightDuotoneIcon,
  fill: ArrowFatLinesRightFillIcon,
  light: ArrowFatLinesRightLightIcon,
  regular: ArrowFatLinesRightRegularIcon,
  thin: ArrowFatLinesRightThinIcon,
});
