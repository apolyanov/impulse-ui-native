import { createIcon } from "../../hocs/create-icon.hoc";
import { CellSignalNoneBoldIcon } from "../bold/cell-signal-none-bold.icon";
import { CellSignalNoneDuotoneIcon } from "../duotone/cell-signal-none-duotone.icon";
import { CellSignalNoneFillIcon } from "../fill/cell-signal-none-fill.icon";
import { CellSignalNoneLightIcon } from "../light/cell-signal-none-light.icon";
import { CellSignalNoneRegularIcon } from "../regular/cell-signal-none-regular.icon";
import { CellSignalNoneThinIcon } from "../thin/cell-signal-none-thin.icon";

export const CellSignalNoneIcon = createIcon("CellSignalNone", {
  bold: CellSignalNoneBoldIcon,
  duotone: CellSignalNoneDuotoneIcon,
  fill: CellSignalNoneFillIcon,
  light: CellSignalNoneLightIcon,
  regular: CellSignalNoneRegularIcon,
  thin: CellSignalNoneThinIcon,
});
