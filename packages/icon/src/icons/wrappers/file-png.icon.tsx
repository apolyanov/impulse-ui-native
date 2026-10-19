import { createIcon } from "../../hocs/create-icon.hoc";
import { FilePngBoldIcon } from "../bold/file-png-bold.icon";
import { FilePngDuotoneIcon } from "../duotone/file-png-duotone.icon";
import { FilePngFillIcon } from "../fill/file-png-fill.icon";
import { FilePngLightIcon } from "../light/file-png-light.icon";
import { FilePngRegularIcon } from "../regular/file-png-regular.icon";
import { FilePngThinIcon } from "../thin/file-png-thin.icon";

export const FilePngIcon = createIcon("FilePng", {
  bold: FilePngBoldIcon,
  duotone: FilePngDuotoneIcon,
  fill: FilePngFillIcon,
  light: FilePngLightIcon,
  regular: FilePngRegularIcon,
  thin: FilePngThinIcon,
});
