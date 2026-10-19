import { createIcon } from "../../hocs/create-icon.hoc";
import { FilesBoldIcon } from "../bold/files-bold.icon";
import { FilesDuotoneIcon } from "../duotone/files-duotone.icon";
import { FilesFillIcon } from "../fill/files-fill.icon";
import { FilesLightIcon } from "../light/files-light.icon";
import { FilesRegularIcon } from "../regular/files-regular.icon";
import { FilesThinIcon } from "../thin/files-thin.icon";

export const FilesIcon = createIcon("Files", {
  bold: FilesBoldIcon,
  duotone: FilesDuotoneIcon,
  fill: FilesFillIcon,
  light: FilesLightIcon,
  regular: FilesRegularIcon,
  thin: FilesThinIcon,
});
