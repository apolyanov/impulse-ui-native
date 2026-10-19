import { createIcon } from "../../hocs/create-icon.hoc";
import { IslandBoldIcon } from "../bold/island-bold.icon";
import { IslandDuotoneIcon } from "../duotone/island-duotone.icon";
import { IslandFillIcon } from "../fill/island-fill.icon";
import { IslandLightIcon } from "../light/island-light.icon";
import { IslandRegularIcon } from "../regular/island-regular.icon";
import { IslandThinIcon } from "../thin/island-thin.icon";

export const IslandIcon = createIcon("Island", {
  bold: IslandBoldIcon,
  duotone: IslandDuotoneIcon,
  fill: IslandFillIcon,
  light: IslandLightIcon,
  regular: IslandRegularIcon,
  thin: IslandThinIcon,
});
