import { createIcon } from "../../hocs/create-icon.hoc";
import { MagnifyingGlassPlusBoldIcon } from "../bold/magnifying-glass-plus-bold.icon";
import { MagnifyingGlassPlusDuotoneIcon } from "../duotone/magnifying-glass-plus-duotone.icon";
import { MagnifyingGlassPlusFillIcon } from "../fill/magnifying-glass-plus-fill.icon";
import { MagnifyingGlassPlusLightIcon } from "../light/magnifying-glass-plus-light.icon";
import { MagnifyingGlassPlusRegularIcon } from "../regular/magnifying-glass-plus-regular.icon";
import { MagnifyingGlassPlusThinIcon } from "../thin/magnifying-glass-plus-thin.icon";

export const MagnifyingGlassPlusIcon = createIcon("MagnifyingGlassPlus", {
  bold: MagnifyingGlassPlusBoldIcon,
  duotone: MagnifyingGlassPlusDuotoneIcon,
  fill: MagnifyingGlassPlusFillIcon,
  light: MagnifyingGlassPlusLightIcon,
  regular: MagnifyingGlassPlusRegularIcon,
  thin: MagnifyingGlassPlusThinIcon,
});
