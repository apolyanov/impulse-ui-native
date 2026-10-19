import { createIcon } from "../../hocs/create-icon.hoc";
import { CellSignalFullBoldIcon } from "../bold/cell-signal-full-bold.icon";
import { CellSignalFullDuotoneIcon } from "../duotone/cell-signal-full-duotone.icon";
import { CellSignalFullFillIcon } from "../fill/cell-signal-full-fill.icon";
import { CellSignalFullLightIcon } from "../light/cell-signal-full-light.icon";
import { CellSignalFullRegularIcon } from "../regular/cell-signal-full-regular.icon";
import { CellSignalFullThinIcon } from "../thin/cell-signal-full-thin.icon";

export const CellSignalFullIcon = createIcon("CellSignalFull", {
  bold: CellSignalFullBoldIcon,
  duotone: CellSignalFullDuotoneIcon,
  fill: CellSignalFullFillIcon,
  light: CellSignalFullLightIcon,
  regular: CellSignalFullRegularIcon,
  thin: CellSignalFullThinIcon,
});
