import { createIcon } from "../../hocs/create-icon.hoc";
import { FileCodeBoldIcon } from "../bold/file-code-bold.icon";
import { FileCodeDuotoneIcon } from "../duotone/file-code-duotone.icon";
import { FileCodeFillIcon } from "../fill/file-code-fill.icon";
import { FileCodeLightIcon } from "../light/file-code-light.icon";
import { FileCodeRegularIcon } from "../regular/file-code-regular.icon";
import { FileCodeThinIcon } from "../thin/file-code-thin.icon";

export const FileCodeIcon = createIcon("FileCode", {
  bold: FileCodeBoldIcon,
  duotone: FileCodeDuotoneIcon,
  fill: FileCodeFillIcon,
  light: FileCodeLightIcon,
  regular: FileCodeRegularIcon,
  thin: FileCodeThinIcon,
});
