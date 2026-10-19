import { createIcon } from "../../hocs/create-icon.hoc";
import { PaintRollerBoldIcon } from "../bold/paint-roller-bold.icon";
import { PaintRollerDuotoneIcon } from "../duotone/paint-roller-duotone.icon";
import { PaintRollerFillIcon } from "../fill/paint-roller-fill.icon";
import { PaintRollerLightIcon } from "../light/paint-roller-light.icon";
import { PaintRollerRegularIcon } from "../regular/paint-roller-regular.icon";
import { PaintRollerThinIcon } from "../thin/paint-roller-thin.icon";

export const PaintRollerIcon = createIcon("PaintRoller", {
  bold: PaintRollerBoldIcon,
  duotone: PaintRollerDuotoneIcon,
  fill: PaintRollerFillIcon,
  light: PaintRollerLightIcon,
  regular: PaintRollerRegularIcon,
  thin: PaintRollerThinIcon,
});
