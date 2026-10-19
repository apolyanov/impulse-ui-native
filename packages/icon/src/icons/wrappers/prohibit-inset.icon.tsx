import { createIcon } from "../../hocs/create-icon.hoc";
import { ProhibitInsetBoldIcon } from "../bold/prohibit-inset-bold.icon";
import { ProhibitInsetDuotoneIcon } from "../duotone/prohibit-inset-duotone.icon";
import { ProhibitInsetFillIcon } from "../fill/prohibit-inset-fill.icon";
import { ProhibitInsetLightIcon } from "../light/prohibit-inset-light.icon";
import { ProhibitInsetRegularIcon } from "../regular/prohibit-inset-regular.icon";
import { ProhibitInsetThinIcon } from "../thin/prohibit-inset-thin.icon";

export const ProhibitInsetIcon = createIcon("ProhibitInset", {
  bold: ProhibitInsetBoldIcon,
  duotone: ProhibitInsetDuotoneIcon,
  fill: ProhibitInsetFillIcon,
  light: ProhibitInsetLightIcon,
  regular: ProhibitInsetRegularIcon,
  thin: ProhibitInsetThinIcon,
});
