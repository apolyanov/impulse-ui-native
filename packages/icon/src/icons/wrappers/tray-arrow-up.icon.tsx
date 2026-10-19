import { createIcon } from "../../hocs/create-icon.hoc";
import { TrayArrowUpBoldIcon } from "../bold/tray-arrow-up-bold.icon";
import { TrayArrowUpDuotoneIcon } from "../duotone/tray-arrow-up-duotone.icon";
import { TrayArrowUpFillIcon } from "../fill/tray-arrow-up-fill.icon";
import { TrayArrowUpLightIcon } from "../light/tray-arrow-up-light.icon";
import { TrayArrowUpRegularIcon } from "../regular/tray-arrow-up-regular.icon";
import { TrayArrowUpThinIcon } from "../thin/tray-arrow-up-thin.icon";

export const TrayArrowUpIcon = createIcon("TrayArrowUp", {
  bold: TrayArrowUpBoldIcon,
  duotone: TrayArrowUpDuotoneIcon,
  fill: TrayArrowUpFillIcon,
  light: TrayArrowUpLightIcon,
  regular: TrayArrowUpRegularIcon,
  thin: TrayArrowUpThinIcon,
});
