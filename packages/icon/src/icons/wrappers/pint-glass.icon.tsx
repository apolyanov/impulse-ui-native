import { createIcon } from "../../hocs/create-icon.hoc";
import { PintGlassBoldIcon } from "../bold/pint-glass-bold.icon";
import { PintGlassDuotoneIcon } from "../duotone/pint-glass-duotone.icon";
import { PintGlassFillIcon } from "../fill/pint-glass-fill.icon";
import { PintGlassLightIcon } from "../light/pint-glass-light.icon";
import { PintGlassRegularIcon } from "../regular/pint-glass-regular.icon";
import { PintGlassThinIcon } from "../thin/pint-glass-thin.icon";

export const PintGlassIcon = createIcon("PintGlass", {
  bold: PintGlassBoldIcon,
  duotone: PintGlassDuotoneIcon,
  fill: PintGlassFillIcon,
  light: PintGlassLightIcon,
  regular: PintGlassRegularIcon,
  thin: PintGlassThinIcon,
});
