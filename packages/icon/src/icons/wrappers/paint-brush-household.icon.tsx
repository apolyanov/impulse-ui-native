import { createIcon } from "../../hocs/create-icon.hoc";
import { PaintBrushHouseholdBoldIcon } from "../bold/paint-brush-household-bold.icon";
import { PaintBrushHouseholdDuotoneIcon } from "../duotone/paint-brush-household-duotone.icon";
import { PaintBrushHouseholdFillIcon } from "../fill/paint-brush-household-fill.icon";
import { PaintBrushHouseholdLightIcon } from "../light/paint-brush-household-light.icon";
import { PaintBrushHouseholdRegularIcon } from "../regular/paint-brush-household-regular.icon";
import { PaintBrushHouseholdThinIcon } from "../thin/paint-brush-household-thin.icon";

export const PaintBrushHouseholdIcon = createIcon("PaintBrushHousehold", {
  bold: PaintBrushHouseholdBoldIcon,
  duotone: PaintBrushHouseholdDuotoneIcon,
  fill: PaintBrushHouseholdFillIcon,
  light: PaintBrushHouseholdLightIcon,
  regular: PaintBrushHouseholdRegularIcon,
  thin: PaintBrushHouseholdThinIcon,
});
