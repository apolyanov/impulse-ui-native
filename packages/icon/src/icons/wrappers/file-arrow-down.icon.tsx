import { createIcon } from "../../hocs/create-icon.hoc";
import { FileArrowDownBoldIcon } from "../bold/file-arrow-down-bold.icon";
import { FileArrowDownDuotoneIcon } from "../duotone/file-arrow-down-duotone.icon";
import { FileArrowDownFillIcon } from "../fill/file-arrow-down-fill.icon";
import { FileArrowDownLightIcon } from "../light/file-arrow-down-light.icon";
import { FileArrowDownRegularIcon } from "../regular/file-arrow-down-regular.icon";
import { FileArrowDownThinIcon } from "../thin/file-arrow-down-thin.icon";

export const FileArrowDownIcon = createIcon("FileArrowDown", {
  bold: FileArrowDownBoldIcon,
  duotone: FileArrowDownDuotoneIcon,
  fill: FileArrowDownFillIcon,
  light: FileArrowDownLightIcon,
  regular: FileArrowDownRegularIcon,
  thin: FileArrowDownThinIcon,
});
