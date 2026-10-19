import { createIcon } from "../../hocs/create-icon.hoc";
import { AtBoldIcon } from "../bold/at-bold.icon";
import { AtDuotoneIcon } from "../duotone/at-duotone.icon";
import { AtFillIcon } from "../fill/at-fill.icon";
import { AtLightIcon } from "../light/at-light.icon";
import { AtRegularIcon } from "../regular/at-regular.icon";
import { AtThinIcon } from "../thin/at-thin.icon";

export const AtIcon = createIcon("At", {
  bold: AtBoldIcon,
  duotone: AtDuotoneIcon,
  fill: AtFillIcon,
  light: AtLightIcon,
  regular: AtRegularIcon,
  thin: AtThinIcon,
});
