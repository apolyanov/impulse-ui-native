import { createIcon } from "../../hocs/create-icon.hoc";
import { FileTsxBoldIcon } from "../bold/file-tsx-bold.icon";
import { FileTsxDuotoneIcon } from "../duotone/file-tsx-duotone.icon";
import { FileTsxFillIcon } from "../fill/file-tsx-fill.icon";
import { FileTsxLightIcon } from "../light/file-tsx-light.icon";
import { FileTsxRegularIcon } from "../regular/file-tsx-regular.icon";
import { FileTsxThinIcon } from "../thin/file-tsx-thin.icon";

export const FileTsxIcon = createIcon("FileTsx", {
  bold: FileTsxBoldIcon,
  duotone: FileTsxDuotoneIcon,
  fill: FileTsxFillIcon,
  light: FileTsxLightIcon,
  regular: FileTsxRegularIcon,
  thin: FileTsxThinIcon,
});
