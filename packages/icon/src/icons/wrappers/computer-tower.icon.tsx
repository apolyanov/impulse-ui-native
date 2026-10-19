import { createIcon } from "../../hocs/create-icon.hoc";
import { ComputerTowerBoldIcon } from "../bold/computer-tower-bold.icon";
import { ComputerTowerDuotoneIcon } from "../duotone/computer-tower-duotone.icon";
import { ComputerTowerFillIcon } from "../fill/computer-tower-fill.icon";
import { ComputerTowerLightIcon } from "../light/computer-tower-light.icon";
import { ComputerTowerRegularIcon } from "../regular/computer-tower-regular.icon";
import { ComputerTowerThinIcon } from "../thin/computer-tower-thin.icon";

export const ComputerTowerIcon = createIcon("ComputerTower", {
  bold: ComputerTowerBoldIcon,
  duotone: ComputerTowerDuotoneIcon,
  fill: ComputerTowerFillIcon,
  light: ComputerTowerLightIcon,
  regular: ComputerTowerRegularIcon,
  thin: ComputerTowerThinIcon,
});
