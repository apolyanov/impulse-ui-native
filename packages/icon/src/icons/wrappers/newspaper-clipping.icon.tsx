import { createIcon } from "../../hocs/create-icon.hoc";
import { NewspaperClippingBoldIcon } from "../bold/newspaper-clipping-bold.icon";
import { NewspaperClippingDuotoneIcon } from "../duotone/newspaper-clipping-duotone.icon";
import { NewspaperClippingFillIcon } from "../fill/newspaper-clipping-fill.icon";
import { NewspaperClippingLightIcon } from "../light/newspaper-clipping-light.icon";
import { NewspaperClippingRegularIcon } from "../regular/newspaper-clipping-regular.icon";
import { NewspaperClippingThinIcon } from "../thin/newspaper-clipping-thin.icon";

export const NewspaperClippingIcon = createIcon("NewspaperClipping", {
  bold: NewspaperClippingBoldIcon,
  duotone: NewspaperClippingDuotoneIcon,
  fill: NewspaperClippingFillIcon,
  light: NewspaperClippingLightIcon,
  regular: NewspaperClippingRegularIcon,
  thin: NewspaperClippingThinIcon,
});
