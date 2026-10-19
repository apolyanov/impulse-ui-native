import { createIcon } from "../../hocs/create-icon.hoc";
import { MedalBoldIcon } from "../bold/medal-bold.icon";
import { MedalDuotoneIcon } from "../duotone/medal-duotone.icon";
import { MedalFillIcon } from "../fill/medal-fill.icon";
import { MedalLightIcon } from "../light/medal-light.icon";
import { MedalRegularIcon } from "../regular/medal-regular.icon";
import { MedalThinIcon } from "../thin/medal-thin.icon";

export const MedalIcon = createIcon("Medal", {
  bold: MedalBoldIcon,
  duotone: MedalDuotoneIcon,
  fill: MedalFillIcon,
  light: MedalLightIcon,
  regular: MedalRegularIcon,
  thin: MedalThinIcon,
});
