import { createIcon } from "../../hocs/create-icon.hoc";
import { PaletteBoldIcon } from "../bold/palette-bold.icon";
import { PaletteDuotoneIcon } from "../duotone/palette-duotone.icon";
import { PaletteFillIcon } from "../fill/palette-fill.icon";
import { PaletteLightIcon } from "../light/palette-light.icon";
import { PaletteRegularIcon } from "../regular/palette-regular.icon";
import { PaletteThinIcon } from "../thin/palette-thin.icon";

export const PaletteIcon = createIcon("Palette", {
  bold: PaletteBoldIcon,
  duotone: PaletteDuotoneIcon,
  fill: PaletteFillIcon,
  light: PaletteLightIcon,
  regular: PaletteRegularIcon,
  thin: PaletteThinIcon,
});
