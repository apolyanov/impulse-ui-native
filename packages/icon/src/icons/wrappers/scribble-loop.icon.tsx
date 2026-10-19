import { createIcon } from "../../hocs/create-icon.hoc";
import { ScribbleLoopBoldIcon } from "../bold/scribble-loop-bold.icon";
import { ScribbleLoopDuotoneIcon } from "../duotone/scribble-loop-duotone.icon";
import { ScribbleLoopFillIcon } from "../fill/scribble-loop-fill.icon";
import { ScribbleLoopLightIcon } from "../light/scribble-loop-light.icon";
import { ScribbleLoopRegularIcon } from "../regular/scribble-loop-regular.icon";
import { ScribbleLoopThinIcon } from "../thin/scribble-loop-thin.icon";

export const ScribbleLoopIcon = createIcon("ScribbleLoop", {
  bold: ScribbleLoopBoldIcon,
  duotone: ScribbleLoopDuotoneIcon,
  fill: ScribbleLoopFillIcon,
  light: ScribbleLoopLightIcon,
  regular: ScribbleLoopRegularIcon,
  thin: ScribbleLoopThinIcon,
});
