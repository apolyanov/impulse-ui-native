import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowsOutBoldIcon } from "../bold/arrows-out-bold.icon";
import { ArrowsOutDuotoneIcon } from "../duotone/arrows-out-duotone.icon";
import { ArrowsOutFillIcon } from "../fill/arrows-out-fill.icon";
import { ArrowsOutLightIcon } from "../light/arrows-out-light.icon";
import { ArrowsOutRegularIcon } from "../regular/arrows-out-regular.icon";
import { ArrowsOutThinIcon } from "../thin/arrows-out-thin.icon";

export const ArrowsOutIcon = createIcon("ArrowsOut", {
  bold: ArrowsOutBoldIcon,
  duotone: ArrowsOutDuotoneIcon,
  fill: ArrowsOutFillIcon,
  light: ArrowsOutLightIcon,
  regular: ArrowsOutRegularIcon,
  thin: ArrowsOutThinIcon,
});
