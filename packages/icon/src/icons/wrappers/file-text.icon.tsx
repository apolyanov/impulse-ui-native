import { createIcon } from "../../hocs/create-icon.hoc";
import { FileTextBoldIcon } from "../bold/file-text-bold.icon";
import { FileTextDuotoneIcon } from "../duotone/file-text-duotone.icon";
import { FileTextFillIcon } from "../fill/file-text-fill.icon";
import { FileTextLightIcon } from "../light/file-text-light.icon";
import { FileTextRegularIcon } from "../regular/file-text-regular.icon";
import { FileTextThinIcon } from "../thin/file-text-thin.icon";

export const FileTextIcon = createIcon("FileText", {
  bold: FileTextBoldIcon,
  duotone: FileTextDuotoneIcon,
  fill: FileTextFillIcon,
  light: FileTextLightIcon,
  regular: FileTextRegularIcon,
  thin: FileTextThinIcon,
});
