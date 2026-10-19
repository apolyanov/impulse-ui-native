import { createIcon } from "../../hocs/create-icon.hoc";
import { FileCloudBoldIcon } from "../bold/file-cloud-bold.icon";
import { FileCloudDuotoneIcon } from "../duotone/file-cloud-duotone.icon";
import { FileCloudFillIcon } from "../fill/file-cloud-fill.icon";
import { FileCloudLightIcon } from "../light/file-cloud-light.icon";
import { FileCloudRegularIcon } from "../regular/file-cloud-regular.icon";
import { FileCloudThinIcon } from "../thin/file-cloud-thin.icon";

export const FileCloudIcon = createIcon("FileCloud", {
  bold: FileCloudBoldIcon,
  duotone: FileCloudDuotoneIcon,
  fill: FileCloudFillIcon,
  light: FileCloudLightIcon,
  regular: FileCloudRegularIcon,
  thin: FileCloudThinIcon,
});
