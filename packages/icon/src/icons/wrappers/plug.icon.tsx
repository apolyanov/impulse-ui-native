import { createIcon } from "../../hocs/create-icon.hoc";
import { PlugBoldIcon } from "../bold/plug-bold.icon";
import { PlugDuotoneIcon } from "../duotone/plug-duotone.icon";
import { PlugFillIcon } from "../fill/plug-fill.icon";
import { PlugLightIcon } from "../light/plug-light.icon";
import { PlugRegularIcon } from "../regular/plug-regular.icon";
import { PlugThinIcon } from "../thin/plug-thin.icon";

export const PlugIcon = createIcon("Plug", {
  bold: PlugBoldIcon,
  duotone: PlugDuotoneIcon,
  fill: PlugFillIcon,
  light: PlugLightIcon,
  regular: PlugRegularIcon,
  thin: PlugThinIcon,
});
