import { createIcon } from "../../hocs/create-icon.hoc";
import { WineBoldIcon } from "../bold/wine-bold.icon";
import { WineDuotoneIcon } from "../duotone/wine-duotone.icon";
import { WineFillIcon } from "../fill/wine-fill.icon";
import { WineLightIcon } from "../light/wine-light.icon";
import { WineRegularIcon } from "../regular/wine-regular.icon";
import { WineThinIcon } from "../thin/wine-thin.icon";

export const WineIcon = createIcon("Wine", {
  bold: WineBoldIcon,
  duotone: WineDuotoneIcon,
  fill: WineFillIcon,
  light: WineLightIcon,
  regular: WineRegularIcon,
  thin: WineThinIcon,
});
