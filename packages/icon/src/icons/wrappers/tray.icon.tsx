import { createIcon } from "../../hocs/create-icon.hoc";
import { TrayBoldIcon } from "../bold/tray-bold.icon";
import { TrayDuotoneIcon } from "../duotone/tray-duotone.icon";
import { TrayFillIcon } from "../fill/tray-fill.icon";
import { TrayLightIcon } from "../light/tray-light.icon";
import { TrayRegularIcon } from "../regular/tray-regular.icon";
import { TrayThinIcon } from "../thin/tray-thin.icon";

export const TrayIcon = createIcon("Tray", {
  bold: TrayBoldIcon,
  duotone: TrayDuotoneIcon,
  fill: TrayFillIcon,
  light: TrayLightIcon,
  regular: TrayRegularIcon,
  thin: TrayThinIcon,
});
