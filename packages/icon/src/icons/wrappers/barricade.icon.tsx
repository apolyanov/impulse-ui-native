import { createIcon } from "../../hocs/create-icon.hoc";
import { BarricadeBoldIcon } from "../bold/barricade-bold.icon";
import { BarricadeDuotoneIcon } from "../duotone/barricade-duotone.icon";
import { BarricadeFillIcon } from "../fill/barricade-fill.icon";
import { BarricadeLightIcon } from "../light/barricade-light.icon";
import { BarricadeRegularIcon } from "../regular/barricade-regular.icon";
import { BarricadeThinIcon } from "../thin/barricade-thin.icon";

export const BarricadeIcon = createIcon("Barricade", {
  bold: BarricadeBoldIcon,
  duotone: BarricadeDuotoneIcon,
  fill: BarricadeFillIcon,
  light: BarricadeLightIcon,
  regular: BarricadeRegularIcon,
  thin: BarricadeThinIcon,
});
