import { createIcon } from "../../hocs/create-icon.hoc";
import { PaintBrushBroadBoldIcon } from "../bold/paint-brush-broad-bold.icon";
import { PaintBrushBroadDuotoneIcon } from "../duotone/paint-brush-broad-duotone.icon";
import { PaintBrushBroadFillIcon } from "../fill/paint-brush-broad-fill.icon";
import { PaintBrushBroadLightIcon } from "../light/paint-brush-broad-light.icon";
import { PaintBrushBroadRegularIcon } from "../regular/paint-brush-broad-regular.icon";
import { PaintBrushBroadThinIcon } from "../thin/paint-brush-broad-thin.icon";

export const PaintBrushBroadIcon = createIcon("PaintBrushBroad", {
  bold: PaintBrushBroadBoldIcon,
  duotone: PaintBrushBroadDuotoneIcon,
  fill: PaintBrushBroadFillIcon,
  light: PaintBrushBroadLightIcon,
  regular: PaintBrushBroadRegularIcon,
  thin: PaintBrushBroadThinIcon,
});
