import { createIcon } from "../../hocs/create-icon.hoc";
import { FileLockBoldIcon } from "../bold/file-lock-bold.icon";
import { FileLockDuotoneIcon } from "../duotone/file-lock-duotone.icon";
import { FileLockFillIcon } from "../fill/file-lock-fill.icon";
import { FileLockLightIcon } from "../light/file-lock-light.icon";
import { FileLockRegularIcon } from "../regular/file-lock-regular.icon";
import { FileLockThinIcon } from "../thin/file-lock-thin.icon";

export const FileLockIcon = createIcon("FileLock", {
  bold: FileLockBoldIcon,
  duotone: FileLockDuotoneIcon,
  fill: FileLockFillIcon,
  light: FileLockLightIcon,
  regular: FileLockRegularIcon,
  thin: FileLockThinIcon,
});
