import { createIcon } from "../../hocs/create-icon.hoc";
import { BeanieBoldIcon } from "../bold/beanie-bold.icon";
import { BeanieDuotoneIcon } from "../duotone/beanie-duotone.icon";
import { BeanieFillIcon } from "../fill/beanie-fill.icon";
import { BeanieLightIcon } from "../light/beanie-light.icon";
import { BeanieRegularIcon } from "../regular/beanie-regular.icon";
import { BeanieThinIcon } from "../thin/beanie-thin.icon";

export const BeanieIcon = createIcon("Beanie", {
  bold: BeanieBoldIcon,
  duotone: BeanieDuotoneIcon,
  fill: BeanieFillIcon,
  light: BeanieLightIcon,
  regular: BeanieRegularIcon,
  thin: BeanieThinIcon,
});
