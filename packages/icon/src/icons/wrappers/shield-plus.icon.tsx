import { createIcon } from "../../hocs/create-icon.hoc";
import { ShieldPlusBoldIcon } from "../bold/shield-plus-bold.icon";
import { ShieldPlusDuotoneIcon } from "../duotone/shield-plus-duotone.icon";
import { ShieldPlusFillIcon } from "../fill/shield-plus-fill.icon";
import { ShieldPlusLightIcon } from "../light/shield-plus-light.icon";
import { ShieldPlusRegularIcon } from "../regular/shield-plus-regular.icon";
import { ShieldPlusThinIcon } from "../thin/shield-plus-thin.icon";

export const ShieldPlusIcon = createIcon("ShieldPlus", {
  bold: ShieldPlusBoldIcon,
  duotone: ShieldPlusDuotoneIcon,
  fill: ShieldPlusFillIcon,
  light: ShieldPlusLightIcon,
  regular: ShieldPlusRegularIcon,
  thin: ShieldPlusThinIcon,
});
