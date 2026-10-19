import { createIcon } from "../../hocs/create-icon.hoc";
import { ListMagnifyingGlassBoldIcon } from "../bold/list-magnifying-glass-bold.icon";
import { ListMagnifyingGlassDuotoneIcon } from "../duotone/list-magnifying-glass-duotone.icon";
import { ListMagnifyingGlassFillIcon } from "../fill/list-magnifying-glass-fill.icon";
import { ListMagnifyingGlassLightIcon } from "../light/list-magnifying-glass-light.icon";
import { ListMagnifyingGlassRegularIcon } from "../regular/list-magnifying-glass-regular.icon";
import { ListMagnifyingGlassThinIcon } from "../thin/list-magnifying-glass-thin.icon";

export const ListMagnifyingGlassIcon = createIcon("ListMagnifyingGlass", {
  bold: ListMagnifyingGlassBoldIcon,
  duotone: ListMagnifyingGlassDuotoneIcon,
  fill: ListMagnifyingGlassFillIcon,
  light: ListMagnifyingGlassLightIcon,
  regular: ListMagnifyingGlassRegularIcon,
  thin: ListMagnifyingGlassThinIcon,
});
