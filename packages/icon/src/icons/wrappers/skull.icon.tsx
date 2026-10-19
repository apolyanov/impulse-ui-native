import { createIcon } from "../../hocs/create-icon.hoc";
import { SkullBoldIcon } from "../bold/skull-bold.icon";
import { SkullDuotoneIcon } from "../duotone/skull-duotone.icon";
import { SkullFillIcon } from "../fill/skull-fill.icon";
import { SkullLightIcon } from "../light/skull-light.icon";
import { SkullRegularIcon } from "../regular/skull-regular.icon";
import { SkullThinIcon } from "../thin/skull-thin.icon";

export const SkullIcon = createIcon("Skull", {
  bold: SkullBoldIcon,
  duotone: SkullDuotoneIcon,
  fill: SkullFillIcon,
  light: SkullLightIcon,
  regular: SkullRegularIcon,
  thin: SkullThinIcon,
});
