import { createIcon } from "../../hocs/create-icon.hoc";
import { ShieldSlashBoldIcon } from "../bold/shield-slash-bold.icon";
import { ShieldSlashDuotoneIcon } from "../duotone/shield-slash-duotone.icon";
import { ShieldSlashFillIcon } from "../fill/shield-slash-fill.icon";
import { ShieldSlashLightIcon } from "../light/shield-slash-light.icon";
import { ShieldSlashRegularIcon } from "../regular/shield-slash-regular.icon";
import { ShieldSlashThinIcon } from "../thin/shield-slash-thin.icon";

export const ShieldSlashIcon = createIcon("ShieldSlash", {
  bold: ShieldSlashBoldIcon,
  duotone: ShieldSlashDuotoneIcon,
  fill: ShieldSlashFillIcon,
  light: ShieldSlashLightIcon,
  regular: ShieldSlashRegularIcon,
  thin: ShieldSlashThinIcon,
});
