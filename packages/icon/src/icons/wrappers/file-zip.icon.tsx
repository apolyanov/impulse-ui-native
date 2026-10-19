import { createIcon } from "../../hocs/create-icon.hoc";
import { FileZipBoldIcon } from "../bold/file-zip-bold.icon";
import { FileZipDuotoneIcon } from "../duotone/file-zip-duotone.icon";
import { FileZipFillIcon } from "../fill/file-zip-fill.icon";
import { FileZipLightIcon } from "../light/file-zip-light.icon";
import { FileZipRegularIcon } from "../regular/file-zip-regular.icon";
import { FileZipThinIcon } from "../thin/file-zip-thin.icon";

export const FileZipIcon = createIcon("FileZip", {
  bold: FileZipBoldIcon,
  duotone: FileZipDuotoneIcon,
  fill: FileZipFillIcon,
  light: FileZipLightIcon,
  regular: FileZipRegularIcon,
  thin: FileZipThinIcon,
});
