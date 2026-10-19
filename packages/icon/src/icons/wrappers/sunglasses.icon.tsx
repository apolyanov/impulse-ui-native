import { createIcon } from "../../hocs/create-icon.hoc";
import { SunglassesBoldIcon } from "../bold/sunglasses-bold.icon";
import { SunglassesDuotoneIcon } from "../duotone/sunglasses-duotone.icon";
import { SunglassesFillIcon } from "../fill/sunglasses-fill.icon";
import { SunglassesLightIcon } from "../light/sunglasses-light.icon";
import { SunglassesRegularIcon } from "../regular/sunglasses-regular.icon";
import { SunglassesThinIcon } from "../thin/sunglasses-thin.icon";

export const SunglassesIcon = createIcon("Sunglasses", {
  bold: SunglassesBoldIcon,
  duotone: SunglassesDuotoneIcon,
  fill: SunglassesFillIcon,
  light: SunglassesLightIcon,
  regular: SunglassesRegularIcon,
  thin: SunglassesThinIcon,
});
