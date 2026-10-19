import { createIcon } from "../../hocs/create-icon.hoc";
import { RugBoldIcon } from "../bold/rug-bold.icon";
import { RugDuotoneIcon } from "../duotone/rug-duotone.icon";
import { RugFillIcon } from "../fill/rug-fill.icon";
import { RugLightIcon } from "../light/rug-light.icon";
import { RugRegularIcon } from "../regular/rug-regular.icon";
import { RugThinIcon } from "../thin/rug-thin.icon";

export const RugIcon = createIcon("Rug", {
  bold: RugBoldIcon,
  duotone: RugDuotoneIcon,
  fill: RugFillIcon,
  light: RugLightIcon,
  regular: RugRegularIcon,
  thin: RugThinIcon,
});
