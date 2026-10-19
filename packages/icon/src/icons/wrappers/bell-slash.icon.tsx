import { createIcon } from "../../hocs/create-icon.hoc";
import { BellSlashBoldIcon } from "../bold/bell-slash-bold.icon";
import { BellSlashDuotoneIcon } from "../duotone/bell-slash-duotone.icon";
import { BellSlashFillIcon } from "../fill/bell-slash-fill.icon";
import { BellSlashLightIcon } from "../light/bell-slash-light.icon";
import { BellSlashRegularIcon } from "../regular/bell-slash-regular.icon";
import { BellSlashThinIcon } from "../thin/bell-slash-thin.icon";

export const BellSlashIcon = createIcon("BellSlash", {
  bold: BellSlashBoldIcon,
  duotone: BellSlashDuotoneIcon,
  fill: BellSlashFillIcon,
  light: BellSlashLightIcon,
  regular: BellSlashRegularIcon,
  thin: BellSlashThinIcon,
});
