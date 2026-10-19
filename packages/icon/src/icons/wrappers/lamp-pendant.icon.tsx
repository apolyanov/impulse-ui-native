import { createIcon } from "../../hocs/create-icon.hoc";
import { LampPendantBoldIcon } from "../bold/lamp-pendant-bold.icon";
import { LampPendantDuotoneIcon } from "../duotone/lamp-pendant-duotone.icon";
import { LampPendantFillIcon } from "../fill/lamp-pendant-fill.icon";
import { LampPendantLightIcon } from "../light/lamp-pendant-light.icon";
import { LampPendantRegularIcon } from "../regular/lamp-pendant-regular.icon";
import { LampPendantThinIcon } from "../thin/lamp-pendant-thin.icon";

export const LampPendantIcon = createIcon("LampPendant", {
  bold: LampPendantBoldIcon,
  duotone: LampPendantDuotoneIcon,
  fill: LampPendantFillIcon,
  light: LampPendantLightIcon,
  regular: LampPendantRegularIcon,
  thin: LampPendantThinIcon,
});
