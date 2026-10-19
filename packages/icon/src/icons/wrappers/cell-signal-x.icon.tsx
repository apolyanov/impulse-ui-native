import { createIcon } from "../../hocs/create-icon.hoc";
import { CellSignalXBoldIcon } from "../bold/cell-signal-x-bold.icon";
import { CellSignalXDuotoneIcon } from "../duotone/cell-signal-x-duotone.icon";
import { CellSignalXFillIcon } from "../fill/cell-signal-x-fill.icon";
import { CellSignalXLightIcon } from "../light/cell-signal-x-light.icon";
import { CellSignalXRegularIcon } from "../regular/cell-signal-x-regular.icon";
import { CellSignalXThinIcon } from "../thin/cell-signal-x-thin.icon";

export const CellSignalXIcon = createIcon("CellSignalX", {
  bold: CellSignalXBoldIcon,
  duotone: CellSignalXDuotoneIcon,
  fill: CellSignalXFillIcon,
  light: CellSignalXLightIcon,
  regular: CellSignalXRegularIcon,
  thin: CellSignalXThinIcon,
});
