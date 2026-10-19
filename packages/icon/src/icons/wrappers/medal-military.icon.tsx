import { createIcon } from "../../hocs/create-icon.hoc";
import { MedalMilitaryBoldIcon } from "../bold/medal-military-bold.icon";
import { MedalMilitaryDuotoneIcon } from "../duotone/medal-military-duotone.icon";
import { MedalMilitaryFillIcon } from "../fill/medal-military-fill.icon";
import { MedalMilitaryLightIcon } from "../light/medal-military-light.icon";
import { MedalMilitaryRegularIcon } from "../regular/medal-military-regular.icon";
import { MedalMilitaryThinIcon } from "../thin/medal-military-thin.icon";

export const MedalMilitaryIcon = createIcon("MedalMilitary", {
  bold: MedalMilitaryBoldIcon,
  duotone: MedalMilitaryDuotoneIcon,
  fill: MedalMilitaryFillIcon,
  light: MedalMilitaryLightIcon,
  regular: MedalMilitaryRegularIcon,
  thin: MedalMilitaryThinIcon,
});
