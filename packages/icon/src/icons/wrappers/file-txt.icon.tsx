import { createIcon } from "../../hocs/create-icon.hoc";
import { FileTxtBoldIcon } from "../bold/file-txt-bold.icon";
import { FileTxtDuotoneIcon } from "../duotone/file-txt-duotone.icon";
import { FileTxtFillIcon } from "../fill/file-txt-fill.icon";
import { FileTxtLightIcon } from "../light/file-txt-light.icon";
import { FileTxtRegularIcon } from "../regular/file-txt-regular.icon";
import { FileTxtThinIcon } from "../thin/file-txt-thin.icon";

export const FileTxtIcon = createIcon("FileTxt", {
  bold: FileTxtBoldIcon,
  duotone: FileTxtDuotoneIcon,
  fill: FileTxtFillIcon,
  light: FileTxtLightIcon,
  regular: FileTxtRegularIcon,
  thin: FileTxtThinIcon,
});
