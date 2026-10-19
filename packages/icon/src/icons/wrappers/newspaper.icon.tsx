import { createIcon } from "../../hocs/create-icon.hoc";
import { NewspaperBoldIcon } from "../bold/newspaper-bold.icon";
import { NewspaperDuotoneIcon } from "../duotone/newspaper-duotone.icon";
import { NewspaperFillIcon } from "../fill/newspaper-fill.icon";
import { NewspaperLightIcon } from "../light/newspaper-light.icon";
import { NewspaperRegularIcon } from "../regular/newspaper-regular.icon";
import { NewspaperThinIcon } from "../thin/newspaper-thin.icon";

export const NewspaperIcon = createIcon("Newspaper", {
  bold: NewspaperBoldIcon,
  duotone: NewspaperDuotoneIcon,
  fill: NewspaperFillIcon,
  light: NewspaperLightIcon,
  regular: NewspaperRegularIcon,
  thin: NewspaperThinIcon,
});
