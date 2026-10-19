import { createIcon } from "../../hocs/create-icon.hoc";
import { DownloadBoldIcon } from "../bold/download-bold.icon";
import { DownloadDuotoneIcon } from "../duotone/download-duotone.icon";
import { DownloadFillIcon } from "../fill/download-fill.icon";
import { DownloadLightIcon } from "../light/download-light.icon";
import { DownloadRegularIcon } from "../regular/download-regular.icon";
import { DownloadThinIcon } from "../thin/download-thin.icon";

export const DownloadIcon = createIcon("Download", {
  bold: DownloadBoldIcon,
  duotone: DownloadDuotoneIcon,
  fill: DownloadFillIcon,
  light: DownloadLightIcon,
  regular: DownloadRegularIcon,
  thin: DownloadThinIcon,
});
