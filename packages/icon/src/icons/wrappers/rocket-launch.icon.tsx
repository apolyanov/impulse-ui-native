import { createIcon } from "../../hocs/create-icon.hoc";
import { RocketLaunchBoldIcon } from "../bold/rocket-launch-bold.icon";
import { RocketLaunchDuotoneIcon } from "../duotone/rocket-launch-duotone.icon";
import { RocketLaunchFillIcon } from "../fill/rocket-launch-fill.icon";
import { RocketLaunchLightIcon } from "../light/rocket-launch-light.icon";
import { RocketLaunchRegularIcon } from "../regular/rocket-launch-regular.icon";
import { RocketLaunchThinIcon } from "../thin/rocket-launch-thin.icon";

export const RocketLaunchIcon = createIcon("RocketLaunch", {
  bold: RocketLaunchBoldIcon,
  duotone: RocketLaunchDuotoneIcon,
  fill: RocketLaunchFillIcon,
  light: RocketLaunchLightIcon,
  regular: RocketLaunchRegularIcon,
  thin: RocketLaunchThinIcon,
});
