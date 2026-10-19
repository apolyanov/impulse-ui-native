import { createIcon } from "../../hocs/create-icon.hoc";
import { PushPinSimpleBoldIcon } from "../bold/push-pin-simple-bold.icon";
import { PushPinSimpleDuotoneIcon } from "../duotone/push-pin-simple-duotone.icon";
import { PushPinSimpleFillIcon } from "../fill/push-pin-simple-fill.icon";
import { PushPinSimpleLightIcon } from "../light/push-pin-simple-light.icon";
import { PushPinSimpleRegularIcon } from "../regular/push-pin-simple-regular.icon";
import { PushPinSimpleThinIcon } from "../thin/push-pin-simple-thin.icon";

export const PushPinSimpleIcon = createIcon("PushPinSimple", {
  bold: PushPinSimpleBoldIcon,
  duotone: PushPinSimpleDuotoneIcon,
  fill: PushPinSimpleFillIcon,
  light: PushPinSimpleLightIcon,
  regular: PushPinSimpleRegularIcon,
  thin: PushPinSimpleThinIcon,
});
