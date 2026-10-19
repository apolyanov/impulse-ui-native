import { createIcon } from "../../hocs/create-icon.hoc";
import { AlienBoldIcon } from "../bold/alien-bold.icon";
import { AlienDuotoneIcon } from "../duotone/alien-duotone.icon";
import { AlienFillIcon } from "../fill/alien-fill.icon";
import { AlienLightIcon } from "../light/alien-light.icon";
import { AlienRegularIcon } from "../regular/alien-regular.icon";
import { AlienThinIcon } from "../thin/alien-thin.icon";

export const AlienIcon = createIcon("Alien", {
  bold: AlienBoldIcon,
  duotone: AlienDuotoneIcon,
  fill: AlienFillIcon,
  light: AlienLightIcon,
  regular: AlienRegularIcon,
  thin: AlienThinIcon,
});
