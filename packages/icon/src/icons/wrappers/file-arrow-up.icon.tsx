import { createIcon } from "../../hocs/create-icon.hoc";
import { FileArrowUpBoldIcon } from "../bold/file-arrow-up-bold.icon";
import { FileArrowUpDuotoneIcon } from "../duotone/file-arrow-up-duotone.icon";
import { FileArrowUpFillIcon } from "../fill/file-arrow-up-fill.icon";
import { FileArrowUpLightIcon } from "../light/file-arrow-up-light.icon";
import { FileArrowUpRegularIcon } from "../regular/file-arrow-up-regular.icon";
import { FileArrowUpThinIcon } from "../thin/file-arrow-up-thin.icon";

export const FileArrowUpIcon = createIcon("FileArrowUp", {
  bold: FileArrowUpBoldIcon,
  duotone: FileArrowUpDuotoneIcon,
  fill: FileArrowUpFillIcon,
  light: FileArrowUpLightIcon,
  regular: FileArrowUpRegularIcon,
  thin: FileArrowUpThinIcon,
});
