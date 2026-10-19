import { createIcon } from "../../hocs/create-icon.hoc";
import { PaintBrushBoldIcon } from "../bold/paint-brush-bold.icon";
import { PaintBrushDuotoneIcon } from "../duotone/paint-brush-duotone.icon";
import { PaintBrushFillIcon } from "../fill/paint-brush-fill.icon";
import { PaintBrushLightIcon } from "../light/paint-brush-light.icon";
import { PaintBrushRegularIcon } from "../regular/paint-brush-regular.icon";
import { PaintBrushThinIcon } from "../thin/paint-brush-thin.icon";

export const PaintBrushIcon = createIcon("PaintBrush", {
  bold: PaintBrushBoldIcon,
  duotone: PaintBrushDuotoneIcon,
  fill: PaintBrushFillIcon,
  light: PaintBrushLightIcon,
  regular: PaintBrushRegularIcon,
  thin: PaintBrushThinIcon,
});
