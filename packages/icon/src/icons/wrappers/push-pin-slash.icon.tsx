import { createIcon } from "../../hocs/create-icon.hoc";
import { PushPinSlashBoldIcon } from "../bold/push-pin-slash-bold.icon";
import { PushPinSlashDuotoneIcon } from "../duotone/push-pin-slash-duotone.icon";
import { PushPinSlashFillIcon } from "../fill/push-pin-slash-fill.icon";
import { PushPinSlashLightIcon } from "../light/push-pin-slash-light.icon";
import { PushPinSlashRegularIcon } from "../regular/push-pin-slash-regular.icon";
import { PushPinSlashThinIcon } from "../thin/push-pin-slash-thin.icon";

export const PushPinSlashIcon = createIcon("PushPinSlash", {
  bold: PushPinSlashBoldIcon,
  duotone: PushPinSlashDuotoneIcon,
  fill: PushPinSlashFillIcon,
  light: PushPinSlashLightIcon,
  regular: PushPinSlashRegularIcon,
  thin: PushPinSlashThinIcon,
});
