import { createIcon } from "../../hocs/create-icon.hoc";
import { DiamondBoldIcon } from "../bold/diamond-bold.icon";
import { DiamondDuotoneIcon } from "../duotone/diamond-duotone.icon";
import { DiamondFillIcon } from "../fill/diamond-fill.icon";
import { DiamondLightIcon } from "../light/diamond-light.icon";
import { DiamondRegularIcon } from "../regular/diamond-regular.icon";
import { DiamondThinIcon } from "../thin/diamond-thin.icon";

export const DiamondIcon = createIcon("Diamond", {
  bold: DiamondBoldIcon,
  duotone: DiamondDuotoneIcon,
  fill: DiamondFillIcon,
  light: DiamondLightIcon,
  regular: DiamondRegularIcon,
  thin: DiamondThinIcon,
});
