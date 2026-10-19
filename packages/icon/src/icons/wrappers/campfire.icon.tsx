import { createIcon } from "../../hocs/create-icon.hoc";
import { CampfireBoldIcon } from "../bold/campfire-bold.icon";
import { CampfireDuotoneIcon } from "../duotone/campfire-duotone.icon";
import { CampfireFillIcon } from "../fill/campfire-fill.icon";
import { CampfireLightIcon } from "../light/campfire-light.icon";
import { CampfireRegularIcon } from "../regular/campfire-regular.icon";
import { CampfireThinIcon } from "../thin/campfire-thin.icon";

export const CampfireIcon = createIcon("Campfire", {
  bold: CampfireBoldIcon,
  duotone: CampfireDuotoneIcon,
  fill: CampfireFillIcon,
  light: CampfireLightIcon,
  regular: CampfireRegularIcon,
  thin: CampfireThinIcon,
});
