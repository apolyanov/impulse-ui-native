import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowSquareLeftBoldIcon } from "../bold/arrow-square-left-bold.icon";
import { ArrowSquareLeftDuotoneIcon } from "../duotone/arrow-square-left-duotone.icon";
import { ArrowSquareLeftFillIcon } from "../fill/arrow-square-left-fill.icon";
import { ArrowSquareLeftLightIcon } from "../light/arrow-square-left-light.icon";
import { ArrowSquareLeftRegularIcon } from "../regular/arrow-square-left-regular.icon";
import { ArrowSquareLeftThinIcon } from "../thin/arrow-square-left-thin.icon";

export const ArrowSquareLeftIcon = createIcon("ArrowSquareLeft", {
  bold: ArrowSquareLeftBoldIcon,
  duotone: ArrowSquareLeftDuotoneIcon,
  fill: ArrowSquareLeftFillIcon,
  light: ArrowSquareLeftLightIcon,
  regular: ArrowSquareLeftRegularIcon,
  thin: ArrowSquareLeftThinIcon,
});
