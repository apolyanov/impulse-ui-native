import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowSquareUpLeftBoldIcon } from "../bold/arrow-square-up-left-bold.icon";
import { ArrowSquareUpLeftDuotoneIcon } from "../duotone/arrow-square-up-left-duotone.icon";
import { ArrowSquareUpLeftFillIcon } from "../fill/arrow-square-up-left-fill.icon";
import { ArrowSquareUpLeftLightIcon } from "../light/arrow-square-up-left-light.icon";
import { ArrowSquareUpLeftRegularIcon } from "../regular/arrow-square-up-left-regular.icon";
import { ArrowSquareUpLeftThinIcon } from "../thin/arrow-square-up-left-thin.icon";

export const ArrowSquareUpLeftIcon = createIcon("ArrowSquareUpLeft", {
  bold: ArrowSquareUpLeftBoldIcon,
  duotone: ArrowSquareUpLeftDuotoneIcon,
  fill: ArrowSquareUpLeftFillIcon,
  light: ArrowSquareUpLeftLightIcon,
  regular: ArrowSquareUpLeftRegularIcon,
  thin: ArrowSquareUpLeftThinIcon,
});
