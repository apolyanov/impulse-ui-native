import { createIcon } from "../../hocs/create-icon.hoc";
import { GrainsSlashBoldIcon } from "../bold/grains-slash-bold.icon";
import { GrainsSlashDuotoneIcon } from "../duotone/grains-slash-duotone.icon";
import { GrainsSlashFillIcon } from "../fill/grains-slash-fill.icon";
import { GrainsSlashLightIcon } from "../light/grains-slash-light.icon";
import { GrainsSlashRegularIcon } from "../regular/grains-slash-regular.icon";
import { GrainsSlashThinIcon } from "../thin/grains-slash-thin.icon";

export const GrainsSlashIcon = createIcon("GrainsSlash", {
  bold: GrainsSlashBoldIcon,
  duotone: GrainsSlashDuotoneIcon,
  fill: GrainsSlashFillIcon,
  light: GrainsSlashLightIcon,
  regular: GrainsSlashRegularIcon,
  thin: GrainsSlashThinIcon,
});
