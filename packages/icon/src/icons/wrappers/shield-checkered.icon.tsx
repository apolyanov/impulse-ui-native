import { createIcon } from "../../hocs/create-icon.hoc";
import { ShieldCheckeredBoldIcon } from "../bold/shield-checkered-bold.icon";
import { ShieldCheckeredDuotoneIcon } from "../duotone/shield-checkered-duotone.icon";
import { ShieldCheckeredFillIcon } from "../fill/shield-checkered-fill.icon";
import { ShieldCheckeredLightIcon } from "../light/shield-checkered-light.icon";
import { ShieldCheckeredRegularIcon } from "../regular/shield-checkered-regular.icon";
import { ShieldCheckeredThinIcon } from "../thin/shield-checkered-thin.icon";

export const ShieldCheckeredIcon = createIcon("ShieldCheckered", {
  bold: ShieldCheckeredBoldIcon,
  duotone: ShieldCheckeredDuotoneIcon,
  fill: ShieldCheckeredFillIcon,
  light: ShieldCheckeredLightIcon,
  regular: ShieldCheckeredRegularIcon,
  thin: ShieldCheckeredThinIcon,
});
