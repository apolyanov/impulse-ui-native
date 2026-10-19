import { createIcon } from "../../hocs/create-icon.hoc";
import { FolderSimpleMinusBoldIcon } from "../bold/folder-simple-minus-bold.icon";
import { FolderSimpleMinusDuotoneIcon } from "../duotone/folder-simple-minus-duotone.icon";
import { FolderSimpleMinusFillIcon } from "../fill/folder-simple-minus-fill.icon";
import { FolderSimpleMinusLightIcon } from "../light/folder-simple-minus-light.icon";
import { FolderSimpleMinusRegularIcon } from "../regular/folder-simple-minus-regular.icon";
import { FolderSimpleMinusThinIcon } from "../thin/folder-simple-minus-thin.icon";

export const FolderSimpleMinusIcon = createIcon("FolderSimpleMinus", {
  bold: FolderSimpleMinusBoldIcon,
  duotone: FolderSimpleMinusDuotoneIcon,
  fill: FolderSimpleMinusFillIcon,
  light: FolderSimpleMinusLightIcon,
  regular: FolderSimpleMinusRegularIcon,
  thin: FolderSimpleMinusThinIcon,
});
