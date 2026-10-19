import { createIcon } from "../../hocs/create-icon.hoc";
import { CheckerboardBoldIcon } from "../bold/checkerboard-bold.icon";
import { CheckerboardDuotoneIcon } from "../duotone/checkerboard-duotone.icon";
import { CheckerboardFillIcon } from "../fill/checkerboard-fill.icon";
import { CheckerboardLightIcon } from "../light/checkerboard-light.icon";
import { CheckerboardRegularIcon } from "../regular/checkerboard-regular.icon";
import { CheckerboardThinIcon } from "../thin/checkerboard-thin.icon";

export const CheckerboardIcon = createIcon("Checkerboard", {
  bold: CheckerboardBoldIcon,
  duotone: CheckerboardDuotoneIcon,
  fill: CheckerboardFillIcon,
  light: CheckerboardLightIcon,
  regular: CheckerboardRegularIcon,
  thin: CheckerboardThinIcon,
});
