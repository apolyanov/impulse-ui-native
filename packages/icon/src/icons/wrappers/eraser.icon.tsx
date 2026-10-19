import { createIcon } from "../../hocs/create-icon.hoc";
import { EraserBoldIcon } from "../bold/eraser-bold.icon";
import { EraserDuotoneIcon } from "../duotone/eraser-duotone.icon";
import { EraserFillIcon } from "../fill/eraser-fill.icon";
import { EraserLightIcon } from "../light/eraser-light.icon";
import { EraserRegularIcon } from "../regular/eraser-regular.icon";
import { EraserThinIcon } from "../thin/eraser-thin.icon";

export const EraserIcon = createIcon("Eraser", {
  bold: EraserBoldIcon,
  duotone: EraserDuotoneIcon,
  fill: EraserFillIcon,
  light: EraserLightIcon,
  regular: EraserRegularIcon,
  thin: EraserThinIcon,
});
