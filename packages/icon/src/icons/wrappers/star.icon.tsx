import { createIcon } from "../../hocs/create-icon.hoc";
import { StarBoldIcon } from "../bold/star-bold.icon";
import { StarDuotoneIcon } from "../duotone/star-duotone.icon";
import { StarFillIcon } from "../fill/star-fill.icon";
import { StarLightIcon } from "../light/star-light.icon";
import { StarRegularIcon } from "../regular/star-regular.icon";
import { StarThinIcon } from "../thin/star-thin.icon";

export const StarIcon = createIcon("Star", {
  bold: StarBoldIcon,
  duotone: StarDuotoneIcon,
  fill: StarFillIcon,
  light: StarLightIcon,
  regular: StarRegularIcon,
  thin: StarThinIcon,
});
