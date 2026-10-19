import { createIcon } from "../../hocs/create-icon.hoc";
import { FirstAidBoldIcon } from "../bold/first-aid-bold.icon";
import { FirstAidDuotoneIcon } from "../duotone/first-aid-duotone.icon";
import { FirstAidFillIcon } from "../fill/first-aid-fill.icon";
import { FirstAidLightIcon } from "../light/first-aid-light.icon";
import { FirstAidRegularIcon } from "../regular/first-aid-regular.icon";
import { FirstAidThinIcon } from "../thin/first-aid-thin.icon";

export const FirstAidIcon = createIcon("FirstAid", {
  bold: FirstAidBoldIcon,
  duotone: FirstAidDuotoneIcon,
  fill: FirstAidFillIcon,
  light: FirstAidLightIcon,
  regular: FirstAidRegularIcon,
  thin: FirstAidThinIcon,
});
