import { createIcon } from "../../hocs/create-icon.hoc";
import { BellSimpleSlashBoldIcon } from "../bold/bell-simple-slash-bold.icon";
import { BellSimpleSlashDuotoneIcon } from "../duotone/bell-simple-slash-duotone.icon";
import { BellSimpleSlashFillIcon } from "../fill/bell-simple-slash-fill.icon";
import { BellSimpleSlashLightIcon } from "../light/bell-simple-slash-light.icon";
import { BellSimpleSlashRegularIcon } from "../regular/bell-simple-slash-regular.icon";
import { BellSimpleSlashThinIcon } from "../thin/bell-simple-slash-thin.icon";

export const BellSimpleSlashIcon = createIcon("BellSimpleSlash", {
  bold: BellSimpleSlashBoldIcon,
  duotone: BellSimpleSlashDuotoneIcon,
  fill: BellSimpleSlashFillIcon,
  light: BellSimpleSlashLightIcon,
  regular: BellSimpleSlashRegularIcon,
  thin: BellSimpleSlashThinIcon,
});
