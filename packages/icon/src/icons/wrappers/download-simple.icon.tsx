import { createIcon } from "../../hocs/create-icon.hoc";
import { DownloadSimpleBoldIcon } from "../bold/download-simple-bold.icon";
import { DownloadSimpleDuotoneIcon } from "../duotone/download-simple-duotone.icon";
import { DownloadSimpleFillIcon } from "../fill/download-simple-fill.icon";
import { DownloadSimpleLightIcon } from "../light/download-simple-light.icon";
import { DownloadSimpleRegularIcon } from "../regular/download-simple-regular.icon";
import { DownloadSimpleThinIcon } from "../thin/download-simple-thin.icon";

export const DownloadSimpleIcon = createIcon("DownloadSimple", {
  bold: DownloadSimpleBoldIcon,
  duotone: DownloadSimpleDuotoneIcon,
  fill: DownloadSimpleFillIcon,
  light: DownloadSimpleLightIcon,
  regular: DownloadSimpleRegularIcon,
  thin: DownloadSimpleThinIcon,
});
