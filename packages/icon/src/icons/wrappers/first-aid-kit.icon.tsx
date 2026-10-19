import { createIcon } from "../../hocs/create-icon.hoc";
import { FirstAidKitBoldIcon } from "../bold/first-aid-kit-bold.icon";
import { FirstAidKitDuotoneIcon } from "../duotone/first-aid-kit-duotone.icon";
import { FirstAidKitFillIcon } from "../fill/first-aid-kit-fill.icon";
import { FirstAidKitLightIcon } from "../light/first-aid-kit-light.icon";
import { FirstAidKitRegularIcon } from "../regular/first-aid-kit-regular.icon";
import { FirstAidKitThinIcon } from "../thin/first-aid-kit-thin.icon";

export const FirstAidKitIcon = createIcon("FirstAidKit", {
  bold: FirstAidKitBoldIcon,
  duotone: FirstAidKitDuotoneIcon,
  fill: FirstAidKitFillIcon,
  light: FirstAidKitLightIcon,
  regular: FirstAidKitRegularIcon,
  thin: FirstAidKitThinIcon,
});
