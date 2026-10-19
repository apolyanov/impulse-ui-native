import { createIcon } from "../../hocs/create-icon.hoc";
import { LockLaminatedOpenBoldIcon } from "../bold/lock-laminated-open-bold.icon";
import { LockLaminatedOpenDuotoneIcon } from "../duotone/lock-laminated-open-duotone.icon";
import { LockLaminatedOpenFillIcon } from "../fill/lock-laminated-open-fill.icon";
import { LockLaminatedOpenLightIcon } from "../light/lock-laminated-open-light.icon";
import { LockLaminatedOpenRegularIcon } from "../regular/lock-laminated-open-regular.icon";
import { LockLaminatedOpenThinIcon } from "../thin/lock-laminated-open-thin.icon";

export const LockLaminatedOpenIcon = createIcon("LockLaminatedOpen", {
  bold: LockLaminatedOpenBoldIcon,
  duotone: LockLaminatedOpenDuotoneIcon,
  fill: LockLaminatedOpenFillIcon,
  light: LockLaminatedOpenLightIcon,
  regular: LockLaminatedOpenRegularIcon,
  thin: LockLaminatedOpenThinIcon,
});
