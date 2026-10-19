import { createIcon } from "../../hocs/create-icon.hoc";
import { DesktopTowerBoldIcon } from "../bold/desktop-tower-bold.icon";
import { DesktopTowerDuotoneIcon } from "../duotone/desktop-tower-duotone.icon";
import { DesktopTowerFillIcon } from "../fill/desktop-tower-fill.icon";
import { DesktopTowerLightIcon } from "../light/desktop-tower-light.icon";
import { DesktopTowerRegularIcon } from "../regular/desktop-tower-regular.icon";
import { DesktopTowerThinIcon } from "../thin/desktop-tower-thin.icon";

export const DesktopTowerIcon = createIcon("DesktopTower", {
  bold: DesktopTowerBoldIcon,
  duotone: DesktopTowerDuotoneIcon,
  fill: DesktopTowerFillIcon,
  light: DesktopTowerLightIcon,
  regular: DesktopTowerRegularIcon,
  thin: DesktopTowerThinIcon,
});
