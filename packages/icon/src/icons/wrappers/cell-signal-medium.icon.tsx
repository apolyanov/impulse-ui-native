import { createIcon } from "../../hocs/create-icon.hoc";
import { CellSignalMediumBoldIcon } from "../bold/cell-signal-medium-bold.icon";
import { CellSignalMediumDuotoneIcon } from "../duotone/cell-signal-medium-duotone.icon";
import { CellSignalMediumFillIcon } from "../fill/cell-signal-medium-fill.icon";
import { CellSignalMediumLightIcon } from "../light/cell-signal-medium-light.icon";
import { CellSignalMediumRegularIcon } from "../regular/cell-signal-medium-regular.icon";
import { CellSignalMediumThinIcon } from "../thin/cell-signal-medium-thin.icon";

export const CellSignalMediumIcon = createIcon("CellSignalMedium", {
  bold: CellSignalMediumBoldIcon,
  duotone: CellSignalMediumDuotoneIcon,
  fill: CellSignalMediumFillIcon,
  light: CellSignalMediumLightIcon,
  regular: CellSignalMediumRegularIcon,
  thin: CellSignalMediumThinIcon,
});
