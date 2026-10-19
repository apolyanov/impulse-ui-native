import { createIcon } from "../../hocs/create-icon.hoc";
import { TrayArrowDownBoldIcon } from "../bold/tray-arrow-down-bold.icon";
import { TrayArrowDownDuotoneIcon } from "../duotone/tray-arrow-down-duotone.icon";
import { TrayArrowDownFillIcon } from "../fill/tray-arrow-down-fill.icon";
import { TrayArrowDownLightIcon } from "../light/tray-arrow-down-light.icon";
import { TrayArrowDownRegularIcon } from "../regular/tray-arrow-down-regular.icon";
import { TrayArrowDownThinIcon } from "../thin/tray-arrow-down-thin.icon";

export const TrayArrowDownIcon = createIcon("TrayArrowDown", {
  bold: TrayArrowDownBoldIcon,
  duotone: TrayArrowDownDuotoneIcon,
  fill: TrayArrowDownFillIcon,
  light: TrayArrowDownLightIcon,
  regular: TrayArrowDownRegularIcon,
  thin: TrayArrowDownThinIcon,
});
