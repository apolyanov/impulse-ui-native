import { createIcon } from "../../hocs/create-icon.hoc";
import { FloppyDiskBackBoldIcon } from "../bold/floppy-disk-back-bold.icon";
import { FloppyDiskBackDuotoneIcon } from "../duotone/floppy-disk-back-duotone.icon";
import { FloppyDiskBackFillIcon } from "../fill/floppy-disk-back-fill.icon";
import { FloppyDiskBackLightIcon } from "../light/floppy-disk-back-light.icon";
import { FloppyDiskBackRegularIcon } from "../regular/floppy-disk-back-regular.icon";
import { FloppyDiskBackThinIcon } from "../thin/floppy-disk-back-thin.icon";

export const FloppyDiskBackIcon = createIcon("FloppyDiskBack", {
  bold: FloppyDiskBackBoldIcon,
  duotone: FloppyDiskBackDuotoneIcon,
  fill: FloppyDiskBackFillIcon,
  light: FloppyDiskBackLightIcon,
  regular: FloppyDiskBackRegularIcon,
  thin: FloppyDiskBackThinIcon,
});
