import { createIcon } from "../../hocs/create-icon.hoc";
import { MagnifyingGlassBoldIcon } from "../bold/magnifying-glass-bold.icon";
import { MagnifyingGlassDuotoneIcon } from "../duotone/magnifying-glass-duotone.icon";
import { MagnifyingGlassFillIcon } from "../fill/magnifying-glass-fill.icon";
import { MagnifyingGlassLightIcon } from "../light/magnifying-glass-light.icon";
import { MagnifyingGlassRegularIcon } from "../regular/magnifying-glass-regular.icon";
import { MagnifyingGlassThinIcon } from "../thin/magnifying-glass-thin.icon";

export const MagnifyingGlassIcon = createIcon("MagnifyingGlass", {
  bold: MagnifyingGlassBoldIcon,
  duotone: MagnifyingGlassDuotoneIcon,
  fill: MagnifyingGlassFillIcon,
  light: MagnifyingGlassLightIcon,
  regular: MagnifyingGlassRegularIcon,
  thin: MagnifyingGlassThinIcon,
});
