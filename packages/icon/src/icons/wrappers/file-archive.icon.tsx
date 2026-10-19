import { createIcon } from "../../hocs/create-icon.hoc";
import { FileArchiveBoldIcon } from "../bold/file-archive-bold.icon";
import { FileArchiveDuotoneIcon } from "../duotone/file-archive-duotone.icon";
import { FileArchiveFillIcon } from "../fill/file-archive-fill.icon";
import { FileArchiveLightIcon } from "../light/file-archive-light.icon";
import { FileArchiveRegularIcon } from "../regular/file-archive-regular.icon";
import { FileArchiveThinIcon } from "../thin/file-archive-thin.icon";

export const FileArchiveIcon = createIcon("FileArchive", {
  bold: FileArchiveBoldIcon,
  duotone: FileArchiveDuotoneIcon,
  fill: FileArchiveFillIcon,
  light: FileArchiveLightIcon,
  regular: FileArchiveRegularIcon,
  thin: FileArchiveThinIcon,
});
