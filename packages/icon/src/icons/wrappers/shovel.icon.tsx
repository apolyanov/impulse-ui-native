import { createIcon } from "../../hocs/create-icon.hoc";
import { ShovelBoldIcon } from "../bold/shovel-bold.icon";
import { ShovelDuotoneIcon } from "../duotone/shovel-duotone.icon";
import { ShovelFillIcon } from "../fill/shovel-fill.icon";
import { ShovelLightIcon } from "../light/shovel-light.icon";
import { ShovelRegularIcon } from "../regular/shovel-regular.icon";
import { ShovelThinIcon } from "../thin/shovel-thin.icon";

export const ShovelIcon = createIcon("Shovel", {
  bold: ShovelBoldIcon,
  duotone: ShovelDuotoneIcon,
  fill: ShovelFillIcon,
  light: ShovelLightIcon,
  regular: ShovelRegularIcon,
  thin: ShovelThinIcon,
});
