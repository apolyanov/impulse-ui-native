import { createIcon } from "../../hocs/create-icon.hoc";
import { PlugsBoldIcon } from "../bold/plugs-bold.icon";
import { PlugsDuotoneIcon } from "../duotone/plugs-duotone.icon";
import { PlugsFillIcon } from "../fill/plugs-fill.icon";
import { PlugsLightIcon } from "../light/plugs-light.icon";
import { PlugsRegularIcon } from "../regular/plugs-regular.icon";
import { PlugsThinIcon } from "../thin/plugs-thin.icon";

export const PlugsIcon = createIcon("Plugs", {
  bold: PlugsBoldIcon,
  duotone: PlugsDuotoneIcon,
  fill: PlugsFillIcon,
  light: PlugsLightIcon,
  regular: PlugsRegularIcon,
  thin: PlugsThinIcon,
});
