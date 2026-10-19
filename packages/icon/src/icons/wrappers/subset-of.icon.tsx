import { createIcon } from "../../hocs/create-icon.hoc";
import { SubsetOfBoldIcon } from "../bold/subset-of-bold.icon";
import { SubsetOfDuotoneIcon } from "../duotone/subset-of-duotone.icon";
import { SubsetOfFillIcon } from "../fill/subset-of-fill.icon";
import { SubsetOfLightIcon } from "../light/subset-of-light.icon";
import { SubsetOfRegularIcon } from "../regular/subset-of-regular.icon";
import { SubsetOfThinIcon } from "../thin/subset-of-thin.icon";

export const SubsetOfIcon = createIcon("SubsetOf", {
  bold: SubsetOfBoldIcon,
  duotone: SubsetOfDuotoneIcon,
  fill: SubsetOfFillIcon,
  light: SubsetOfLightIcon,
  regular: SubsetOfRegularIcon,
  thin: SubsetOfThinIcon,
});
