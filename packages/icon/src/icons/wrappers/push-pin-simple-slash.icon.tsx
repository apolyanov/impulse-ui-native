import { createIcon } from "../../hocs/create-icon.hoc";
import { PushPinSimpleSlashBoldIcon } from "../bold/push-pin-simple-slash-bold.icon";
import { PushPinSimpleSlashDuotoneIcon } from "../duotone/push-pin-simple-slash-duotone.icon";
import { PushPinSimpleSlashFillIcon } from "../fill/push-pin-simple-slash-fill.icon";
import { PushPinSimpleSlashLightIcon } from "../light/push-pin-simple-slash-light.icon";
import { PushPinSimpleSlashRegularIcon } from "../regular/push-pin-simple-slash-regular.icon";
import { PushPinSimpleSlashThinIcon } from "../thin/push-pin-simple-slash-thin.icon";

export const PushPinSimpleSlashIcon = createIcon("PushPinSimpleSlash", {
  bold: PushPinSimpleSlashBoldIcon,
  duotone: PushPinSimpleSlashDuotoneIcon,
  fill: PushPinSimpleSlashFillIcon,
  light: PushPinSimpleSlashLightIcon,
  regular: PushPinSimpleSlashRegularIcon,
  thin: PushPinSimpleSlashThinIcon,
});
