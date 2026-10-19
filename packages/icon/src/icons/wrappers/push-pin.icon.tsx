import { createIcon } from "../../hocs/create-icon.hoc";
import { PushPinBoldIcon } from "../bold/push-pin-bold.icon";
import { PushPinDuotoneIcon } from "../duotone/push-pin-duotone.icon";
import { PushPinFillIcon } from "../fill/push-pin-fill.icon";
import { PushPinLightIcon } from "../light/push-pin-light.icon";
import { PushPinRegularIcon } from "../regular/push-pin-regular.icon";
import { PushPinThinIcon } from "../thin/push-pin-thin.icon";

export const PushPinIcon = createIcon("PushPin", {
  bold: PushPinBoldIcon,
  duotone: PushPinDuotoneIcon,
  fill: PushPinFillIcon,
  light: PushPinLightIcon,
  regular: PushPinRegularIcon,
  thin: PushPinThinIcon,
});
