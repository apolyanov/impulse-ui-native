import { createIcon } from "../../hocs/create-icon.hoc";
import { FileCBoldIcon } from "../bold/file-c-bold.icon";
import { FileCDuotoneIcon } from "../duotone/file-c-duotone.icon";
import { FileCFillIcon } from "../fill/file-c-fill.icon";
import { FileCLightIcon } from "../light/file-c-light.icon";
import { FileCRegularIcon } from "../regular/file-c-regular.icon";
import { FileCThinIcon } from "../thin/file-c-thin.icon";

export const FileCIcon = createIcon("FileC", {
  bold: FileCBoldIcon,
  duotone: FileCDuotoneIcon,
  fill: FileCFillIcon,
  light: FileCLightIcon,
  regular: FileCRegularIcon,
  thin: FileCThinIcon,
});
