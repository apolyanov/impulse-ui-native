import { createIcon } from "../../hocs/create-icon.hoc";
import { LockKeyBoldIcon } from "../bold/lock-key-bold.icon";
import { LockKeyDuotoneIcon } from "../duotone/lock-key-duotone.icon";
import { LockKeyFillIcon } from "../fill/lock-key-fill.icon";
import { LockKeyLightIcon } from "../light/lock-key-light.icon";
import { LockKeyRegularIcon } from "../regular/lock-key-regular.icon";
import { LockKeyThinIcon } from "../thin/lock-key-thin.icon";

export const LockKeyIcon = createIcon("LockKey", {
  bold: LockKeyBoldIcon,
  duotone: LockKeyDuotoneIcon,
  fill: LockKeyFillIcon,
  light: LockKeyLightIcon,
  regular: LockKeyRegularIcon,
  thin: LockKeyThinIcon,
});
