import { createIcon } from "../../hocs/create-icon.hoc";
import { MagicWandBoldIcon } from "../bold/magic-wand-bold.icon";
import { MagicWandDuotoneIcon } from "../duotone/magic-wand-duotone.icon";
import { MagicWandFillIcon } from "../fill/magic-wand-fill.icon";
import { MagicWandLightIcon } from "../light/magic-wand-light.icon";
import { MagicWandRegularIcon } from "../regular/magic-wand-regular.icon";
import { MagicWandThinIcon } from "../thin/magic-wand-thin.icon";

export const MagicWandIcon = createIcon("MagicWand", {
  bold: MagicWandBoldIcon,
  duotone: MagicWandDuotoneIcon,
  fill: MagicWandFillIcon,
  light: MagicWandLightIcon,
  regular: MagicWandRegularIcon,
  thin: MagicWandThinIcon,
});
