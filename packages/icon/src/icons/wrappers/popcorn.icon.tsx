import { createIcon } from "../../hocs/create-icon.hoc";
import { PopcornBoldIcon } from "../bold/popcorn-bold.icon";
import { PopcornDuotoneIcon } from "../duotone/popcorn-duotone.icon";
import { PopcornFillIcon } from "../fill/popcorn-fill.icon";
import { PopcornLightIcon } from "../light/popcorn-light.icon";
import { PopcornRegularIcon } from "../regular/popcorn-regular.icon";
import { PopcornThinIcon } from "../thin/popcorn-thin.icon";

export const PopcornIcon = createIcon("Popcorn", {
  bold: PopcornBoldIcon,
  duotone: PopcornDuotoneIcon,
  fill: PopcornFillIcon,
  light: PopcornLightIcon,
  regular: PopcornRegularIcon,
  thin: PopcornThinIcon,
});
