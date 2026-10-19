import { createIcon } from "../../hocs/create-icon.hoc";
import { DropSlashBoldIcon } from "../bold/drop-slash-bold.icon";
import { DropSlashDuotoneIcon } from "../duotone/drop-slash-duotone.icon";
import { DropSlashFillIcon } from "../fill/drop-slash-fill.icon";
import { DropSlashLightIcon } from "../light/drop-slash-light.icon";
import { DropSlashRegularIcon } from "../regular/drop-slash-regular.icon";
import { DropSlashThinIcon } from "../thin/drop-slash-thin.icon";

export const DropSlashIcon = createIcon("DropSlash", {
  bold: DropSlashBoldIcon,
  duotone: DropSlashDuotoneIcon,
  fill: DropSlashFillIcon,
  light: DropSlashLightIcon,
  regular: DropSlashRegularIcon,
  thin: DropSlashThinIcon,
});
