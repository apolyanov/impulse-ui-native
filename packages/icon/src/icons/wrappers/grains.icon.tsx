import { createIcon } from "../../hocs/create-icon.hoc";
import { GrainsBoldIcon } from "../bold/grains-bold.icon";
import { GrainsDuotoneIcon } from "../duotone/grains-duotone.icon";
import { GrainsFillIcon } from "../fill/grains-fill.icon";
import { GrainsLightIcon } from "../light/grains-light.icon";
import { GrainsRegularIcon } from "../regular/grains-regular.icon";
import { GrainsThinIcon } from "../thin/grains-thin.icon";

export const GrainsIcon = createIcon("Grains", {
  bold: GrainsBoldIcon,
  duotone: GrainsDuotoneIcon,
  fill: GrainsFillIcon,
  light: GrainsLightIcon,
  regular: GrainsRegularIcon,
  thin: GrainsThinIcon,
});
