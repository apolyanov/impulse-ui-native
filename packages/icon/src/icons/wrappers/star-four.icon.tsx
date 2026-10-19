import { createIcon } from "../../hocs/create-icon.hoc";
import { StarFourBoldIcon } from "../bold/star-four-bold.icon";
import { StarFourDuotoneIcon } from "../duotone/star-four-duotone.icon";
import { StarFourFillIcon } from "../fill/star-four-fill.icon";
import { StarFourLightIcon } from "../light/star-four-light.icon";
import { StarFourRegularIcon } from "../regular/star-four-regular.icon";
import { StarFourThinIcon } from "../thin/star-four-thin.icon";

export const StarFourIcon = createIcon("StarFour", {
  bold: StarFourBoldIcon,
  duotone: StarFourDuotoneIcon,
  fill: StarFourFillIcon,
  light: StarFourLightIcon,
  regular: StarFourRegularIcon,
  thin: StarFourThinIcon,
});
