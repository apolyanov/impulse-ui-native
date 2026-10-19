import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowSquareOutBoldIcon } from "../bold/arrow-square-out-bold.icon";
import { ArrowSquareOutDuotoneIcon } from "../duotone/arrow-square-out-duotone.icon";
import { ArrowSquareOutFillIcon } from "../fill/arrow-square-out-fill.icon";
import { ArrowSquareOutLightIcon } from "../light/arrow-square-out-light.icon";
import { ArrowSquareOutRegularIcon } from "../regular/arrow-square-out-regular.icon";
import { ArrowSquareOutThinIcon } from "../thin/arrow-square-out-thin.icon";

export const ArrowSquareOutIcon = createIcon("ArrowSquareOut", {
  bold: ArrowSquareOutBoldIcon,
  duotone: ArrowSquareOutDuotoneIcon,
  fill: ArrowSquareOutFillIcon,
  light: ArrowSquareOutLightIcon,
  regular: ArrowSquareOutRegularIcon,
  thin: ArrowSquareOutThinIcon,
});
