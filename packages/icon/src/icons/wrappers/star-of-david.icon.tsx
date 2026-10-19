import { createIcon } from "../../hocs/create-icon.hoc";
import { StarOfDavidBoldIcon } from "../bold/star-of-david-bold.icon";
import { StarOfDavidDuotoneIcon } from "../duotone/star-of-david-duotone.icon";
import { StarOfDavidFillIcon } from "../fill/star-of-david-fill.icon";
import { StarOfDavidLightIcon } from "../light/star-of-david-light.icon";
import { StarOfDavidRegularIcon } from "../regular/star-of-david-regular.icon";
import { StarOfDavidThinIcon } from "../thin/star-of-david-thin.icon";

export const StarOfDavidIcon = createIcon("StarOfDavid", {
  bold: StarOfDavidBoldIcon,
  duotone: StarOfDavidDuotoneIcon,
  fill: StarOfDavidFillIcon,
  light: StarOfDavidLightIcon,
  regular: StarOfDavidRegularIcon,
  thin: StarOfDavidThinIcon,
});
