import { createIcon } from "../../hocs/create-icon.hoc";
import { HammerBoldIcon } from "../bold/hammer-bold.icon";
import { HammerDuotoneIcon } from "../duotone/hammer-duotone.icon";
import { HammerFillIcon } from "../fill/hammer-fill.icon";
import { HammerLightIcon } from "../light/hammer-light.icon";
import { HammerRegularIcon } from "../regular/hammer-regular.icon";
import { HammerThinIcon } from "../thin/hammer-thin.icon";

export const HammerIcon = createIcon("Hammer", {
  bold: HammerBoldIcon,
  duotone: HammerDuotoneIcon,
  fill: HammerFillIcon,
  light: HammerLightIcon,
  regular: HammerRegularIcon,
  thin: HammerThinIcon,
});
