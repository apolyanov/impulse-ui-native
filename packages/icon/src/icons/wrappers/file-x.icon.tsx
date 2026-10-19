import { createIcon } from "../../hocs/create-icon.hoc";
import { FileXBoldIcon } from "../bold/file-x-bold.icon";
import { FileXDuotoneIcon } from "../duotone/file-x-duotone.icon";
import { FileXFillIcon } from "../fill/file-x-fill.icon";
import { FileXLightIcon } from "../light/file-x-light.icon";
import { FileXRegularIcon } from "../regular/file-x-regular.icon";
import { FileXThinIcon } from "../thin/file-x-thin.icon";

export const FileXIcon = createIcon("FileX", {
  bold: FileXBoldIcon,
  duotone: FileXDuotoneIcon,
  fill: FileXFillIcon,
  light: FileXLightIcon,
  regular: FileXRegularIcon,
  thin: FileXThinIcon,
});
