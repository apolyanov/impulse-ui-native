import { createIcon } from "../../hocs/create-icon.hoc";
import { HandbagBoldIcon } from "../bold/handbag-bold.icon";
import { HandbagDuotoneIcon } from "../duotone/handbag-duotone.icon";
import { HandbagFillIcon } from "../fill/handbag-fill.icon";
import { HandbagLightIcon } from "../light/handbag-light.icon";
import { HandbagRegularIcon } from "../regular/handbag-regular.icon";
import { HandbagThinIcon } from "../thin/handbag-thin.icon";

export const HandbagIcon = createIcon("Handbag", {
  bold: HandbagBoldIcon,
  duotone: HandbagDuotoneIcon,
  fill: HandbagFillIcon,
  light: HandbagLightIcon,
  regular: HandbagRegularIcon,
  thin: HandbagThinIcon,
});
