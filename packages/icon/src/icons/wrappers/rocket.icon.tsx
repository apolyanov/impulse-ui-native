import { createIcon } from "../../hocs/create-icon.hoc";
import { RocketBoldIcon } from "../bold/rocket-bold.icon";
import { RocketDuotoneIcon } from "../duotone/rocket-duotone.icon";
import { RocketFillIcon } from "../fill/rocket-fill.icon";
import { RocketLightIcon } from "../light/rocket-light.icon";
import { RocketRegularIcon } from "../regular/rocket-regular.icon";
import { RocketThinIcon } from "../thin/rocket-thin.icon";

export const RocketIcon = createIcon("Rocket", {
  bold: RocketBoldIcon,
  duotone: RocketDuotoneIcon,
  fill: RocketFillIcon,
  light: RocketLightIcon,
  regular: RocketRegularIcon,
  thin: RocketThinIcon,
});
