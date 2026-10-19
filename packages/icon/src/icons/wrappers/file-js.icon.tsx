import { createIcon } from "../../hocs/create-icon.hoc";
import { FileJsBoldIcon } from "../bold/file-js-bold.icon";
import { FileJsDuotoneIcon } from "../duotone/file-js-duotone.icon";
import { FileJsFillIcon } from "../fill/file-js-fill.icon";
import { FileJsLightIcon } from "../light/file-js-light.icon";
import { FileJsRegularIcon } from "../regular/file-js-regular.icon";
import { FileJsThinIcon } from "../thin/file-js-thin.icon";

export const FileJsIcon = createIcon("FileJs", {
  bold: FileJsBoldIcon,
  duotone: FileJsDuotoneIcon,
  fill: FileJsFillIcon,
  light: FileJsLightIcon,
  regular: FileJsRegularIcon,
  thin: FileJsThinIcon,
});
