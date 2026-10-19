import { createIcon } from "../../hocs/create-icon.hoc";
import { FileRsBoldIcon } from "../bold/file-rs-bold.icon";
import { FileRsDuotoneIcon } from "../duotone/file-rs-duotone.icon";
import { FileRsFillIcon } from "../fill/file-rs-fill.icon";
import { FileRsLightIcon } from "../light/file-rs-light.icon";
import { FileRsRegularIcon } from "../regular/file-rs-regular.icon";
import { FileRsThinIcon } from "../thin/file-rs-thin.icon";

export const FileRsIcon = createIcon("FileRs", {
  bold: FileRsBoldIcon,
  duotone: FileRsDuotoneIcon,
  fill: FileRsFillIcon,
  light: FileRsLightIcon,
  regular: FileRsRegularIcon,
  thin: FileRsThinIcon,
});
