import { createIcon } from "../../hocs/create-icon.hoc";
import { LockLaminatedBoldIcon } from "../bold/lock-laminated-bold.icon";
import { LockLaminatedDuotoneIcon } from "../duotone/lock-laminated-duotone.icon";
import { LockLaminatedFillIcon } from "../fill/lock-laminated-fill.icon";
import { LockLaminatedLightIcon } from "../light/lock-laminated-light.icon";
import { LockLaminatedRegularIcon } from "../regular/lock-laminated-regular.icon";
import { LockLaminatedThinIcon } from "../thin/lock-laminated-thin.icon";

export const LockLaminatedIcon = createIcon("LockLaminated", {
  bold: LockLaminatedBoldIcon,
  duotone: LockLaminatedDuotoneIcon,
  fill: LockLaminatedFillIcon,
  light: LockLaminatedLightIcon,
  regular: LockLaminatedRegularIcon,
  thin: LockLaminatedThinIcon,
});
