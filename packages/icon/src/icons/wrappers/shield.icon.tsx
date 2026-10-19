import { createIcon } from "../../hocs/create-icon.hoc";
import { ShieldBoldIcon } from "../bold/shield-bold.icon";
import { ShieldDuotoneIcon } from "../duotone/shield-duotone.icon";
import { ShieldFillIcon } from "../fill/shield-fill.icon";
import { ShieldLightIcon } from "../light/shield-light.icon";
import { ShieldRegularIcon } from "../regular/shield-regular.icon";
import { ShieldThinIcon } from "../thin/shield-thin.icon";

export const ShieldIcon = createIcon("Shield", {
  bold: ShieldBoldIcon,
  duotone: ShieldDuotoneIcon,
  fill: ShieldFillIcon,
  light: ShieldLightIcon,
  regular: ShieldRegularIcon,
  thin: ShieldThinIcon,
});
