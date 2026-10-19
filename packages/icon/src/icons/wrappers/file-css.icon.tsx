import { createIcon } from "../../hocs/create-icon.hoc";
import { FileCssBoldIcon } from "../bold/file-css-bold.icon";
import { FileCssDuotoneIcon } from "../duotone/file-css-duotone.icon";
import { FileCssFillIcon } from "../fill/file-css-fill.icon";
import { FileCssLightIcon } from "../light/file-css-light.icon";
import { FileCssRegularIcon } from "../regular/file-css-regular.icon";
import { FileCssThinIcon } from "../thin/file-css-thin.icon";

export const FileCssIcon = createIcon("FileCss", {
  bold: FileCssBoldIcon,
  duotone: FileCssDuotoneIcon,
  fill: FileCssFillIcon,
  light: FileCssLightIcon,
  regular: FileCssRegularIcon,
  thin: FileCssThinIcon,
});
