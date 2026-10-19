import { createIcon } from "../../hocs/create-icon.hoc";
import { LampBoldIcon } from "../bold/lamp-bold.icon";
import { LampDuotoneIcon } from "../duotone/lamp-duotone.icon";
import { LampFillIcon } from "../fill/lamp-fill.icon";
import { LampLightIcon } from "../light/lamp-light.icon";
import { LampRegularIcon } from "../regular/lamp-regular.icon";
import { LampThinIcon } from "../thin/lamp-thin.icon";

export const LampIcon = createIcon("Lamp", {
  bold: LampBoldIcon,
  duotone: LampDuotoneIcon,
  fill: LampFillIcon,
  light: LampLightIcon,
  regular: LampRegularIcon,
  thin: LampThinIcon,
});
