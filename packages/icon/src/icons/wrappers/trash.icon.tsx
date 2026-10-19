import { createIcon } from "../../hocs/create-icon.hoc";
import { TrashBoldIcon } from "../bold/trash-bold.icon";
import { TrashDuotoneIcon } from "../duotone/trash-duotone.icon";
import { TrashFillIcon } from "../fill/trash-fill.icon";
import { TrashLightIcon } from "../light/trash-light.icon";
import { TrashRegularIcon } from "../regular/trash-regular.icon";
import { TrashThinIcon } from "../thin/trash-thin.icon";

export const TrashIcon = createIcon("Trash", {
  bold: TrashBoldIcon,
  duotone: TrashDuotoneIcon,
  fill: TrashFillIcon,
  light: TrashLightIcon,
  regular: TrashRegularIcon,
  thin: TrashThinIcon,
});
