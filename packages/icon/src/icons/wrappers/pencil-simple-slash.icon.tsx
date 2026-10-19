import { createIcon } from "../../hocs/create-icon.hoc";
import { PencilSimpleSlashBoldIcon } from "../bold/pencil-simple-slash-bold.icon";
import { PencilSimpleSlashDuotoneIcon } from "../duotone/pencil-simple-slash-duotone.icon";
import { PencilSimpleSlashFillIcon } from "../fill/pencil-simple-slash-fill.icon";
import { PencilSimpleSlashLightIcon } from "../light/pencil-simple-slash-light.icon";
import { PencilSimpleSlashRegularIcon } from "../regular/pencil-simple-slash-regular.icon";
import { PencilSimpleSlashThinIcon } from "../thin/pencil-simple-slash-thin.icon";

export const PencilSimpleSlashIcon = createIcon("PencilSimpleSlash", {
  bold: PencilSimpleSlashBoldIcon,
  duotone: PencilSimpleSlashDuotoneIcon,
  fill: PencilSimpleSlashFillIcon,
  light: PencilSimpleSlashLightIcon,
  regular: PencilSimpleSlashRegularIcon,
  thin: PencilSimpleSlashThinIcon,
});
