import { createIcon } from "../../hocs/create-icon.hoc";
import { UploadSimpleBoldIcon } from "../bold/upload-simple-bold.icon";
import { UploadSimpleDuotoneIcon } from "../duotone/upload-simple-duotone.icon";
import { UploadSimpleFillIcon } from "../fill/upload-simple-fill.icon";
import { UploadSimpleLightIcon } from "../light/upload-simple-light.icon";
import { UploadSimpleRegularIcon } from "../regular/upload-simple-regular.icon";
import { UploadSimpleThinIcon } from "../thin/upload-simple-thin.icon";

export const UploadSimpleIcon = createIcon("UploadSimple", {
  bold: UploadSimpleBoldIcon,
  duotone: UploadSimpleDuotoneIcon,
  fill: UploadSimpleFillIcon,
  light: UploadSimpleLightIcon,
  regular: UploadSimpleRegularIcon,
  thin: UploadSimpleThinIcon,
});
