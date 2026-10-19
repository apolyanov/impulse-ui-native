import { createIcon } from "../../hocs/create-icon.hoc";
import { FlagBoldIcon } from "../bold/flag-bold.icon";
import { FlagDuotoneIcon } from "../duotone/flag-duotone.icon";
import { FlagFillIcon } from "../fill/flag-fill.icon";
import { FlagLightIcon } from "../light/flag-light.icon";
import { FlagRegularIcon } from "../regular/flag-regular.icon";
import { FlagThinIcon } from "../thin/flag-thin.icon";

export const FlagIcon = createIcon("Flag", {
  bold: FlagBoldIcon,
  duotone: FlagDuotoneIcon,
  fill: FlagFillIcon,
  light: FlagLightIcon,
  regular: FlagRegularIcon,
  thin: FlagThinIcon,
});
