import { createIcon } from "../../hocs/create-icon.hoc";
import { CellSignalHighBoldIcon } from "../bold/cell-signal-high-bold.icon";
import { CellSignalHighDuotoneIcon } from "../duotone/cell-signal-high-duotone.icon";
import { CellSignalHighFillIcon } from "../fill/cell-signal-high-fill.icon";
import { CellSignalHighLightIcon } from "../light/cell-signal-high-light.icon";
import { CellSignalHighRegularIcon } from "../regular/cell-signal-high-regular.icon";
import { CellSignalHighThinIcon } from "../thin/cell-signal-high-thin.icon";

export const CellSignalHighIcon = createIcon("CellSignalHigh", {
  bold: CellSignalHighBoldIcon,
  duotone: CellSignalHighDuotoneIcon,
  fill: CellSignalHighFillIcon,
  light: CellSignalHighLightIcon,
  regular: CellSignalHighRegularIcon,
  thin: CellSignalHighThinIcon,
});
