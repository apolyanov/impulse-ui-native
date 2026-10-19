import { createIcon } from "../../hocs/create-icon.hoc";
import { LockSimpleBoldIcon } from "../bold/lock-simple-bold.icon";
import { LockSimpleDuotoneIcon } from "../duotone/lock-simple-duotone.icon";
import { LockSimpleFillIcon } from "../fill/lock-simple-fill.icon";
import { LockSimpleLightIcon } from "../light/lock-simple-light.icon";
import { LockSimpleRegularIcon } from "../regular/lock-simple-regular.icon";
import { LockSimpleThinIcon } from "../thin/lock-simple-thin.icon";

export const LockSimpleIcon = createIcon("LockSimple", {
  bold: LockSimpleBoldIcon,
  duotone: LockSimpleDuotoneIcon,
  fill: LockSimpleFillIcon,
  light: LockSimpleLightIcon,
  regular: LockSimpleRegularIcon,
  thin: LockSimpleThinIcon,
});
