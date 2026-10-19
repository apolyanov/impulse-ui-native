import { createIcon } from "../../hocs/create-icon.hoc";
import { UploadBoldIcon } from "../bold/upload-bold.icon";
import { UploadDuotoneIcon } from "../duotone/upload-duotone.icon";
import { UploadFillIcon } from "../fill/upload-fill.icon";
import { UploadLightIcon } from "../light/upload-light.icon";
import { UploadRegularIcon } from "../regular/upload-regular.icon";
import { UploadThinIcon } from "../thin/upload-thin.icon";

export const UploadIcon = createIcon("Upload", {
  bold: UploadBoldIcon,
  duotone: UploadDuotoneIcon,
  fill: UploadFillIcon,
  light: UploadLightIcon,
  regular: UploadRegularIcon,
  thin: UploadThinIcon,
});
