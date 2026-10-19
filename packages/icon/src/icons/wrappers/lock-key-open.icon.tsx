import { createIcon } from "../../hocs/create-icon.hoc";
import { LockKeyOpenBoldIcon } from "../bold/lock-key-open-bold.icon";
import { LockKeyOpenDuotoneIcon } from "../duotone/lock-key-open-duotone.icon";
import { LockKeyOpenFillIcon } from "../fill/lock-key-open-fill.icon";
import { LockKeyOpenLightIcon } from "../light/lock-key-open-light.icon";
import { LockKeyOpenRegularIcon } from "../regular/lock-key-open-regular.icon";
import { LockKeyOpenThinIcon } from "../thin/lock-key-open-thin.icon";

export const LockKeyOpenIcon = createIcon("LockKeyOpen", {
  bold: LockKeyOpenBoldIcon,
  duotone: LockKeyOpenDuotoneIcon,
  fill: LockKeyOpenFillIcon,
  light: LockKeyOpenLightIcon,
  regular: LockKeyOpenRegularIcon,
  thin: LockKeyOpenThinIcon,
});
