import { createIcon } from "../../hocs/create-icon.hoc";
import { CellTowerBoldIcon } from "../bold/cell-tower-bold.icon";
import { CellTowerDuotoneIcon } from "../duotone/cell-tower-duotone.icon";
import { CellTowerFillIcon } from "../fill/cell-tower-fill.icon";
import { CellTowerLightIcon } from "../light/cell-tower-light.icon";
import { CellTowerRegularIcon } from "../regular/cell-tower-regular.icon";
import { CellTowerThinIcon } from "../thin/cell-tower-thin.icon";

export const CellTowerIcon = createIcon("CellTower", {
  bold: CellTowerBoldIcon,
  duotone: CellTowerDuotoneIcon,
  fill: CellTowerFillIcon,
  light: CellTowerLightIcon,
  regular: CellTowerRegularIcon,
  thin: CellTowerThinIcon,
});
