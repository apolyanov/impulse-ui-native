import { createIcon } from "../../hocs/create-icon.hoc";
import { FileImageBoldIcon } from "../bold/file-image-bold.icon";
import { FileImageDuotoneIcon } from "../duotone/file-image-duotone.icon";
import { FileImageFillIcon } from "../fill/file-image-fill.icon";
import { FileImageLightIcon } from "../light/file-image-light.icon";
import { FileImageRegularIcon } from "../regular/file-image-regular.icon";
import { FileImageThinIcon } from "../thin/file-image-thin.icon";

export const FileImageIcon = createIcon("FileImage", {
  bold: FileImageBoldIcon,
  duotone: FileImageDuotoneIcon,
  fill: FileImageFillIcon,
  light: FileImageLightIcon,
  regular: FileImageRegularIcon,
  thin: FileImageThinIcon,
});
