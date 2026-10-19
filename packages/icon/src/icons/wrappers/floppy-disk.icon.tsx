import { createIcon } from "../../hocs/create-icon.hoc";
import { FloppyDiskBoldIcon } from "../bold/floppy-disk-bold.icon";
import { FloppyDiskDuotoneIcon } from "../duotone/floppy-disk-duotone.icon";
import { FloppyDiskFillIcon } from "../fill/floppy-disk-fill.icon";
import { FloppyDiskLightIcon } from "../light/floppy-disk-light.icon";
import { FloppyDiskRegularIcon } from "../regular/floppy-disk-regular.icon";
import { FloppyDiskThinIcon } from "../thin/floppy-disk-thin.icon";

export const FloppyDiskIcon = createIcon("FloppyDisk", {
  bold: FloppyDiskBoldIcon,
  duotone: FloppyDiskDuotoneIcon,
  fill: FloppyDiskFillIcon,
  light: FloppyDiskLightIcon,
  regular: FloppyDiskRegularIcon,
  thin: FloppyDiskThinIcon,
});
