import { createIcon } from "../../hocs/create-icon.hoc";
import { FileJpgBoldIcon } from "../bold/file-jpg-bold.icon";
import { FileJpgDuotoneIcon } from "../duotone/file-jpg-duotone.icon";
import { FileJpgFillIcon } from "../fill/file-jpg-fill.icon";
import { FileJpgLightIcon } from "../light/file-jpg-light.icon";
import { FileJpgRegularIcon } from "../regular/file-jpg-regular.icon";
import { FileJpgThinIcon } from "../thin/file-jpg-thin.icon";

export const FileJpgIcon = createIcon("FileJpg", {
  bold: FileJpgBoldIcon,
  duotone: FileJpgDuotoneIcon,
  fill: FileJpgFillIcon,
  light: FileJpgLightIcon,
  regular: FileJpgRegularIcon,
  thin: FileJpgThinIcon,
});
