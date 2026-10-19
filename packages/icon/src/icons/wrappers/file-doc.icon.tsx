import { createIcon } from "../../hocs/create-icon.hoc";
import { FileDocBoldIcon } from "../bold/file-doc-bold.icon";
import { FileDocDuotoneIcon } from "../duotone/file-doc-duotone.icon";
import { FileDocFillIcon } from "../fill/file-doc-fill.icon";
import { FileDocLightIcon } from "../light/file-doc-light.icon";
import { FileDocRegularIcon } from "../regular/file-doc-regular.icon";
import { FileDocThinIcon } from "../thin/file-doc-thin.icon";

export const FileDocIcon = createIcon("FileDoc", {
  bold: FileDocBoldIcon,
  duotone: FileDocDuotoneIcon,
  fill: FileDocFillIcon,
  light: FileDocLightIcon,
  regular: FileDocRegularIcon,
  thin: FileDocThinIcon,
});
