import { createIcon } from "../../hocs/create-icon.hoc";
import { ShieldCheckBoldIcon } from "../bold/shield-check-bold.icon";
import { ShieldCheckDuotoneIcon } from "../duotone/shield-check-duotone.icon";
import { ShieldCheckFillIcon } from "../fill/shield-check-fill.icon";
import { ShieldCheckLightIcon } from "../light/shield-check-light.icon";
import { ShieldCheckRegularIcon } from "../regular/shield-check-regular.icon";
import { ShieldCheckThinIcon } from "../thin/shield-check-thin.icon";

export const ShieldCheckIcon = createIcon("ShieldCheck", {
  bold: ShieldCheckBoldIcon,
  duotone: ShieldCheckDuotoneIcon,
  fill: ShieldCheckFillIcon,
  light: ShieldCheckLightIcon,
  regular: ShieldCheckRegularIcon,
  thin: ShieldCheckThinIcon,
});
