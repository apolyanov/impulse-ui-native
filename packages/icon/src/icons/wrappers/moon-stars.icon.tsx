import { createIcon } from "../../hocs/create-icon.hoc";
import { MoonStarsBoldIcon } from "../bold/moon-stars-bold.icon";
import { MoonStarsDuotoneIcon } from "../duotone/moon-stars-duotone.icon";
import { MoonStarsFillIcon } from "../fill/moon-stars-fill.icon";
import { MoonStarsLightIcon } from "../light/moon-stars-light.icon";
import { MoonStarsRegularIcon } from "../regular/moon-stars-regular.icon";
import { MoonStarsThinIcon } from "../thin/moon-stars-thin.icon";

export const MoonStarsIcon = createIcon("MoonStars", {
  bold: MoonStarsBoldIcon,
  duotone: MoonStarsDuotoneIcon,
  fill: MoonStarsFillIcon,
  light: MoonStarsLightIcon,
  regular: MoonStarsRegularIcon,
  thin: MoonStarsThinIcon,
});
