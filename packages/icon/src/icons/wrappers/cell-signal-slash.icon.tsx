import { createIcon } from "../../hocs/create-icon.hoc";
import { CellSignalSlashBoldIcon } from "../bold/cell-signal-slash-bold.icon";
import { CellSignalSlashDuotoneIcon } from "../duotone/cell-signal-slash-duotone.icon";
import { CellSignalSlashFillIcon } from "../fill/cell-signal-slash-fill.icon";
import { CellSignalSlashLightIcon } from "../light/cell-signal-slash-light.icon";
import { CellSignalSlashRegularIcon } from "../regular/cell-signal-slash-regular.icon";
import { CellSignalSlashThinIcon } from "../thin/cell-signal-slash-thin.icon";

export const CellSignalSlashIcon = createIcon("CellSignalSlash", {
  bold: CellSignalSlashBoldIcon,
  duotone: CellSignalSlashDuotoneIcon,
  fill: CellSignalSlashFillIcon,
  light: CellSignalSlashLightIcon,
  regular: CellSignalSlashRegularIcon,
  thin: CellSignalSlashThinIcon,
});
