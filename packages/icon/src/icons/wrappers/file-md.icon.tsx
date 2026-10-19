import { createIcon } from "../../hocs/create-icon.hoc";
import { FileMdBoldIcon } from "../bold/file-md-bold.icon";
import { FileMdDuotoneIcon } from "../duotone/file-md-duotone.icon";
import { FileMdFillIcon } from "../fill/file-md-fill.icon";
import { FileMdLightIcon } from "../light/file-md-light.icon";
import { FileMdRegularIcon } from "../regular/file-md-regular.icon";
import { FileMdThinIcon } from "../thin/file-md-thin.icon";

export const FileMdIcon = createIcon("FileMd", {
  bold: FileMdBoldIcon,
  duotone: FileMdDuotoneIcon,
  fill: FileMdFillIcon,
  light: FileMdLightIcon,
  regular: FileMdRegularIcon,
  thin: FileMdThinIcon,
});
