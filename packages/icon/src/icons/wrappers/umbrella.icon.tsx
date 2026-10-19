import { createIcon } from "../../hocs/create-icon.hoc";
import { UmbrellaBoldIcon } from "../bold/umbrella-bold.icon";
import { UmbrellaDuotoneIcon } from "../duotone/umbrella-duotone.icon";
import { UmbrellaFillIcon } from "../fill/umbrella-fill.icon";
import { UmbrellaLightIcon } from "../light/umbrella-light.icon";
import { UmbrellaRegularIcon } from "../regular/umbrella-regular.icon";
import { UmbrellaThinIcon } from "../thin/umbrella-thin.icon";

export const UmbrellaIcon = createIcon("Umbrella", {
  bold: UmbrellaBoldIcon,
  duotone: UmbrellaDuotoneIcon,
  fill: UmbrellaFillIcon,
  light: UmbrellaLightIcon,
  regular: UmbrellaRegularIcon,
  thin: UmbrellaThinIcon,
});
