import { createIcon } from "../../hocs/create-icon.hoc";
import { TowelBoldIcon } from "../bold/towel-bold.icon";
import { TowelDuotoneIcon } from "../duotone/towel-duotone.icon";
import { TowelFillIcon } from "../fill/towel-fill.icon";
import { TowelLightIcon } from "../light/towel-light.icon";
import { TowelRegularIcon } from "../regular/towel-regular.icon";
import { TowelThinIcon } from "../thin/towel-thin.icon";

export const TowelIcon = createIcon("Towel", {
  bold: TowelBoldIcon,
  duotone: TowelDuotoneIcon,
  fill: TowelFillIcon,
  light: TowelLightIcon,
  regular: TowelRegularIcon,
  thin: TowelThinIcon,
});
