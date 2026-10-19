import { createIcon } from "../../hocs/create-icon.hoc";
import { FolderMinusBoldIcon } from "../bold/folder-minus-bold.icon";
import { FolderMinusDuotoneIcon } from "../duotone/folder-minus-duotone.icon";
import { FolderMinusFillIcon } from "../fill/folder-minus-fill.icon";
import { FolderMinusLightIcon } from "../light/folder-minus-light.icon";
import { FolderMinusRegularIcon } from "../regular/folder-minus-regular.icon";
import { FolderMinusThinIcon } from "../thin/folder-minus-thin.icon";

export const FolderMinusIcon = createIcon("FolderMinus", {
  bold: FolderMinusBoldIcon,
  duotone: FolderMinusDuotoneIcon,
  fill: FolderMinusFillIcon,
  light: FolderMinusLightIcon,
  regular: FolderMinusRegularIcon,
  thin: FolderMinusThinIcon,
});
