import { createIcon } from "../../hocs/create-icon.hoc";
import { FileCSharpBoldIcon } from "../bold/file-c-sharp-bold.icon";
import { FileCSharpDuotoneIcon } from "../duotone/file-c-sharp-duotone.icon";
import { FileCSharpFillIcon } from "../fill/file-c-sharp-fill.icon";
import { FileCSharpLightIcon } from "../light/file-c-sharp-light.icon";
import { FileCSharpRegularIcon } from "../regular/file-c-sharp-regular.icon";
import { FileCSharpThinIcon } from "../thin/file-c-sharp-thin.icon";

export const FileCSharpIcon = createIcon("FileCSharp", {
  bold: FileCSharpBoldIcon,
  duotone: FileCSharpDuotoneIcon,
  fill: FileCSharpFillIcon,
  light: FileCSharpLightIcon,
  regular: FileCSharpRegularIcon,
  thin: FileCSharpThinIcon,
});
