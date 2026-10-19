import { createIcon } from "../../hocs/create-icon.hoc";
import { ProhibitBoldIcon } from "../bold/prohibit-bold.icon";
import { ProhibitDuotoneIcon } from "../duotone/prohibit-duotone.icon";
import { ProhibitFillIcon } from "../fill/prohibit-fill.icon";
import { ProhibitLightIcon } from "../light/prohibit-light.icon";
import { ProhibitRegularIcon } from "../regular/prohibit-regular.icon";
import { ProhibitThinIcon } from "../thin/prohibit-thin.icon";

export const ProhibitIcon = createIcon("Prohibit", {
  bold: ProhibitBoldIcon,
  duotone: ProhibitDuotoneIcon,
  fill: ProhibitFillIcon,
  light: ProhibitLightIcon,
  regular: ProhibitRegularIcon,
  thin: ProhibitThinIcon,
});
