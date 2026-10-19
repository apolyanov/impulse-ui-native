import { createIcon } from "../../hocs/create-icon.hoc";
import { FileSvgBoldIcon } from "../bold/file-svg-bold.icon";
import { FileSvgDuotoneIcon } from "../duotone/file-svg-duotone.icon";
import { FileSvgFillIcon } from "../fill/file-svg-fill.icon";
import { FileSvgLightIcon } from "../light/file-svg-light.icon";
import { FileSvgRegularIcon } from "../regular/file-svg-regular.icon";
import { FileSvgThinIcon } from "../thin/file-svg-thin.icon";

export const FileSvgIcon = createIcon("FileSvg", {
  bold: FileSvgBoldIcon,
  duotone: FileSvgDuotoneIcon,
  fill: FileSvgFillIcon,
  light: FileSvgLightIcon,
  regular: FileSvgRegularIcon,
  thin: FileSvgThinIcon,
});
