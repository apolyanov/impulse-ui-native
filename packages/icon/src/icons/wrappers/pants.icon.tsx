import { createIcon } from "../../hocs/create-icon.hoc";
import { PantsBoldIcon } from "../bold/pants-bold.icon";
import { PantsDuotoneIcon } from "../duotone/pants-duotone.icon";
import { PantsFillIcon } from "../fill/pants-fill.icon";
import { PantsLightIcon } from "../light/pants-light.icon";
import { PantsRegularIcon } from "../regular/pants-regular.icon";
import { PantsThinIcon } from "../thin/pants-thin.icon";

export const PantsIcon = createIcon("Pants", {
  bold: PantsBoldIcon,
  duotone: PantsDuotoneIcon,
  fill: PantsFillIcon,
  light: PantsLightIcon,
  regular: PantsRegularIcon,
  thin: PantsThinIcon,
});
