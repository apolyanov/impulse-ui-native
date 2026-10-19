import { createIcon } from "../../hocs/create-icon.hoc";
import { FileBoldIcon } from "../bold/file-bold.icon";
import { FileDuotoneIcon } from "../duotone/file-duotone.icon";
import { FileFillIcon } from "../fill/file-fill.icon";
import { FileLightIcon } from "../light/file-light.icon";
import { FileRegularIcon } from "../regular/file-regular.icon";
import { FileThinIcon } from "../thin/file-thin.icon";

export const FileIcon = createIcon("File", {
  bold: FileBoldIcon,
  duotone: FileDuotoneIcon,
  fill: FileFillIcon,
  light: FileLightIcon,
  regular: FileRegularIcon,
  thin: FileThinIcon,
});
