import { createIcon } from "../../hocs/create-icon.hoc";
import { LockOpenBoldIcon } from "../bold/lock-open-bold.icon";
import { LockOpenDuotoneIcon } from "../duotone/lock-open-duotone.icon";
import { LockOpenFillIcon } from "../fill/lock-open-fill.icon";
import { LockOpenLightIcon } from "../light/lock-open-light.icon";
import { LockOpenRegularIcon } from "../regular/lock-open-regular.icon";
import { LockOpenThinIcon } from "../thin/lock-open-thin.icon";

export const LockOpenIcon = createIcon("LockOpen", {
  bold: LockOpenBoldIcon,
  duotone: LockOpenDuotoneIcon,
  fill: LockOpenFillIcon,
  light: LockOpenLightIcon,
  regular: LockOpenRegularIcon,
  thin: LockOpenThinIcon,
});
