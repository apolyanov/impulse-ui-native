import { createIcon } from "../../hocs/create-icon.hoc";
import { StarAndCrescentBoldIcon } from "../bold/star-and-crescent-bold.icon";
import { StarAndCrescentDuotoneIcon } from "../duotone/star-and-crescent-duotone.icon";
import { StarAndCrescentFillIcon } from "../fill/star-and-crescent-fill.icon";
import { StarAndCrescentLightIcon } from "../light/star-and-crescent-light.icon";
import { StarAndCrescentRegularIcon } from "../regular/star-and-crescent-regular.icon";
import { StarAndCrescentThinIcon } from "../thin/star-and-crescent-thin.icon";

export const StarAndCrescentIcon = createIcon("StarAndCrescent", {
  bold: StarAndCrescentBoldIcon,
  duotone: StarAndCrescentDuotoneIcon,
  fill: StarAndCrescentFillIcon,
  light: StarAndCrescentLightIcon,
  regular: StarAndCrescentRegularIcon,
  thin: StarAndCrescentThinIcon,
});
