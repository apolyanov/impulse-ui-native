import { createIcon } from "../../hocs/create-icon.hoc";
import { FileDashedBoldIcon } from "../bold/file-dashed-bold.icon";
import { FileDashedDuotoneIcon } from "../duotone/file-dashed-duotone.icon";
import { FileDashedFillIcon } from "../fill/file-dashed-fill.icon";
import { FileDashedLightIcon } from "../light/file-dashed-light.icon";
import { FileDashedRegularIcon } from "../regular/file-dashed-regular.icon";
import { FileDashedThinIcon } from "../thin/file-dashed-thin.icon";

export const FileDashedIcon = createIcon("FileDashed", {
  bold: FileDashedBoldIcon,
  duotone: FileDashedDuotoneIcon,
  fill: FileDashedFillIcon,
  light: FileDashedLightIcon,
  regular: FileDashedRegularIcon,
  thin: FileDashedThinIcon,
});
