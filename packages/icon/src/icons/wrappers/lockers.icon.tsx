import { createIcon } from "../../hocs/create-icon.hoc";
import { LockersBoldIcon } from "../bold/lockers-bold.icon";
import { LockersDuotoneIcon } from "../duotone/lockers-duotone.icon";
import { LockersFillIcon } from "../fill/lockers-fill.icon";
import { LockersLightIcon } from "../light/lockers-light.icon";
import { LockersRegularIcon } from "../regular/lockers-regular.icon";
import { LockersThinIcon } from "../thin/lockers-thin.icon";

export const LockersIcon = createIcon("Lockers", {
  bold: LockersBoldIcon,
  duotone: LockersDuotoneIcon,
  fill: LockersFillIcon,
  light: LockersLightIcon,
  regular: LockersRegularIcon,
  thin: LockersThinIcon,
});
