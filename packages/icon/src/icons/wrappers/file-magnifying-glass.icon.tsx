import { createIcon } from "../../hocs/create-icon.hoc";
import { FileMagnifyingGlassBoldIcon } from "../bold/file-magnifying-glass-bold.icon";
import { FileMagnifyingGlassDuotoneIcon } from "../duotone/file-magnifying-glass-duotone.icon";
import { FileMagnifyingGlassFillIcon } from "../fill/file-magnifying-glass-fill.icon";
import { FileMagnifyingGlassLightIcon } from "../light/file-magnifying-glass-light.icon";
import { FileMagnifyingGlassRegularIcon } from "../regular/file-magnifying-glass-regular.icon";
import { FileMagnifyingGlassThinIcon } from "../thin/file-magnifying-glass-thin.icon";

export const FileMagnifyingGlassIcon = createIcon("FileMagnifyingGlass", {
  bold: FileMagnifyingGlassBoldIcon,
  duotone: FileMagnifyingGlassDuotoneIcon,
  fill: FileMagnifyingGlassFillIcon,
  light: FileMagnifyingGlassLightIcon,
  regular: FileMagnifyingGlassRegularIcon,
  thin: FileMagnifyingGlassThinIcon,
});
