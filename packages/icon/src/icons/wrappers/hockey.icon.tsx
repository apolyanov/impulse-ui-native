import { createIcon } from "../../hocs/create-icon.hoc";
import { HockeyBoldIcon } from "../bold/hockey-bold.icon";
import { HockeyDuotoneIcon } from "../duotone/hockey-duotone.icon";
import { HockeyFillIcon } from "../fill/hockey-fill.icon";
import { HockeyLightIcon } from "../light/hockey-light.icon";
import { HockeyRegularIcon } from "../regular/hockey-regular.icon";
import { HockeyThinIcon } from "../thin/hockey-thin.icon";

export const HockeyIcon = createIcon("Hockey", {
  bold: HockeyBoldIcon,
  duotone: HockeyDuotoneIcon,
  fill: HockeyFillIcon,
  light: HockeyLightIcon,
  regular: HockeyRegularIcon,
  thin: HockeyThinIcon,
});
