import { createIcon } from "../../hocs/create-icon.hoc";
import { ScribbleBoldIcon } from "../bold/scribble-bold.icon";
import { ScribbleDuotoneIcon } from "../duotone/scribble-duotone.icon";
import { ScribbleFillIcon } from "../fill/scribble-fill.icon";
import { ScribbleLightIcon } from "../light/scribble-light.icon";
import { ScribbleRegularIcon } from "../regular/scribble-regular.icon";
import { ScribbleThinIcon } from "../thin/scribble-thin.icon";

export const ScribbleIcon = createIcon("Scribble", {
  bold: ScribbleBoldIcon,
  duotone: ScribbleDuotoneIcon,
  fill: ScribbleFillIcon,
  light: ScribbleLightIcon,
  regular: ScribbleRegularIcon,
  thin: ScribbleThinIcon,
});
