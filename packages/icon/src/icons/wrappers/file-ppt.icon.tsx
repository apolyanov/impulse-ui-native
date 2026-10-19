import { createIcon } from "../../hocs/create-icon.hoc";
import { FilePptBoldIcon } from "../bold/file-ppt-bold.icon";
import { FilePptDuotoneIcon } from "../duotone/file-ppt-duotone.icon";
import { FilePptFillIcon } from "../fill/file-ppt-fill.icon";
import { FilePptLightIcon } from "../light/file-ppt-light.icon";
import { FilePptRegularIcon } from "../regular/file-ppt-regular.icon";
import { FilePptThinIcon } from "../thin/file-ppt-thin.icon";

export const FilePptIcon = createIcon("FilePpt", {
  bold: FilePptBoldIcon,
  duotone: FilePptDuotoneIcon,
  fill: FilePptFillIcon,
  light: FilePptLightIcon,
  regular: FilePptRegularIcon,
  thin: FilePptThinIcon,
});
