import { createIcon } from "../../hocs/create-icon.hoc";
import { SpiralBoldIcon } from "../bold/spiral-bold.icon";
import { SpiralDuotoneIcon } from "../duotone/spiral-duotone.icon";
import { SpiralFillIcon } from "../fill/spiral-fill.icon";
import { SpiralLightIcon } from "../light/spiral-light.icon";
import { SpiralRegularIcon } from "../regular/spiral-regular.icon";
import { SpiralThinIcon } from "../thin/spiral-thin.icon";

export const SpiralIcon = createIcon("Spiral", {
  bold: SpiralBoldIcon,
  duotone: SpiralDuotoneIcon,
  fill: SpiralFillIcon,
  light: SpiralLightIcon,
  regular: SpiralRegularIcon,
  thin: SpiralThinIcon,
});
