import { createIcon } from "../../hocs/create-icon.hoc";
import { HardDrivesBoldIcon } from "../bold/hard-drives-bold.icon";
import { HardDrivesDuotoneIcon } from "../duotone/hard-drives-duotone.icon";
import { HardDrivesFillIcon } from "../fill/hard-drives-fill.icon";
import { HardDrivesLightIcon } from "../light/hard-drives-light.icon";
import { HardDrivesRegularIcon } from "../regular/hard-drives-regular.icon";
import { HardDrivesThinIcon } from "../thin/hard-drives-thin.icon";

export const HardDrivesIcon = createIcon("HardDrives", {
  bold: HardDrivesBoldIcon,
  duotone: HardDrivesDuotoneIcon,
  fill: HardDrivesFillIcon,
  light: HardDrivesLightIcon,
  regular: HardDrivesRegularIcon,
  thin: HardDrivesThinIcon,
});
