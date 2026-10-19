import { createIcon } from "../../hocs/create-icon.hoc";
import { DiscBoldIcon } from "../bold/disc-bold.icon";
import { DiscDuotoneIcon } from "../duotone/disc-duotone.icon";
import { DiscFillIcon } from "../fill/disc-fill.icon";
import { DiscLightIcon } from "../light/disc-light.icon";
import { DiscRegularIcon } from "../regular/disc-regular.icon";
import { DiscThinIcon } from "../thin/disc-thin.icon";

export const DiscIcon = createIcon("Disc", {
  bold: DiscBoldIcon,
  duotone: DiscDuotoneIcon,
  fill: DiscFillIcon,
  light: DiscLightIcon,
  regular: DiscRegularIcon,
  thin: DiscThinIcon,
});
