import { createIcon } from "../../hocs/create-icon.hoc";
import { CookingPotBoldIcon } from "../bold/cooking-pot-bold.icon";
import { CookingPotDuotoneIcon } from "../duotone/cooking-pot-duotone.icon";
import { CookingPotFillIcon } from "../fill/cooking-pot-fill.icon";
import { CookingPotLightIcon } from "../light/cooking-pot-light.icon";
import { CookingPotRegularIcon } from "../regular/cooking-pot-regular.icon";
import { CookingPotThinIcon } from "../thin/cooking-pot-thin.icon";

export const CookingPotIcon = createIcon("CookingPot", {
  bold: CookingPotBoldIcon,
  duotone: CookingPotDuotoneIcon,
  fill: CookingPotFillIcon,
  light: CookingPotLightIcon,
  regular: CookingPotRegularIcon,
  thin: CookingPotThinIcon,
});
