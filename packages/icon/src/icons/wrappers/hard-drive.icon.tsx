import { createIcon } from "../../hocs/create-icon.hoc";
import { HardDriveBoldIcon } from "../bold/hard-drive-bold.icon";
import { HardDriveDuotoneIcon } from "../duotone/hard-drive-duotone.icon";
import { HardDriveFillIcon } from "../fill/hard-drive-fill.icon";
import { HardDriveLightIcon } from "../light/hard-drive-light.icon";
import { HardDriveRegularIcon } from "../regular/hard-drive-regular.icon";
import { HardDriveThinIcon } from "../thin/hard-drive-thin.icon";

export const HardDriveIcon = createIcon("HardDrive", {
  bold: HardDriveBoldIcon,
  duotone: HardDriveDuotoneIcon,
  fill: HardDriveFillIcon,
  light: HardDriveLightIcon,
  regular: HardDriveRegularIcon,
  thin: HardDriveThinIcon,
});
