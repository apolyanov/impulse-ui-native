import { createIcon } from "../../hocs/create-icon.hoc";
import { HurricaneBoldIcon } from "../bold/hurricane-bold.icon";
import { HurricaneDuotoneIcon } from "../duotone/hurricane-duotone.icon";
import { HurricaneFillIcon } from "../fill/hurricane-fill.icon";
import { HurricaneLightIcon } from "../light/hurricane-light.icon";
import { HurricaneRegularIcon } from "../regular/hurricane-regular.icon";
import { HurricaneThinIcon } from "../thin/hurricane-thin.icon";

export const HurricaneIcon = createIcon("Hurricane", {
  bold: HurricaneBoldIcon,
  duotone: HurricaneDuotoneIcon,
  fill: HurricaneFillIcon,
  light: HurricaneLightIcon,
  regular: HurricaneRegularIcon,
  thin: HurricaneThinIcon,
});
