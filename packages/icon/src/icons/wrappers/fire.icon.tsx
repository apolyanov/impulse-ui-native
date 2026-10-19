import { createIcon } from "../../hocs/create-icon.hoc";
import { FireBoldIcon } from "../bold/fire-bold.icon";
import { FireDuotoneIcon } from "../duotone/fire-duotone.icon";
import { FireFillIcon } from "../fill/fire-fill.icon";
import { FireLightIcon } from "../light/fire-light.icon";
import { FireRegularIcon } from "../regular/fire-regular.icon";
import { FireThinIcon } from "../thin/fire-thin.icon";

export const FireIcon = createIcon("Fire", {
  bold: FireBoldIcon,
  duotone: FireDuotoneIcon,
  fill: FireFillIcon,
  light: FireLightIcon,
  regular: FireRegularIcon,
  thin: FireThinIcon,
});
