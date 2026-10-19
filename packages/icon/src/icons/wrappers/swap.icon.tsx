import { createIcon } from "../../hocs/create-icon.hoc";
import { SwapBoldIcon } from "../bold/swap-bold.icon";
import { SwapDuotoneIcon } from "../duotone/swap-duotone.icon";
import { SwapFillIcon } from "../fill/swap-fill.icon";
import { SwapLightIcon } from "../light/swap-light.icon";
import { SwapRegularIcon } from "../regular/swap-regular.icon";
import { SwapThinIcon } from "../thin/swap-thin.icon";

export const SwapIcon = createIcon("Swap", {
  bold: SwapBoldIcon,
  duotone: SwapDuotoneIcon,
  fill: SwapFillIcon,
  light: SwapLightIcon,
  regular: SwapRegularIcon,
  thin: SwapThinIcon,
});
