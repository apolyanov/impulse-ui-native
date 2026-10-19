import { createIcon } from "../../hocs/create-icon.hoc";
import { DogBoldIcon } from "../bold/dog-bold.icon";
import { DogDuotoneIcon } from "../duotone/dog-duotone.icon";
import { DogFillIcon } from "../fill/dog-fill.icon";
import { DogLightIcon } from "../light/dog-light.icon";
import { DogRegularIcon } from "../regular/dog-regular.icon";
import { DogThinIcon } from "../thin/dog-thin.icon";

export const DogIcon = createIcon("Dog", {
  bold: DogBoldIcon,
  duotone: DogDuotoneIcon,
  fill: DogFillIcon,
  light: DogLightIcon,
  regular: DogRegularIcon,
  thin: DogThinIcon,
});
