import { createIcon } from "../../hocs/create-icon.hoc";
import { FarmBoldIcon } from "../bold/farm-bold.icon";
import { FarmDuotoneIcon } from "../duotone/farm-duotone.icon";
import { FarmFillIcon } from "../fill/farm-fill.icon";
import { FarmLightIcon } from "../light/farm-light.icon";
import { FarmRegularIcon } from "../regular/farm-regular.icon";
import { FarmThinIcon } from "../thin/farm-thin.icon";

export const FarmIcon = createIcon("Farm", {
  bold: FarmBoldIcon,
  duotone: FarmDuotoneIcon,
  fill: FarmFillIcon,
  light: FarmLightIcon,
  regular: FarmRegularIcon,
  thin: FarmThinIcon,
});
