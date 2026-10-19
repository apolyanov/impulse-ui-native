import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowFatLinesDownBoldIcon } from "../bold/arrow-fat-lines-down-bold.icon";
import { ArrowFatLinesDownDuotoneIcon } from "../duotone/arrow-fat-lines-down-duotone.icon";
import { ArrowFatLinesDownFillIcon } from "../fill/arrow-fat-lines-down-fill.icon";
import { ArrowFatLinesDownLightIcon } from "../light/arrow-fat-lines-down-light.icon";
import { ArrowFatLinesDownRegularIcon } from "../regular/arrow-fat-lines-down-regular.icon";
import { ArrowFatLinesDownThinIcon } from "../thin/arrow-fat-lines-down-thin.icon";

export const ArrowFatLinesDownIcon = createIcon("ArrowFatLinesDown", {
  bold: ArrowFatLinesDownBoldIcon,
  duotone: ArrowFatLinesDownDuotoneIcon,
  fill: ArrowFatLinesDownFillIcon,
  light: ArrowFatLinesDownLightIcon,
  regular: ArrowFatLinesDownRegularIcon,
  thin: ArrowFatLinesDownThinIcon,
});
