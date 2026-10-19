import { createIcon } from "../../hocs/create-icon.hoc";
import { FlagCheckeredBoldIcon } from "../bold/flag-checkered-bold.icon";
import { FlagCheckeredDuotoneIcon } from "../duotone/flag-checkered-duotone.icon";
import { FlagCheckeredFillIcon } from "../fill/flag-checkered-fill.icon";
import { FlagCheckeredLightIcon } from "../light/flag-checkered-light.icon";
import { FlagCheckeredRegularIcon } from "../regular/flag-checkered-regular.icon";
import { FlagCheckeredThinIcon } from "../thin/flag-checkered-thin.icon";

export const FlagCheckeredIcon = createIcon("FlagCheckered", {
  bold: FlagCheckeredBoldIcon,
  duotone: FlagCheckeredDuotoneIcon,
  fill: FlagCheckeredFillIcon,
  light: FlagCheckeredLightIcon,
  regular: FlagCheckeredRegularIcon,
  thin: FlagCheckeredThinIcon,
});
