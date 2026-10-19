import { createIcon } from "../../hocs/create-icon.hoc";
import { FileCppBoldIcon } from "../bold/file-cpp-bold.icon";
import { FileCppDuotoneIcon } from "../duotone/file-cpp-duotone.icon";
import { FileCppFillIcon } from "../fill/file-cpp-fill.icon";
import { FileCppLightIcon } from "../light/file-cpp-light.icon";
import { FileCppRegularIcon } from "../regular/file-cpp-regular.icon";
import { FileCppThinIcon } from "../thin/file-cpp-thin.icon";

export const FileCppIcon = createIcon("FileCpp", {
  bold: FileCppBoldIcon,
  duotone: FileCppDuotoneIcon,
  fill: FileCppFillIcon,
  light: FileCppLightIcon,
  regular: FileCppRegularIcon,
  thin: FileCppThinIcon,
});
