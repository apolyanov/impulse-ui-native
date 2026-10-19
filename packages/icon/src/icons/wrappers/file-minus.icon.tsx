import { createIcon } from "../../hocs/create-icon.hoc";
import { FileMinusBoldIcon } from "../bold/file-minus-bold.icon";
import { FileMinusDuotoneIcon } from "../duotone/file-minus-duotone.icon";
import { FileMinusFillIcon } from "../fill/file-minus-fill.icon";
import { FileMinusLightIcon } from "../light/file-minus-light.icon";
import { FileMinusRegularIcon } from "../regular/file-minus-regular.icon";
import { FileMinusThinIcon } from "../thin/file-minus-thin.icon";

export const FileMinusIcon = createIcon("FileMinus", {
  bold: FileMinusBoldIcon,
  duotone: FileMinusDuotoneIcon,
  fill: FileMinusFillIcon,
  light: FileMinusLightIcon,
  regular: FileMinusRegularIcon,
  thin: FileMinusThinIcon,
});
