import { createIcon } from "../../hocs/create-icon.hoc";
import { WarningDiamondBoldIcon } from "../bold/warning-diamond-bold.icon";
import { WarningDiamondDuotoneIcon } from "../duotone/warning-diamond-duotone.icon";
import { WarningDiamondFillIcon } from "../fill/warning-diamond-fill.icon";
import { WarningDiamondLightIcon } from "../light/warning-diamond-light.icon";
import { WarningDiamondRegularIcon } from "../regular/warning-diamond-regular.icon";
import { WarningDiamondThinIcon } from "../thin/warning-diamond-thin.icon";

export const WarningDiamondIcon = createIcon("WarningDiamond", {
  bold: WarningDiamondBoldIcon,
  duotone: WarningDiamondDuotoneIcon,
  fill: WarningDiamondFillIcon,
  light: WarningDiamondLightIcon,
  regular: WarningDiamondRegularIcon,
  thin: WarningDiamondThinIcon,
});
