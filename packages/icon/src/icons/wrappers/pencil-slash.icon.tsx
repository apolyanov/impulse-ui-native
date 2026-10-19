import { createIcon } from "../../hocs/create-icon.hoc";
import { PencilSlashBoldIcon } from "../bold/pencil-slash-bold.icon";
import { PencilSlashDuotoneIcon } from "../duotone/pencil-slash-duotone.icon";
import { PencilSlashFillIcon } from "../fill/pencil-slash-fill.icon";
import { PencilSlashLightIcon } from "../light/pencil-slash-light.icon";
import { PencilSlashRegularIcon } from "../regular/pencil-slash-regular.icon";
import { PencilSlashThinIcon } from "../thin/pencil-slash-thin.icon";

export const PencilSlashIcon = createIcon("PencilSlash", {
  bold: PencilSlashBoldIcon,
  duotone: PencilSlashDuotoneIcon,
  fill: PencilSlashFillIcon,
  light: PencilSlashLightIcon,
  regular: PencilSlashRegularIcon,
  thin: PencilSlashThinIcon,
});
