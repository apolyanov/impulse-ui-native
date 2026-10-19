import { createIcon } from "../../hocs/create-icon.hoc";
import { RainbowBoldIcon } from "../bold/rainbow-bold.icon";
import { RainbowDuotoneIcon } from "../duotone/rainbow-duotone.icon";
import { RainbowFillIcon } from "../fill/rainbow-fill.icon";
import { RainbowLightIcon } from "../light/rainbow-light.icon";
import { RainbowRegularIcon } from "../regular/rainbow-regular.icon";
import { RainbowThinIcon } from "../thin/rainbow-thin.icon";

export const RainbowIcon = createIcon("Rainbow", {
  bold: RainbowBoldIcon,
  duotone: RainbowDuotoneIcon,
  fill: RainbowFillIcon,
  light: RainbowLightIcon,
  regular: RainbowRegularIcon,
  thin: RainbowThinIcon,
});
