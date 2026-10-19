import { createIcon } from "../../hocs/create-icon.hoc";
import { BirdBoldIcon } from "../bold/bird-bold.icon";
import { BirdDuotoneIcon } from "../duotone/bird-duotone.icon";
import { BirdFillIcon } from "../fill/bird-fill.icon";
import { BirdLightIcon } from "../light/bird-light.icon";
import { BirdRegularIcon } from "../regular/bird-regular.icon";
import { BirdThinIcon } from "../thin/bird-thin.icon";

export const BirdIcon = createIcon("Bird", {
  bold: BirdBoldIcon,
  duotone: BirdDuotoneIcon,
  fill: BirdFillIcon,
  light: BirdLightIcon,
  regular: BirdRegularIcon,
  thin: BirdThinIcon,
});
