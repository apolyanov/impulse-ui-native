import { createIcon } from "../../hocs/create-icon.hoc";
import { LockBoldIcon } from "../bold/lock-bold.icon";
import { LockDuotoneIcon } from "../duotone/lock-duotone.icon";
import { LockFillIcon } from "../fill/lock-fill.icon";
import { LockLightIcon } from "../light/lock-light.icon";
import { LockRegularIcon } from "../regular/lock-regular.icon";
import { LockThinIcon } from "../thin/lock-thin.icon";

export const LockIcon = createIcon("Lock", {
  bold: LockBoldIcon,
  duotone: LockDuotoneIcon,
  fill: LockFillIcon,
  light: LockLightIcon,
  regular: LockRegularIcon,
  thin: LockThinIcon,
});
