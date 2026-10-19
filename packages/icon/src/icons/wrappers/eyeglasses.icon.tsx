import { createIcon } from "../../hocs/create-icon.hoc";
import { EyeglassesBoldIcon } from "../bold/eyeglasses-bold.icon";
import { EyeglassesDuotoneIcon } from "../duotone/eyeglasses-duotone.icon";
import { EyeglassesFillIcon } from "../fill/eyeglasses-fill.icon";
import { EyeglassesLightIcon } from "../light/eyeglasses-light.icon";
import { EyeglassesRegularIcon } from "../regular/eyeglasses-regular.icon";
import { EyeglassesThinIcon } from "../thin/eyeglasses-thin.icon";

export const EyeglassesIcon = createIcon("Eyeglasses", {
  bold: EyeglassesBoldIcon,
  duotone: EyeglassesDuotoneIcon,
  fill: EyeglassesFillIcon,
  light: EyeglassesLightIcon,
  regular: EyeglassesRegularIcon,
  thin: EyeglassesThinIcon,
});
