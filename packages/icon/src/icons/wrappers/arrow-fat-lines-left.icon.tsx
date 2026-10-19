import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowFatLinesLeftBoldIcon } from "../bold/arrow-fat-lines-left-bold.icon";
import { ArrowFatLinesLeftDuotoneIcon } from "../duotone/arrow-fat-lines-left-duotone.icon";
import { ArrowFatLinesLeftFillIcon } from "../fill/arrow-fat-lines-left-fill.icon";
import { ArrowFatLinesLeftLightIcon } from "../light/arrow-fat-lines-left-light.icon";
import { ArrowFatLinesLeftRegularIcon } from "../regular/arrow-fat-lines-left-regular.icon";
import { ArrowFatLinesLeftThinIcon } from "../thin/arrow-fat-lines-left-thin.icon";

export const ArrowFatLinesLeftIcon = createIcon("ArrowFatLinesLeft", {
  bold: ArrowFatLinesLeftBoldIcon,
  duotone: ArrowFatLinesLeftDuotoneIcon,
  fill: ArrowFatLinesLeftFillIcon,
  light: ArrowFatLinesLeftLightIcon,
  regular: ArrowFatLinesLeftRegularIcon,
  thin: ArrowFatLinesLeftThinIcon,
});
